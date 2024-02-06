import { test as baseTest } from "playwright-elements";
import { LoginPage } from "../page-object/LoginPage";
import { HomePage } from "../page-object/HomePage";

type basePage = {
    loginPage: LoginPage,
    homePage: HomePage
}

export const test = baseTest.extend<basePage>({
    homePage: async({page}, use)=>{
        console.log("Before home page")
        let homePage = new HomePage(page)
        await use (homePage);
        console.log("After home page")
    },
    loginPage: async({page}, use)=>{
        console.log("Before login page")
        let loginPage = new LoginPage(page)
        await use (loginPage);
        console.log("After login page")
    }
})