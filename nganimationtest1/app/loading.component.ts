
import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { View } from 'ui/core/view';
import { Span } from 'text/span';
import { FormattedString } from 'text/formatted-string';
import { StackLayout } from 'ui/layouts/stack-layout';
import { KeyframeAnimation } from 'ui/animation/keyframe-animation';
import { Page } from "ui/page";


@Component({
    moduleId: module.id,
    selector: "loading",
    templateUrl: "loading.component.html",
    styleUrls: ["loading.component.css"]
})
export class LoadingComponent implements OnInit {

    @ViewChild("myTextWrapper") myTextWrapper: ElementRef;
    @ViewChild("span1") span1: ElementRef;
    @ViewChild("fs1") fs1: ElementRef;


    constructor(private page: Page) {

    }


    public ngOnInit() {
        //this.page
    }

    public onTapJs() {
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

    }

    public onTapClass() {
        var myTWrapper = <StackLayout>this.myTextWrapper.nativeElement;

        let childCount = myTWrapper.getChildrenCount();

        for (var i = 0; i < childCount; i++) {
            let lbl = <Label>myTWrapper.getChildAt(i);

            //lbl.className = "lbl-tap lbl-tap-" + (i + 1);
            this.toggleClassOnView(lbl, "lbl-tap-" + (i + 1), 'sdf');

            console.log(lbl.text);
        }



        //var mySpan1 = <Span>this.span1.nativeElement;
        //console.dir(mySpan1.text);

        /*
        var myfs1 = <FormattedString>this.fs1.nativeElement;

        console.dir('spannum:' + myfs1.spans.length);


        for (var i = 0; i < myfs1.spans.length; i++) {
            var sp = <Span>myfs1.spans.getItem(i);
            console.dir(sp.text);
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
