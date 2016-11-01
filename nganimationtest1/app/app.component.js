"use strict";
var core_1 = require("@angular/core");
function animate(opts) {
    var start = new Date();
    var id = setInterval(function () {
        var timePassed = (new Date()) - start;
        var progress = timePassed / opts.duration;
        if (progress > 1)
            progress = 1;
        var delta = opts.delta(progress, opts.x);
        opts.step(delta);
        if (progress == 1) {
            clearInterval(id);
        }
    }, opts.delay || 10);
}
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
        this.triggerJSAnimation();
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
    AppComponent.prototype.move = function (view, delta, duration) {
        var to = 500;
        var elasticity = 1;
        //var from = [255, 0, 0], to = [255, 255, 255];
        animate({
            delay: 5,
            x: elasticity,
            duration: duration || 1000,
            delta: delta,
            step: function (delta) {
                //view.style.marginLeft = to * delta;
                //view.marginLeft = to * delta;
                //element.style.left = to * delta;
                view.width = to * delta;
                view.height = to * delta / 2;
                /*
                                view.backgroundColor = new Color(255,
                                    Math.max(Math.min(parseInt((delta * (to[0] - from[0])) + '' + from[0], 10), 255), 0),
                                    Math.max(Math.min(parseInt((delta * (to[1] - from[1])) + '' + from[1], 10), 255), 0),
                                    Math.max(Math.min(parseInt((delta * (to[2] - from[2])) + '' + from[2], 10), 255), 0)
                                );
                                */
            }
        });
    };
    AppComponent.prototype.back = function (progress, x) {
        return Math.pow(progress, 2) * ((x + 1) * progress - x);
    };
    AppComponent.prototype.quad = function (progress) {
        return Math.pow(progress, 2);
    };
    AppComponent.prototype.triggerJSAnimation = function () {
        var view = this.lblJS.nativeElement;
        this.move(view, this.quad, 3000);
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
        core_1.ViewChild("lblJS"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "lblJS", void 0);
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