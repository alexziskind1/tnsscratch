import { Component, ViewChild, ElementRef } from "@angular/core";
import 'rxjs';
import { Scheduler, Observable } from "rxjs";
import { Label } from 'ui/label';
import 'rxjs/add/operator/do';
var eases = require("eases");
//import 'd3-ease';
//var d3Ease = require("d3-ease");


const msElapsed = (scheduler = Scheduler.animationFrame) =>
    Observable.defer(() => {
        const start = scheduler.now();
        return Observable.interval(0, scheduler)
            .map(() => scheduler.now() - start);
    });

const pixelsPerSecond = (v) => (ms) => v * ms / 1000;
const duration = (ms, scheduler = Scheduler.animationFrame) =>
    msElapsed(scheduler)
        .map(elapsedMs => elapsedMs / ms)
        .takeWhile(t => t <= 1);
const distance = (d) => (t) => t * d;

const elasticOut = (t) => {
    return Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
        Math.pow(2.0, -10.0 * t) +
        1.0
};
const moveDown = (view) => (duration$) =>
    duration$
        .map(eases.bounceOut)
        .map(distance(200))
        .do(frame => {
            view.style.height = frame;
        });


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    @ViewChild('lbl') lblRef: ElementRef;
    @ViewChild('lbl2') lbl2Ref: ElementRef;
    @ViewChild('lbl3') lbl3Ref: ElementRef;

    constructor() {

    }

    ngOnInit() {
        const myLbl = <Label>this.lblRef.nativeElement;
        const myLbl2 = <Label>this.lbl2Ref.nativeElement;
        const myLbl3 = <Label>this.lbl3Ref.nativeElement;

        //Velocity animation - infinite time
        /*
        msElapsed()
            .map(pixelsPerSecond(50))
            .subscribe(frame => {
                //myLbl.style.transform = `translate(0,${frame}px)`;
                //myLbl.style.transform = `rotate(${frame}px)`;
                myLbl.style.height = frame;
            });
            */

        //duration animation
        /*
        duration(2000)
            .map(elasticOut)
            .map(distance(100))
            .subscribe(frame => {
                myLbl.style.height = frame;
            });
            */

        Observable.from([myLbl, myLbl2, myLbl3])
            .concatMap((view, i) =>
                duration((i + 1) * 500)
                    .let(moveDown(view)))
            .subscribe();

    }
}
