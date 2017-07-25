import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs';
import { Scheduler } from "rxjs";
import { Color } from "tns-core-modules/color";

//import 'd3-ease';
//import { easeCubic, easeElasticOut } from "d3-ease";
var elasticOut = require('eases/elastic-out');

declare var android;
declare var CGSizeMake;

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
const distance = (d) => (t) => t * d;

const prevAndCurrent = (initialValue) => (source$) =>
    source$.startWith(initialValue)
        .bufferCount(2, 1);

const tween = (ms, easing) => (source$) =>
    source$
        .let(prevAndCurrent(0))
        .switchMap(([p, n]) =>
            duration(ms)
                .map(easing)
                .map(distance(n - p))
                .map(v => n + v)
        );

@Component({
    selector: 'clock-component',
    templateUrl: 'clock.component.html',
    styleUrls: ['clock.component.css']
})

export class ClockComponent implements OnInit {
    constructor() { }

    public dist$: Observable<number>;

    @ViewChild('clocklbl') clocklblRef: ElementRef;

    public onTap(args) {
        const hand = this.clocklblRef.nativeElement;


    }

    public onStackLoaded(args) {
        let tnsView = <any>args.object;
        var a = 0;
        if (tnsView.android) {
            let nativeAnView = tnsView.android;
            //var shape = new android.graphics.drawable.GradientDrawable();
            //shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            //shape.setColor(android.graphics.Color.parseColor('#30bcff'));
            //nativeAnView.setBackgroundDrawable(shape);
            //nativeAnView.setElevation(20);
        } else if (tnsView.ios) {
            let nativeView = tnsView.ios;
            nativeView.layer.shadowColor = new Color('#888888').ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, 2.0);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }

    }

    ngOnInit() {
        const hand = this.clocklblRef.nativeElement;
        /*

                */

        this.dist$ = Observable.timer(0, 1000)
            .map(t => t * 360 / 60)
            .let(tween(900, elasticOut));
        //.subscribe(dist =>
        //    hand.style.transform = `rotate(${dist})`
        //);
    }
}