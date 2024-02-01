import { expect } from "@playwright/test";

export default class HomePage{

    constructor(page){
        this.page = page
        this.email = page.locator(`//input[@type = "email"]`)
        this.password = page.locator(`//input[@type = "password"]`)
        this.messageL = page.locator('//li[@class="validation-messages__item ng-star-inserted"]')
        this.messageP = page.locator(`//p[@class="page-login__actions-validation ng-star-inserted"]`)
        this.submitBtn = page.locator(`//button`)
    }

    async goLogin(email,pass,result,locator){
        await this.page.goto("https://lms.ithillel.ua/auth")
        await this.email.fill(email)
        await this.password.pressSequentially(pass)
        await this.submitBtn.click()
        await expect(this.page.locator(locator)).toHaveText(result)
    }
}