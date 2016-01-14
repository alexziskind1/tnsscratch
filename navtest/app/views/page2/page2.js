var observable_1 = require("data/observable");
var frameModule = require("ui/frame");
var Page1Controller = (function (_super) {
    __extends(Page1Controller, _super);
    function Page1Controller() {
        _super.apply(this, arguments);
    }
    Page1Controller.prototype.pageLoaded = function (args) {
        var page = args.object;
        page.bindingContext = this;
        alert('page2 loaded');
    };
    Page1Controller.prototype.tapAction = function () {
        //navigationModule.navigation.goToPage1();
        var topFrame = frameModule.topmost();
        topFrame.goBack();
    };
    return Page1Controller;
})(observable_1.Observable);
var pc = new Page1Controller();
exports.pageLoaded = function (args) { return pc.pageLoaded(args); };
