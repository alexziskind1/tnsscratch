
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
    selector: "jsani",
    templateUrl: "jsani.component.html"
})
export class JsAniComponent implements OnInit {


    constructor(private page: Page) {

    }


    public ngOnInit() {

    }

    public onTap(myLbl: Label) {
        //move(myLbl);
        move(myLbl, (progress) => { return progress; }, 20000);
    }

}



function move_old(view: View) {
    var left = 0;

    var id = setInterval(function () {



        view.style.marginLeft = left; // show frame 

        if (left == 100)  // check finish condition
            clearInterval(id);
        else
            left++;  // update parameters 
    }, 6); // draw every 10ms
}

function move(view: View, deltaCalc: (p: number) => number, duration: number) {
    var to = 100;

    let options: AnimationOptions = {
        duration: duration,
        deltaCalc: deltaCalc,
        step: (delta) => {
            view.style.marginLeft = to * delta;
        }
    };
    animate(options);
}


function animate(options: AnimationOptions) {
    var start = new Date();

    var id = setInterval(function () {
        var timePassed = new Date().valueOf() - start.valueOf();
        var progress = timePassed / options.duration;

        if (progress > 1) progress = 1;

        var delta = options.deltaCalc(progress);
        options.step(delta);

        if (progress == 1) {
            clearInterval(id);
        }
    }, options.stepInterval || 10);
}

interface AnimationOptions {
    deltaCalc(progress: number): number;
    step(deltaResult: number): void;
    stepInterval?: number;
    duration: number;
}