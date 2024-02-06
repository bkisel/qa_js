export class BasePage{
    readonly page: any

    constructor(page){
        this.page = page
    }
    async visit(url){
        await this.page.goto(url)
    }
}