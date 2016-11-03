"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var document = {};
var JsAniComponent = (function () {
    function JsAniComponent(page) {
        this.page = page;
    }
    JsAniComponent.prototype.ngOnInit = function () {
    };
    JsAniComponent.prototype.onTap = function (myLbl) {
        //move(myLbl);
        move(myLbl, function (progress) { return progress; }, 1000);
    };
    JsAniComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "jsani",
            templateUrl: "jsani.component.html"
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], JsAniComponent);
    return JsAniComponent;
}());
exports.JsAniComponent = JsAniComponent;
function move_old(view) {
    var left = 0;
    var id = setInterval(function () {
        view.style.marginLeft = left; // show frame 
        if (left == 100)
            clearInterval(id);
        else
            left++; // update parameters 
    }, 6); // draw every 10ms
}
function move(view, deltaCalc, duration) {
    var to = 100;
    var options = {
        duration: 1000,
        deltaCalc: deltaCalc,
        step: function (delta) {
            view.style.marginLeft = to * delta;
        }
    };
    animate(options);
}
function animate(options) {
    var start = new Date();
    var id = setInterval(function () {
        var timePassed = new Date().valueOf() - start.valueOf();
        var progress = timePassed / options.duration;
        if (progress > 1)
            progress = 1;
        var delta = options.deltaCalc(progress);
        options.step(delta);
        if (progress == 1) {
            clearInterval(id);
        }
    }, options.stepInterval || 10);
}
//# sourceMappingURL=jsani.component.js.map