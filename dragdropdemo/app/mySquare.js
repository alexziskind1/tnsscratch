var gestures_1 = require("ui/gestures");
var label_1 = require("ui/label");
var geometry_1 = require("./common/geometry");
var gen = require("./common/generatorHelper");
var MySquare = (function (_super) {
    __extends(MySquare, _super);
    function MySquare(options) {
        var _this = this;
        _super.call(this);
        this.options = options;
        this.lastLocation = new geometry_1.Point(0, 0);
        this.on(gestures_1.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gestures_1.GestureStateTypes.began: {
                    _this.dragStarted();
                    break;
                }
                case gestures_1.GestureStateTypes.changed:
                    _this.dragged(args);
                    break;
                case gestures_1.GestureStateTypes.ended: {
                    _this.dragged(args);
                    _this.dradEnded();
                    break;
                }
            }
        });
    }
    //View lifecycle
    MySquare.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        //randomize color
        var randColor = gen.generateRandomColor();
        this.backgroundColor = randColor;
        //randomize location
        var inSize = new geometry_1.Size(this.parent.getMeasuredWidth() - this.options.width, this.parent.getMeasuredHeight() - this.options.height);
        var randPoint = gen.generateRandomPoint(inSize);
        //let pointX = Math.floor(Math.random() * (this.parent.getMeasuredWidth() - this.options.width)) + 1;
        //let pointY = Math.floor(Math.random() * (this.parent.getMeasuredHeight() - this.options.height)) + 1;
        this.translateX = randPoint.x;
        this.translateY = randPoint.y;
        this.applyStationaryShadow();
        this.setMeasuredDimension(this.options.width, this.options.height);
    };
    //Private methods
    MySquare.prototype.dragged = function (args) {
        var translation = args.ios.translationInView(this.parent.ios);
        var newCenter = {
            x: this.lastLocation.x + translation.x,
            y: this.lastLocation.y + translation.y
        };
        this.ios.center = newCenter;
    };
    MySquare.prototype.dragStarted = function () {
        this.lastLocation.x = this.ios.center.x;
        this.lastLocation.y = this.ios.center.y;
        this.parent.ios.bringSubviewToFront(this.ios);
        this.applyRaisedShadow();
        this.animate({
            scale: {
                x: 1.5,
                y: 1.5
            },
            duration: 100
        });
    };
    MySquare.prototype.dradEnded = function () {
        this.applyStationaryShadow();
        this.animate({
            scale: {
                x: 1,
                y: 1
            },
            duration: 100
        });
    };
    MySquare.prototype.applyStationaryShadow = function () {
        if (this.ios) {
            this.ios.layer.shadowOffset = { height: 2, width: -2 };
            this.ios.layer.shadowRadius = 5;
            this.ios.layer.shadowOpacity = 0.3;
        }
    };
    MySquare.prototype.applyRaisedShadow = function () {
        if (this.ios) {
            this.ios.layer.shadowOffset = { height: 10, width: -10 };
            //this.ios.layer.shadowRadius = 5;
            this.ios.layer.shadowOpacity = 0.5;
        }
    };
    return MySquare;
})(label_1.Label);
exports.MySquare = MySquare;
