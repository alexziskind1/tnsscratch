var viewModule = require("ui/core/view");
var MyView = (function (_super) {
    __extends(MyView, _super);
    function MyView(options) {
        _super.call(this, options);
        this._height = options.height;
        this._width = options.width;
    }
    MyView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        this.setMeasuredDimension(this._width, this._height);
    };
    MyView.prototype.onLoaded = function () {
        console.log("myView loaded");
    };
    return MyView;
})(viewModule.View);
exports.MyView = MyView;
