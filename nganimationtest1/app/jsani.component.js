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
        move(myLbl);
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
function move(view) {
    var left = 0;
    var id = setInterval(function () {
        view.style.marginLeft = left; // show frame 
        if (left == 100)
            clearInterval(id);
        else
            left++; // update parameters 
    }, 6); // draw every 10ms
}
//# sourceMappingURL=jsani.component.js.map