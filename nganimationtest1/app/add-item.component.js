"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AddItemComponent = (function () {
    function AddItemComponent(page) {
        this.page = page;
        this.items = [];
    }
    AddItemComponent.prototype.ngOnInit = function () {
        //this.page
        for (var i = 0; i < 10; i++) {
            this.items.push({ id: i, name: 'name ' + i });
        }
    };
    AddItemComponent.prototype.onTap = function () {
        this.items.push({ id: 999, name: 'new item' });
        /*
        let kfAniInfo = this.page.getKeyframeAnimationWithName('lblanimation');
        kfAniInfo.duration = 500;
        console.dir(kfAniInfo);
        var myTWrapper = <StackLayout>this.myTextWrapper.nativeElement;

        let childCount = myTWrapper.getChildrenCount();

        for (var i = 0; i < childCount; i++) {
            let lbl = <Label>myTWrapper.getChildAt(i);
            console.log('detay: ' + kfAniInfo.delay);
            kfAniInfo.delay = kfAniInfo.delay + 50;
            
            let kfAni = <KeyframeAnimation>KeyframeAnimation.keyframeAnimationFromInfo(kfAniInfo, 2);

            console.log('ani delay: ' + kfAni.delay);

            kfAni.play(lbl)
                .then(() => {
                    console.log('done');
                });
        }
        */
    };
    AddItemComponent.prototype.toggleClassOnView = function (view, className1, className2) {
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
        core_1.ViewChild("myTextWrapper"), 
        __metadata('design:type', core_1.ElementRef)
    ], AddItemComponent.prototype, "myTextWrapper", void 0);
    __decorate([
        core_1.ViewChild("span1"), 
        __metadata('design:type', core_1.ElementRef)
    ], AddItemComponent.prototype, "span1", void 0);
    __decorate([
        core_1.ViewChild("fs1"), 
        __metadata('design:type', core_1.ElementRef)
    ], AddItemComponent.prototype, "fs1", void 0);
    AddItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "add-item",
            templateUrl: "add-item.component.html",
            styleUrls: ["add-item.component.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=add-item.component.js.map