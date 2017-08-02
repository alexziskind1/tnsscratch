import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { Label } from 'ui/label';
import { GridLayout } from 'ui/layouts/grid-layout';

import 'nativescript-dom';
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation/animation";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import { MoveService } from "./move.service";
import { Page } from "ui/page";
import { TNSFontIconService } from "nativescript-ng2-fonticon";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {



    constructor(private page: Page, private fonticon: TNSFontIconService, private moveService: MoveService) {
        this.page.actionBarHidden = true;
        moveService.moveConfirmed$.subscribe(
            direction => {
                console.log(`move ${direction} confirmed`);
            });
    }

    public ngOnInit() {

    }

    public onLeft(grid: GridLayout) {
        console.log('move left');
        this.moveService.announceMove('left');
    }

    public onRight(grid: GridLayout) {
        console.log('move right');
        this.moveService.announceMove('right');
    }
}
