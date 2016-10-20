import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { View } from 'ui/core/view';
import { Span } from 'text/span';
import { FormattedString } from 'text/formatted-string';
import { StackLayout } from 'ui/layouts/stack-layout';
import { AnimationCurve } from 'ui/enums';
import { KeyframeAnimation } from 'ui/animation/keyframe-animation';
import { Page } from "ui/page";


@Component({
    moduleId: module.id,
    selector: "sequence",
    templateUrl: "sequence.component.html",
    styleUrls: ["sequence.component.css"]
})
export class SequenceComponent implements OnInit {

    @ViewChild("lblSquare") lblSquare: ElementRef;



    constructor(private page: Page) {

    }

    public ngOnInit() {
    }

    public onTapJs() {
        var myLabel = <Label>this.lblSquare.nativeElement;

        this.playAnimation(myLabel, 'slide1')
            .then(() => {
                console.log('slide1 done');
                this.playAnimation(myLabel, 'slide2')
                    .then(() => {
                        console.log('slide2 done');
                        this.playAnimation(myLabel, 'slide3')
                            .then(() => {
                                console.log('slide3 done');
                                this.playAnimation(myLabel, 'slide4')
                                    .then(() => {
                                        console.log('slide4 done');
                                    });
                            });
                    });
            });
    }

    private playAnimation(myLabel: Label, animationName: string): Promise<void> {
        var keyFrameAnimationInfo = this.page.getKeyframeAnimationWithName(animationName);
        keyFrameAnimationInfo.duration = 1000;
        keyFrameAnimationInfo.curve = AnimationCurve.linear;
        var keyFrameAnimation = <KeyframeAnimation>KeyframeAnimation.keyframeAnimationFromInfo(keyFrameAnimationInfo, 2);

        return keyFrameAnimation.play(myLabel);

    }

    public onTapClass() {
        var myLabel = <Label>this.lblSquare.nativeElement;

        this.toggleClassOnView(myLabel, 'lbl-square-tapped', '');

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
