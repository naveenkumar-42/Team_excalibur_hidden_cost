puppeteer = require('puppeteer');

async function run(link) {
    const browser = await puppeteer.launch({ userDataDir: "./user-data", headless: false });
    const page = await browser.newPage();
    await page.goto(link);
    await page.click('#buy-now-button');
    await page.waitForNavigation();

    if (await page.$('#ap_email', { timeout: 5000 })) {
        console.log('Login page found');
        if (await page.$('#ap_email[type="hidden"]')) {
            await page.type('#ap_password', 'jeeva2005');
            await page.click('#signInSubmit');
            await page.waitForNavigation();
        } else {
            await page.type('#ap_email', '9894789409');
            await page.click('#continue');
            await page.waitForNavigation();
            await page.type('#ap_password', 'jeeva2005');
            await page.click('#signInSubmit');
            await page.waitForNavigation();
        }
    }
    
    await page.click('select');
    const options = await page.evaluate(() => {
        const optionsArray = [];
        const selectEle = document.querySelector("select[name='ppw-bankSelection_dropdown']");
        if (selectEle) {
            const options = selectEle.querySelectorAll("option");
            options.forEach(option => {
                optionsArray.push({value: option.value, text: option.text});
            });
        }
        optionsArray.shift();
        return optionsArray;
    });

    for (const option of options) {
        await page.select("select[name='ppw-bankSelection_dropdown']", option.value);
        await page.evaluate(() => {
            return new Promise(resolve => {
              setTimeout(resolve, 2000);
            });
        });
        if ((await page.content()).includes(`${option.text} is not available due to technical issue. Choose a different payment option to complete your payment.`)) {
            continue;
        } else {
            break;
        }
    }

    await page.click('#orderSummaryPrimaryActionBtn-announce');
    await page.waitForSelector('#subtotals-marketplace-spp-bottom');

    const result = await page.$eval('#subtotals-marketplace-table', el => {
        const lines = el.innerText.split('\n').filter(line => line.trim() !== '');
    
        return lines.reduce((acc, line) => {
            const [key, value] = line.split('\t');
            const formattedKey = key.endsWith(':') ? key.slice(0, -1) : key;
            const formattedValue = value.includes('₹') ? value.replace(/[₹,]/g, '') : value;
            const formattedValue1 = formattedValue.includes('.') ? formattedValue.split('.')[0] : formattedValue;
    
            acc[formattedKey] = formattedValue1;
            return acc;
        }, {});
    });
    
    await browser.close();
    return result;    
}

module.exports = { asyncFunction: run };