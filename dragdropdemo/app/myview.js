var viewModule = require("ui/core/view");
var MyView = (function (_super) {
    __extends(MyView, _super);
    function MyView() {
        var options = {
            height: 50,
            width: 50,
            marginLeft: 0,
            marginRight: 60,
            marginTop: 2,
            marginBottom: 70,
            className: 'myview'
        };
        _super.call(this, options);
    }
    return MyView;
})(viewModule.View);
exports.MyView = MyView;
