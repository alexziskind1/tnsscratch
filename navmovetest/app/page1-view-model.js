var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(topFrame) {
        _super.call(this);
        this.topFrame = topFrame;
        this.counter = 5;
        this.set("message", this.counter + " taps left");
    }
    HelloWorldModel.prototype.tapAction = function () {
        this.topFrame.navigate("page2");
    };
    ;
    return HelloWorldModel;
})(observable_1.Observable);
exports.HelloWorldModel = HelloWorldModel;
;
