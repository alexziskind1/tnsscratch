import {Page} from "ui/page";
import {Observable} from "data/observable";
import navigationModule = require("../../shared/navigation");
import frameModule = require("ui/frame");

class Page1Controller extends Observable {
    private page: Page;
    
    public pageLoaded(args) {
        var page = <Page>args.object;
        page.bindingContext = this;
        alert('page2 loaded');
    }
    
    public tapAction() {
        //navigationModule.navigation.goToPage1();
        var topFrame = frameModule.topmost();
        topFrame.goBack();
    }
}

var pc = new Page1Controller();
exports.pageLoaded = (args) => pc.pageLoaded(args);
