var observableModule = require("data/observable");
//import vmModule = require("./main-view-model");
var MainPageController = (function (_super) {
    __extends(MainPageController, _super);
    function MainPageController() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }
    MainPageController.prototype.pageLoaded = function (args) {
        this.page = args.object;
        this.page.bindingContext = this;
    };
    MainPageController.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    };
    return MainPageController;
})(observableModule.Observable);
/*
function pageLoad(args) {
    var mpc = new MainPageController();
    mpc.pageLoaded(args);
}
*/
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
