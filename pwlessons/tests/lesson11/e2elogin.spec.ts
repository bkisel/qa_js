import {test} from "@playwright/test";
import { LoginPage } from "./page-object/LoginPage";
import { HomePage } from "./page-object/HomePage";


test.describe("e2e for Login Page",()=>{
    test.beforeEach(async({page})=>{
        let loginPage = new LoginPage(page)
        await loginPage.visit("https://lms.ithillel.ua/auth")
        await loginPage.login()
        let homePage = new HomePage(page)
        await homePage.checkLessonsBtn()
    })

    test("Video checking on multiple pages", async ({ page }) => {
        const homePage = new HomePage(page);
        for (let i = 1; i <= 12; i++) {
            await homePage.checkLessonVideo(i);
        }
    });
})