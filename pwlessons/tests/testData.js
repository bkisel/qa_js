import { test } from "node:test";
import assert from "node:assert";
import { expect } from "playwright-elements";
import { chromium } from "playwright";
import HomePage from "./HomePage.js"

let loginData = [
    {
        email:"bkiselychnykgmail.com",
        pass:"sldjfbndfb",
        result:"Неправильна адреса електронної пошти",
        locator:`//li[@class="validation-messages__item ng-star-inserted"]`
    },
    {
        email:"bkiselychnyk@gmail.com",
        pass:"sldjfbndfb",
        result:"Ви ввели невірну адресу електронної пошти або пароль",
        locator:`//p[@class="page-login__actions-validation ng-star-inserted"]`
    }
]

loginData.forEach(({email,pass,result,locator})=>{
    test("Check Login and Password",async()=>{
        const browser = await chromium.launch({headless:false})
        const page = await browser.newPage()
        let homePage = new HomePage(page)
        await homePage.goLogin(email,pass,result,locator)
        await page.close()
        await browser.close()

    })
})