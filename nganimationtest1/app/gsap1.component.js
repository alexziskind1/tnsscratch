"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var document = {};
var Gsap1Component = (function () {
    function Gsap1Component(page) {
        this.page = page;
        console.dir('global' + global);
    }
    Gsap1Component.prototype.ngOnInit = function () {
    };
    Gsap1Component.prototype.onTap = function (myLbl) {
        //TweenLite.to(myLbl, 2, { width: 500 });
    };
    Gsap1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "gsap1",
            templateUrl: "gsap1.component.html",
            styleUrls: ["gsap1.component.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], Gsap1Component);
    return Gsap1Component;
}());
exports.Gsap1Component = Gsap1Component;
var a = 1;
//# sourceMappingURL=gsap1.component.js.map