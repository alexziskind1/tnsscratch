"use strict";
var core_1 = require("@angular/core");
var ModalBoxComponent = (function () {
    function ModalBoxComponent() {
    }
    ModalBoxComponent.prototype.navIcon1Tap = function () {
        var navIcon1 = this.navIcon1.nativeElement;
        this.toggleClassOnView(navIcon1, 'open', '');
    };
    ModalBoxComponent.prototype.navIcon2Tap = function () {
        var navIcon2 = this.navIcon2.nativeElement;
        this.toggleClassOnView(navIcon2, 'open', '');
    };
    ModalBoxComponent.prototype.navIcon3Tap = function () {
        var navIcon3 = this.navIcon2.nativeElement;
        this.toggleClassOnView(navIcon3, 'open', '');
    };
    ModalBoxComponent.prototype.navIcon4Tap = function () {
        var navIcon4 = this.navIcon4.nativeElement;
        this.toggleClassOnView(navIcon4, 'open', '');
    };
    ModalBoxComponent.prototype.toggleClassOnView = function (view, className1, className2) {
        console.log('start toggleClassName:' + view.className);
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
    __decorate([
        core_1.ViewChild("navIcon1"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalBoxComponent.prototype, "navIcon1", void 0);
    __decorate([
        core_1.ViewChild("navIcon2"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalBoxComponent.prototype, "navIcon2", void 0);
    __decorate([
        core_1.ViewChild("navIcon3"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalBoxComponent.prototype, "navIcon3", void 0);
    __decorate([
        core_1.ViewChild("navIcon4"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalBoxComponent.prototype, "navIcon4", void 0);
    ModalBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "modal-box",
            templateUrl: "modal-box.component.html",
            styleUrls: ["modal-box.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalBoxComponent);
    return ModalBoxComponent;
}());
exports.ModalBoxComponent = ModalBoxComponent;
var a = 1;
//# sourceMappingURL=modal-box.component.js.map