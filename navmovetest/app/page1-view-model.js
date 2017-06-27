"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frameModule = require("tns-core-modules/ui/frame");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.counter = 5;
        _this.set("message", _this.counter + " taps left");
        return _this;
    }
    HelloWorldModel.prototype.tapAction = function () {
        frameModule.topmost().navigate("page2");
    };
    ;
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UxLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsdURBQXlEO0FBSXpEO0lBQXFDLG1DQUFVO0lBRTNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBRkcsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVNLG1DQUFTLEdBQWhCO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBQUEsQ0FBQztJQUNOLHNCQUFDO0FBQUQsQ0FBQyxBQVpELENBQXFDLHVCQUFVLEdBWTlDO0FBWlksMENBQWU7QUFZM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDU7XG4gICAgICAgIHRoaXMuc2V0KFwibWVzc2FnZVwiLCB0aGlzLmNvdW50ZXIgKyBcIiB0YXBzIGxlZnRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHRhcEFjdGlvbigpIHtcbiAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLm5hdmlnYXRlKFwicGFnZTJcIik7XG5cbiAgICB9O1xufTsiXX0=