import observableModule = require("data/observable");
import pageModule = require("ui/page");

class MainPageController extends observableModule.Observable {
    public page: pageModule.Page;
    public counter: number;

    constructor() {
       super();
       this.counter = 42;
       this.set("message", this.counter + " taps left");
    }

    public pageLoaded(args) {
        this.page = <pageModule.Page>args.object;
        this.page.bindingContext = this;
    }

    public tapAction() {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    }
}

var mpc = new MainPageController();
exports.pageLoaded = (args) => mpc.pageLoaded(args);
