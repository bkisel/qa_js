describe('First test', () => {
    it('should open the app and click an element by XPath', async () => {
        await driver.switchContext('NATIVE_APP');
        const appXpath = '//android.widget.TextView[@content-desc="API Demos"]';
        await $(appXpath).waitForDisplayed();
        await $(appXpath).click();
        console.log("Element clicked");
    });
});
