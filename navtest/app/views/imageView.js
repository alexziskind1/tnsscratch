var ui_1 = require("ui");
var myglobalModule = require("../common/myglobal");
var ImageView = (function (_super) {
    __extends(ImageView, _super);
    /*
        constructor(private rect: Rect){
            super();
        }
        */
    function ImageView() {
        _super.call(this);
    }
    //View lifecycle
    ImageView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        //super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        //var width = utils.layout.getMeasureSpecSize(widthMeasureSpec);
        //var height = utils.layout.getMeasureSpecSize(heightMeasureSpec);
        //var width = this.page.getMeasuredWidth();
        //var height = this.page.getMeasuredHeight();
        //var width = this.pageSize.width;
        //var height = this.pageSize.height;
        var width = myglobalModule.pageSize.width;
        var height = myglobalModule.pageSize.height;
        //this.setMeasuredDimension(this.rect.size.width, this.rect.size.height);
        this.setMeasuredDimension(width, height);
    };
    ImageView.prototype.onLayout = function (left, top, right, bottom) {
        var a = 0;
    };
    return ImageView;
})(ui_1.Image);
exports.ImageView = ImageView;
