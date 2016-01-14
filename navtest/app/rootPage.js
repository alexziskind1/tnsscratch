var observable_1 = require("data/observable");
var navigationModule = require("./shared/navigation");
var point_1 = require("./point");
var imageSourceModule = require("image-source");
var enumsModule = require("ui/enums");
var RootPageController = (function (_super) {
    __extends(RootPageController, _super);
    function RootPageController() {
        _super.apply(this, arguments);
    }
    RootPageController.prototype.pageLoaded = function (args) {
        var _this = this;
        var page = args.object;
        page.bindingContext = this;
        this.pageImg = page.getViewById("pageImg");
        page.on("navigatedTo", function (args) {
            if (args.context != null) {
                _this.currentNavPage = args.context;
            }
            else {
                _this.currentNavPage = navigationModule.navigation.startPage();
            }
            _this.setImage(_this.currentNavPage.name);
        });
    };
    RootPageController.prototype.tapPage = function (arg1) {
        var x = arg1.ios.locationInView(arg1.ios.view).x;
        var y = arg1.ios.locationInView(arg1.ios.view).y;
        var hitPoint = new point_1.Point(x, y);
        var matchedLink;
        this.currentNavPage.linkItems.forEach(function (l) {
            if (l.isHitTestPositive(hitPoint)) {
                matchedLink = l;
            }
        });
        if (matchedLink != null) {
            //alert('link hit: ' + matchedLink.name);
            if (matchedLink.isBack) {
                navigationModule.navigation.goBack();
            }
            else {
                var nextPage = navigationModule.navigation.getPageByName(matchedLink.name);
                navigationModule.navigation.goToRoot(nextPage);
            }
        }
    };
    RootPageController.prototype.setImage = function (name) {
        this.pageImg.imageSource = imageSourceModule.fromResource(name + ".png");
        this.pageImg.stretch = enumsModule.Stretch.aspectFill;
    };
    return RootPageController;
})(observable_1.Observable);
var pc = new RootPageController();
exports.pageLoaded = function (args) { return pc.pageLoaded(args); };
