
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
        move(myLbl);
    }




}


function move(view: View) {
    var left = 0;

    var id = setInterval(function () {



        view.style.marginLeft = left; // show frame 

        if (left == 100)  // check finish condition
            clearInterval(id);
        else
            left++;  // update parameters 
    }, 6); // draw every 10ms
}