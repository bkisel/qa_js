import {test} from "./fixtures/fixture";

test.describe("e2e for Login Page",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.visit("https://lms.ithillel.ua/auth")
        await loginPage.login()
    })

    test("Video checking on multiple pages", async ({ homePage }) => {
        await homePage.checkLessonsBtn()
        for (let i = 1; i <= 12; i++) {
            await homePage.checkLessonVideo(i);
        }
    });
})