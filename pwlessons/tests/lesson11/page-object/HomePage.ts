import { expect } from "playwright-elements";

export class HomePage{
    lessosnsBtn: any;
    lessonNumber: any;
    lessonVideo: any;
    page: any;
    lessonLink: any;
    
    constructor(page){
        this.page = page;
        this.lessosnsBtn = page.locator('//a[@class="dashboard-card-course-navigation__link dashboard-card-course-navigation__link--lessons"]')
        this.lessonLink = page.locator('//ul[@class="lessons-timeline ng-star-inserted"]')
        this.lessonVideo = page.locator('//h3[@class="lesson-media-box__title ng-star-inserted"]')
    }

    async checkLessonsBtn(){
        await this.lessosnsBtn.click();
    }
    
    async checkLessonVideo(lessonNumber: number) {
        const lessonLink = this.page.locator(`(//a[contains(text(),'${lessonNumber}')])[1]`);
        await lessonLink.click({lessonNumber});
        await expect(this.lessonVideo).toContainText("Відео-запис заняття");
    }
}