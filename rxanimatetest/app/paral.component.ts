import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { PanGestureEventData, GestureTypes, GestureStateTypes, GesturesObserver, TouchGestureEventData } from "tns-core-modules/ui/gestures";

import 'rxjs';
import { Page } from "ui/page";
import { Label } from "tns-core-modules/ui/label/label";
import * as enums from "ui/enums";
import { Scheduler } from "rxjs";
import * as d3 from 'd3-ease';


interface Point {
    x: number;
    y: number;
}
const mkPt = (x: number, y: number) => { return { x, y }; };



/*
const msElapsed = (scheduler = Scheduler.animationFrame) =>
    Observable.defer(() => {
        const start = scheduler.now();
        return Observable.interval(0, scheduler)
            .map(() => scheduler.now() - start);
    });
        */

const msElapsed = (scheduler = Scheduler.animationFrame) =>
    Observable.defer(() => {
        const start = scheduler.now();
        return Observable.interval(0, scheduler)
            .map(() => scheduler.now() - start);
    });

const duration = (ms, scheduler = Scheduler.animationFrame) =>
    msElapsed(scheduler)
        .map(elapsedMs => elapsedMs / ms)
        .takeWhile(t => t <= 1);

const amount = (d) => (t) => t * d;

const amountRev = function (d, rev = false) {
    return function (t) {
        const ret = rev ? (1 - t) * d : t * d;
        return ret;
    };
};

const amountFromTo = function (range) {
    return function (t) {
        const ret = range.from + t * (range.to - range.from);
        return ret;
    };
};

const elasticOut = (t) => {
    return Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
        Math.pow(2.0, -10.0 * t) +
        1.0
};

//////////////////
const transformPoint = (point: Point) =>
    (amtX: number = 0, amtY: number = 0) =>
        ({ x: point.x + amtX, y: point.y + amtY });


const transformPath = (path: Point[]) => {
    return (amtX: number = 0, amtY: number = 0) => {
        console.log(`amtX: ${amtX} , amtY: ${amtY}`);
        return path.map(p => transformPoint(p)(amtX, amtY));
    };
};

const getClipPathValue = (path: Point[]): string => {
    const pieces = [];
    for (let i = 0; i < path.length; i++) {
        pieces.push(`${path[i].x}% ${path[i].y}%`);
    }
    return `polygon(${pieces.join(', ')})`;
};

const clipPathValueToArray = (polygon: string): Point[] => {
    const vals = polygon.substring(polygon.indexOf('(') + 1, polygon.indexOf(')'));
    const pointStrings = vals.split(',').filter(x => x);
    return pointStrings.map(pStr => {
        const ptParts = pStr.replace(/\%/g, '').split(' ').filter(x => x);
        return mkPt(parseInt(ptParts[0]), parseInt(ptParts[1]));
    });
};


@Component({
    selector: "paral",
    template: `
    <StackLayout>
        <Button text="TAP" (tap)="onParalClick(lbl)"></Button>
        <Label #lbl class="paral" (tap)="onParalClick(lbl)"></Label>
    </StackLayout>
    `,
    styles: [`
    .paral {
        width: 100%;
        height: 300px;
        background-color: purple;
        clip-path: polygon(-75% 0%, 0% 0%, -25% 100%, -100% 100%);
        clip-path: polygon(30% 0, 50% 0, 35% 100%, 15% 100%);
    }
    `]
})

export class ParalComponent {

    //private path: Point[] = [mkPt(25, 0), mkPt(100, 0), mkPt(75, 100), mkPt(0, 100)];
    private pathVal = 'polygon(30% 0, 50% 0, 35% 100%, 15% 100%)';

    @ViewChild('lbl') labelRef: ElementRef;
    @ViewChild('stack1') stack1Ref: ElementRef;


    constructor(private page: Page, private ngZone: NgZone) {

    }

    ngOnInit() {
        var self = this;

        //let theLabel = this.labelRef.nativeElement;
        //let stack1 = this.stack1Ref.nativeElement;
    }

    ngAfterViewInit() {

    }

    private rev = true;
    private get range() {
        return this.rev ? { from: 10, to: 150 } : { from: 150, to: 10 };
    }

    public onParalClick(args) {
        const paral = args;
        const amtChange = 50;
        const path = clipPathValueToArray(this.pathVal);
        const tempPath = transformPath(path)(-amtChange);

        duration(500)
            .map(d3.easeElasticOut)
            .map(amount(amtChange))
            .map(amt => transformPath(tempPath)(amt))
            .map(getClipPathValue)
            .do(newPathVal => paral.style.clipPath = newPathVal)
            .subscribe();
    }


    public onPan(args: PanGestureEventData) {
        console.log(args.state);
    }

    public onTouch(args: TouchGestureEventData) {
        console.log(args.action);
    }

    public handleError(e) {
        console.dir(e);
    }

}
