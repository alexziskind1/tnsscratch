"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var PulsingComponent = (function () {
    function PulsingComponent(page) {
        this.page = page;
    }
    PulsingComponent.prototype.ngOnInit = function () {
        //this.page
    };
    PulsingComponent.prototype.onTapJs = function () {
        var kfAniInfo = this.page.getKeyframeAnimationWithName('lblanimation');
        kfAniInfo.duration = 500;
    };
    PulsingComponent.prototype.onTapClass = function () {
    };
    PulsingComponent.prototype.toggleClassOnView = function (view, className1, className2) {
        console.log('start toggleClassName:' + view.className);
        if (!view.className)
            view.className = '';
        var newClassName = view.className.trim();
        if (view.className.indexOf(className1) >= 0) {
            newClassName = view.className.replace(className1, '');
            newClassName = newClassName.trim() + ' ' + className2;
        }
        else {
            newClassName = view.className.replace(className2, '');
            newClassName = newClassName.trim() + ' ' + className1;
        }
        view.className = newClassName;
        console.log('end toggleClassName:' + view.className);
    };
    PulsingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "pulsing",
            templateUrl: "pulsing.component.html",
            styleUrls: ["pulsing.component.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], PulsingComponent);
    return PulsingComponent;
}());
exports.PulsingComponent = PulsingComponent;
//# sourceMappingURL=pulsing.component.js.map