class DataTypesPage{
        //this page = page;
        get contentPage() { 
            return $('//android.widget.TextView[@content-desc="Content"]')
        };
        get clipBoard() { 
            return $('//android.widget.TextView[@content-desc="Clipboard"]')
        };
        get dataTypes() { 
            return $('//android.widget.TextView[@content-desc="Data Types"]')
        };
        get styledTextBt() { 
            return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/copy_styled_text"]')
        };
        get plainTextBt() { 
            return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/copy_plain_text"]')
        };
        get htmlTextBt() { 
            return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/copy_html_text"]')
        };
        get copyIntern() { 
            return $('//android.widget.Button[@content-desc="Copy Intent"]')
        };
        get copyUri() { 
            return $('//android.widget.Button[@content-desc="Copy URI"]')
        };
        get dataTypesDropDown() { 
            return $('//android.widget.TextView[@resource-id="android:id/text1"]')
        };
        get mimeTypes() { 
            return $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/clip_mime_types"]')
        };
        get clipText() { 
            return $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/clip_text"]')
        }

// async visit(){
//     await this.page.goto()
//}       
}

module.exports = new DataTypesPage();