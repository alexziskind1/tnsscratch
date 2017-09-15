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
    selector: "pulsing",
    templateUrl: "pulsing.component.html",
    styleUrls: ["pulsing.component.css"]
})
export class PulsingComponent implements OnInit {

    constructor(private page: Page) {

    }


    public ngOnInit() {
        //this.page
    }

    public onTapJs() {
        let kfAniInfo = this.page.getKeyframeAnimationWithName('lblanimation');
        kfAniInfo.duration = 500;

    }

    public onTapClass() {


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
