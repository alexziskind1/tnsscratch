
import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { View } from 'ui/core/view';
import { Span } from 'text/span';
import { FormattedString } from 'text/formatted-string';
import { StackLayout } from 'ui/layouts/stack-layout';
import { KeyframeAnimation } from 'ui/animation/keyframe-animation';
import { Page } from "ui/page";
import { AnimationCurve } from "tns-core-modules/ui/enums";


@Component({
    moduleId: module.id,
    selector: "add-item",
    templateUrl: "add-item.component.html",
    styleUrls: ["add-item.component.css"]
})
export class AddItemComponent implements OnInit {

    public items = [];

    @ViewChild("myTextWrapper") myTextWrapper: ElementRef;
    @ViewChild("span1") span1: ElementRef;
    @ViewChild("fs1") fs1: ElementRef;


    constructor(private page: Page) {

    }


    public ngOnInit() {
        //this.page
        for (var i = 0; i < 10; i++) {
            this.items.push({ id: i, name: 'name ' + i });
        }
    }

    public onTap(wrapper: Label) {

        wrapper.animate({
            translate: { x: 0, y: 50 },
            duration: 300,
            curve: AnimationCurve.easeOut
        }).then(() => {
            setTimeout(() => {
                wrapper.translateY = 0;
            }, 10); //iOS trick to remove flicker

            this.items.unshift({ id: 999, name: 'new item' });

        });


        //this.items.push({ id: 999, name: 'new item' });

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

    }


    private toggleClassOnView(view: View, className1: string, className2: string) {
        console.log('start toggleClassName:' + view.className);
        if (!view.className) view.className = '';
        var newClassName = view.className.trim();
        if (view.className.indexOf(className1) >= 0) {
            newClassName = view.className.replace(className1, '');
            newClassName = newClassName.trim() + ' ' + className2;
        } else {
            newClassName = view.className.replace(className2, '');
            newClassName = newClassName.trim() + ' ' + className1;
        }

        view.className = newClassName;
        console.log('end toggleClassName:' + view.className);
    }

}
