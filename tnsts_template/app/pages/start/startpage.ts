import {Observable, EventData} from "data/observable";
import {Page} from "ui/page";

class StartPageController extends Observable {
    private counter: number = 42;

    public pageLoaded(args: EventData) {
        var page = <Page>args.object;
        page.bindingContext = this;
    }
    
    public tapAction() {
        this.counter++;
        this.set("message", `${this.counter} taps`);
    }
}

var spc = new StartPageController();
exports.pageLoaded = args => spc.pageLoaded(args);
