const DataTypesPage = require("../../PageObjects/DataTypesPage");
const MyAppPage = require("../../PageObjects/MyApp");

describe('Data Types page tests', () => {
    beforeEach(async () => {
        await driver.switchContext('NATIVE_APP');
        const appXpath = '//android.widget.TextView[@content-desc="API Demos"]';
        await $(appXpath).waitForDisplayed();
        await $(appXpath).click();
        await DataTypesPage.contentPage.click();
        await DataTypesPage.clipBoard.click();
        await DataTypesPage.dataTypes.click();
    });

    it('should perform all actions sequentially', async () => {
        // Check No Data Text
        await expect(DataTypesPage.clipText).toHaveText("(No data)");

        // Click on Styled Text and Check
        await DataTypesPage.styledTextBt.click();
        await expect(DataTypesPage.clipText).toHaveText("Plain, bold, italic, bold-italic");

        // Click on Plain Text and Check
        await DataTypesPage.plainTextBt.click();
        await expect(DataTypesPage.clipText).toHaveText("Plain, bold, italic, bold-italic");
        
        // Click on htmlText and Check
        await DataTypesPage.htmlTextBt.click();
        await expect(DataTypesPage.clipText).toHaveText("Link: http://www.android.com");

        // Click on Copy Intern and Check
        await DataTypesPage.copyIntern.click();
        await expect(DataTypesPage.mimeTypes).toHaveText("text/vnd.android.intent");

        // Click on Copy URI and Check
        await DataTypesPage.copyUri.click();
        await expect(DataTypesPage.mimeTypes).toHaveText("text/uri-list");
    });
});