var observable_1 = require("data/observable");
var navigationModule = require("../../shared/navigation");
var Page1Controller = (function (_super) {
    __extends(Page1Controller, _super);
    function Page1Controller() {
        _super.apply(this, arguments);
    }
    Page1Controller.prototype.pageLoaded = function (args) {
        var page = args.object;
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
    };
    Page1Controller.prototype.tapPage = function (arg1) {
        var x = arg1.ios.locationInView(arg1.ios.view).x;
        var y = arg1.ios.locationInView(arg1.ios.view).y;
    };
    Page1Controller.prototype.tapAction = function () {
        navigationModule.navigation.goToPage2();
    };
    return Page1Controller;
})(observable_1.Observable);
var pc = new Page1Controller();
exports.pageLoaded = function (args) { return pc.pageLoaded(args); };
