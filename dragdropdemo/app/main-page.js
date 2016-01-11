var mySquare_1 = require("./mySquare");
var Constants = {
    squareSize: 50,
    maxNumViews: 25
};
var MainPageController = (function () {
    function MainPageController() {
    }
    MainPageController.prototype.pageLoaded = function (args) {
        this.page = args.object;
        this.page.bindingContext = this;
        this.getViewRefs();
        this._pageWidth = this.page.getMeasuredWidth();
        this._pageHeight = this.page.getMeasuredHeight();
        this.generateSquares(Constants.maxNumViews);
    };
    MainPageController.prototype.getViewRefs = function () {
        this.layoutBase = this.page.getViewById("layoutBase");
    };
    MainPageController.prototype.generateSquares = function (numSquares) {
        var options = {
            height: Constants.squareSize,
            width: Constants.squareSize,
            parentHeight: this._pageHeight,
            parentWidth: this._pageWidth
        };
        for (var i = 0; i < numSquares; i++) {
            this.createAndAddSquare(options);
        }
    };
    MainPageController.prototype.createAndAddSquare = function (options) {
        var mySquare = new mySquare_1.MySquare(options);
        this.layoutBase.addChild(mySquare);
    };
    MainPageController.prototype.addLabel = function () {
        // Add the Views
        this.generateSquares(Constants.maxNumViews);
    };
    return MainPageController;
})();
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
