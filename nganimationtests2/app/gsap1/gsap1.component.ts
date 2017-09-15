
import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { View } from 'ui/core/view';
import { Span } from 'text/span';
import { FormattedString } from 'text/formatted-string';
import { StackLayout } from 'ui/layouts/stack-layout';
import { KeyframeAnimation } from 'ui/animation/keyframe-animation';
import { Page } from "ui/page";

var document = {};

@Component({
    moduleId: module.id,
    selector: "gsap1",
    templateUrl: "gsap1.component.html",
    styleUrls: ["gsap1.component.css"]
})
export class Gsap1Component implements OnInit {


    constructor(private page: Page) {
        console.dir('global' + global);
    }


    public ngOnInit() {

    }

    public onTap(myLbl: Label) {
        //TweenLite.to(myLbl, 2, { width: 500 });

    }


}

var a = 1;