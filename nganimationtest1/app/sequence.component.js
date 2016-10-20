"use strict";
var core_1 = require("@angular/core");
var enums_1 = require('ui/enums');
var keyframe_animation_1 = require('ui/animation/keyframe-animation');
var page_1 = require("ui/page");
var SequenceComponent = (function () {
    function SequenceComponent(page) {
        this.page = page;
    }
    SequenceComponent.prototype.ngOnInit = function () {
    };
    SequenceComponent.prototype.onTapJs = function () {
        var _this = this;
        var myLabel = this.lblSquare.nativeElement;
        this.playAnimation(myLabel, 'slide1')
            .then(function () {
            console.log('slide1 done');
            _this.playAnimation(myLabel, 'slide2')
                .then(function () {
                console.log('slide2 done');
                _this.playAnimation(myLabel, 'slide3')
                    .then(function () {
                    console.log('slide3 done');
                    _this.playAnimation(myLabel, 'slide4')
                        .then(function () {
                        console.log('slide4 done');
                    });
                });
            });
        });
    };
    SequenceComponent.prototype.playAnimation = function (myLabel, animationName) {
        var keyFrameAnimationInfo = this.page.getKeyframeAnimationWithName(animationName);
        keyFrameAnimationInfo.duration = 1000;
        keyFrameAnimationInfo.curve = enums_1.AnimationCurve.linear;
        var keyFrameAnimation = keyframe_animation_1.KeyframeAnimation.keyframeAnimationFromInfo(keyFrameAnimationInfo, 2);
        return keyFrameAnimation.play(myLabel);
    };
    SequenceComponent.prototype.onTapClass = function () {
        var myLabel = this.lblSquare.nativeElement;
        this.toggleClassOnView(myLabel, 'lbl-square-tapped', '');
    };
    SequenceComponent.prototype.toggleClassOnView = function (view, className1, className2) {
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
    __decorate([
        core_1.ViewChild("lblSquare"), 
        __metadata('design:type', core_1.ElementRef)
    ], SequenceComponent.prototype, "lblSquare", void 0);
    SequenceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "sequence",
            templateUrl: "sequence.component.html",
            styleUrls: ["sequence.component.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], SequenceComponent);
    return SequenceComponent;
}());
exports.SequenceComponent = SequenceComponent;
//# sourceMappingURL=sequence.component.js.map