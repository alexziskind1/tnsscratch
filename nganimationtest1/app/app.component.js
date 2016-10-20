"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.menuTap = function () {
        var btn = this.myMenuBtn.nativeElement;
        var bar1 = this.myMenuBtnBar1.nativeElement;
        var bar2 = this.myMenuBtnBar2.nativeElement;
        var bar3 = this.myMenuBtnBar3.nativeElement;
        btn.className = 'menu-button-on';
        this.toggleClassOnView(bar1, 'menu-bar-on', 'menu-bar-off');
        this.toggleClassOnView(bar2, 'menu-bar-on', 'menu-bar-off');
        this.toggleClassOnView(bar3, 'menu-bar-on', 'menu-bar-off');
    };
    AppComponent.prototype.onTap = function () {
        this.counter--;
        this.animateHeart();
        var mylbl = this.myLbl.nativeElement;
        this.toggleClassOnView(mylbl, 'message-tapped', 'sdfsdfd');
        var myImg = this.myImg.nativeElement;
        this.toggleClassOnView(myImg, 'image-tapped', 'sdfsdfsdf');
        var lblSquare = this.lblSquare.nativeElement;
        this.toggleClassOnView(lblSquare, 'lbl-square-tapped', '');
        var myTitle = this.myTitle.nativeElement;
        this.toggleClassOnView(myTitle, 'title-tapped', '');
        /*
        if (mylbl.className.indexOf('message-tapped') >= 0) {
            mylbl.className = 'message';
        } else {
            mylbl.className += ' message-tapped';
        }*/
    };
    AppComponent.prototype.animateHeart = function () {
        var _this = this;
        var myHeartLbl = this.myHeartImg.nativeElement;
        var x = 0;
        var y = 0;
        var index = 1;
        var cancel = setInterval(function () {
            _this.setBackgroundPosition(myHeartLbl, x + ' ' + y);
            x = x - 100;
            index++;
            if (index == 30) {
                clearInterval(cancel);
            }
        }, 20);
    };
    AppComponent.prototype.setBackgroundPosition = function (view, posish) {
        view.style.backgroundPosition = posish;
    };
    AppComponent.prototype.toggleClassOnView = function (view, className1, className2) {
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
        core_1.ViewChild("myLbl"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myLbl", void 0);
    __decorate([
        core_1.ViewChild("myImg"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myImg", void 0);
    __decorate([
        core_1.ViewChild("lblSquare"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "lblSquare", void 0);
    __decorate([
        core_1.ViewChild("myTitle"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myTitle", void 0);
    __decorate([
        core_1.ViewChild("myHeartImg"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myHeartImg", void 0);
    __decorate([
        core_1.ViewChild("myMenuBtn"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myMenuBtn", void 0);
    __decorate([
        core_1.ViewChild("myMenuBtnBar1"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myMenuBtnBar1", void 0);
    __decorate([
        core_1.ViewChild("myMenuBtnBar2"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myMenuBtnBar2", void 0);
    __decorate([
        core_1.ViewChild("myMenuBtnBar3"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "myMenuBtnBar3", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var a = 1;
//# sourceMappingURL=app.component.js.map