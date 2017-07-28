import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { PanGestureEventData, GestureTypes, GestureStateTypes, GesturesObserver, TouchGestureEventData } from "tns-core-modules/ui/gestures";

import 'rxjs';
import { Page } from "ui/page";
import * as fpsMeter from "tns-core-modules/fps-meter";
import { PerformanceMonitor, PerformanceMonitorSample } from 'nativescript-performance-monitor';
import { Color } from "tns-core-modules/color";

class Point {
    constructor(public x: number) { }
}

const performanceMonitor: PerformanceMonitor = new PerformanceMonitor();
performanceMonitor.start({
    textColor: new Color("white"),
    backgroundColor: new Color("black"),
    borderColor: new Color("black"),
    hide: false,
    onSample: (sample: PerformanceMonitorSample) => {
        console.log("FPS: " + sample.fps);
        if (sample.cpu) { // iOS only 
            console.log("CPU %: " + sample.cpu);
        }
    }
});



@Component({
    selector: "drag",
    templateUrl: "drag.component.html",
    styleUrls: ['drag.component.css']
    //changeDetection: ChangeDetectionStrategy.OnPush
})

export class DragComponent {

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
        /*const source = Observable.timer(0, 5000);
        const example = source.switchMap(() => Observable.interval(500));
        example.subscribe(n => console.log(n));
        */

        var callbackId = fpsMeter.addCallback(function (fps: number, minFps: number) {
            console.info("fps=" + fps + " minFps=" + minFps);
        });
        fpsMeter.start();
    }

    ngOnInit() {

        var self = this;

        let theLabel = this.labelRef.nativeElement;
        let stack1 = this.stack1Ref.nativeElement;

        this.touch$ = Observable.fromEvent<TouchGestureEventData>(stack1, 'touch')
            //   .filter(val => val.action !== 'cancel');
            .catch(e => {
                this.handleError(e);
                return Observable.empty<TouchGestureEventData>();
            });

        /*
    this.touch$.subscribe(
        n => {
            this.onStatusUpdate(n.action);
        },
        err => {
            console.dir(err);
        },
        () => {
            console.log('dopne');
        });
        */



        this.touchDown$ = this.touch$.filter(d => d.action === 'down')
        this.touchMove$ = this.touch$.filter(d => d.action === 'move');
        this.touchUp$ = this.touch$.filter(d => d.action === 'up');

        /*
                this.touchDown$.subscribe(
                    n => {
                        this.onStatusUpdate('touch down');
                        this.onEventUpdate(n);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('done')
                    });
                this.touchMove$.subscribe(
                    n => {
                        this.onStatusUpdate('touch move');
                        this.onEventUpdate(n);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('done')
                    });
                this.touchUp$.subscribe(
                    n => {
                        this.onStatusUpdate('touch up');
                        this.onEventUpdate(n);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('done')
                    });
                    */


        /*
                this.drag$ = self.touchDown$
                    .switchMap((args) => {
                        return self.touchMove$.takeUntil(self.touchUp$);
                    }).catch((e) => {
                        console.log(e);
                        return Observable.empty<TouchGestureEventData>();
                    });
        */



        /*
                this.drag$ = this.touchDown$
                    .flatMap((d) =>
                        this.touchMove$
                            .takeUntil(this.touchUp$)
                            .repeat()
                    )
                    .catch((e) => {
                        console.log(e);
                        return Observable.empty<TouchGestureEventData>();
                    });
                    */

        this.marLeft$ = this.touchMove$.map(e => e.getY() / 100);


        //this.drag$.subscribe(e => this.onPositionUpdate(n));

        /*
                this.drag$.subscribe(
                    val => {
                        return this.onEventUpdate(val);
                    },
                    err => {
                        console.error(err)
                    },
                    () => {
                        console.log('drag done')
                    }
                );
                */




        /*
        //this.position$ =
        drag$.startWith(0)
            .subscribe(s => {
                console.log(s);
                this.position = s + '';
            });
            */
    }

    ngAfterViewInit() {
        /*
        this.pan$.subscribe(o => {
            var a = 0;
        });
        */
    }

    public onTap(args) {
        this.position = 'tapped';
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
