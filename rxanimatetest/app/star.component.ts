import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { PanGestureEventData, GestureTypes, GestureStateTypes, GesturesObserver, TouchGestureEventData } from "tns-core-modules/ui/gestures";

import 'rxjs';
import { Page } from "ui/page";
import { Label } from "tns-core-modules/ui/label/label";
import * as enums from "ui/enums";
import { Scheduler } from "rxjs";
import * as d3 from 'd3-ease';

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



@Component({
    selector: "star",
    template: `
    <StackLayout>
        <Label class="star" (tap)="onTap($event)"></Label>
        <Label class="rect-rad" (tap)="onRectTap($event)"></Label>
        <Label class="half" ></Label>
    </StackLayout>
    `,
    styles: [`
        .star {
            height: 100;
            width: 100;
            background-color: green;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
        .half {
            width: 280;
            height: 300;
            background-color: #1e90ff;
            clip-path: polygon(98.66025% 45%, 99.39693% 46.5798%, 99.84808% 48.26352%, 100% 50%, 99.84808% 51.73648%, 99.39693% 53.4202%, 98.66025% 55%, 78.66025% 89.64102%, 77.66044% 91.06889%, 76.42788% 92.30146%, 75% 93.30127%, 73.4202% 94.03794%, 71.73648% 94.48909%, 70% 94.64102%, 30% 94.64102%, 28.26352% 94.48909%, 26.5798% 94.03794%, 25% 93.30127%, 23.57212% 92.30146%, 22.33956% 91.06889%, 21.33975% 89.64102%, 1.33975% 55%, 0.60307% 53.4202%, 0.15192% 51.73648%, 0% 50%, 0.15192% 48.26352%, 0.60307% 46.5798%, 1.33975% 45%, 21.33975% 10.35898%, 22.33956% 8.93111%, 23.57212% 7.69854%, 25% 6.69873%, 26.5798% 5.96206%, 28.26352% 5.51091%, 30% 5.35898%, 70% 5.35898%, 71.73648% 5.51091%, 73.4202% 5.96206%, 75% 6.69873%, 76.42788% 7.69854%, 77.66044% 8.93111%, 78.66025% 10.35898%);
        }
        .rect-rad {
            width: 300;
            height: 300;
            background-color: orange;
            border-radius: 10;
        }
    `]
})

export class StarComponent {

    public touch$: Observable<TouchGestureEventData>;


    public touchDown$: Observable<TouchGestureEventData>;
    public touchMove$: Observable<TouchGestureEventData>;
    public touchUp$: Observable<TouchGestureEventData>;



    public drag$: Observable<TouchGestureEventData>;


    public position$: Observable<number>;

    public status: string = 'hello status';
    public position: string = 'hello position';

    public marLeft$: Observable<number>;

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

    public onRectTap(args) {
        const lbl = <Label>args.object;

        duration(500)
            //.map(d3.easeBackOut)
            .map(amountFromTo(this.range))
            //.filter(v => v >= 10)
            .subscribe(
            frame => {
                console.log('frame: ' + frame);
                lbl.style.borderRadius = `${frame}`;
            },
            er => console.error(er),
            () => this.rev = !this.rev
            );
    }

    public onTap(args) {
        const lbl = <Label>args.object;

        duration(1000)
            .map(d3.easeElasticOut)
            .map(amount(100))
            .subscribe(frame => {
                //lbl.scaleX = frame;
                //lbl.scaleY = frame;
                lbl.style.clipPath = `polygon(${frame}% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`;

            });
        /*
                lbl.animate({
                    duration: 200,
                    scale: { x: 3, y: 3 },
                    curve: enums.AnimationCurve.easeIn
                }).then(() =>
                    lbl.animate({
                        duration: 200,
                        scale: { x: 1, y: 1 },
                        curve: enums.AnimationCurve.easeOut
                    })
                    );
                */
    }

    public onPan(args: PanGestureEventData) {
        console.log(args.state);
    }

    public onTouch(args: TouchGestureEventData) {
        console.log(args.action);
    }

    public onPositionUpdate(n: number) {
        this.ngZone.run(() => {
            this.position = 'new pos: ' + n;
        });
    }

    public onStatusUpdate(s: string) {
        this.ngZone.run(() => {
            console.log('status ' + s);
            this.status = s;
        });
    }

    public onEventUpdate(e: TouchGestureEventData) {
        this.ngZone.run(() => {
            this.position = 'new pos: ' + e.getX();
        });
    }

    public handleError(e) {
        console.dir(e);

    }

}
