import {Page} from "ui/page";
import {Observable} from "data/observable";
import {GestureEventData, GestureTypes, GestureStateTypes} from "ui/gestures";
import navigationModule = require("../../shared/navigation");

class Page1Controller extends Observable {
    private page: Page;

    public pageLoaded(args) {
        var page = <Page>args.object;
        page.bindingContext = this;


        /*
        page.on("navigatingTo", (args) => {
            alert('page 1 navigatingTo');
        });
        page.on("navigatingFrom", (args) => {
            alert('page 1 navigatingFrom');
        });
        page.on("navigatedTo", (args) => {
            alert('page 1 navigatedTo');
        });
        page.on("navigatedFrom", (args) => {
            alert('page 1 navigatedFrom');
        });
        */

    }

    public tapPage(arg1: GestureEventData) {
        var x = arg1.ios.locationInView(arg1.ios.view).x;
        var y = arg1.ios.locationInView(arg1.ios.view).y;


    }

    public tapAction() {
        navigationModule.navigation.goToPage2();
    }

}

var pc = new Page1Controller();
exports.pageLoaded = (args) => pc.pageLoaded(args);
