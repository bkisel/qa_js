class MyAppPage {
    constructor(driver) {
        this.driver = driver;
    }

    async openApp() {
        //await this.driver.switchContext('NATIVE_APP');
        const appElement = await this.driver.$('//android.widget.TextView[@content-desc="API Demos"]');
        //await appElement.click();
    }
}

module.exports = new MyAppPage();
