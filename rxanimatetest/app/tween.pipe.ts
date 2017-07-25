import { Pipe, PipeTransform } from '@angular/core';
import { Scheduler } from "rxjs";
import { Observable } from "rxjs/Observable";
var elasticOut = require('eases/elastic-out');


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


@Pipe({
    name: 'tweenPipe'
})

export class TweenPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        //console.log('tween pipe');
        return value.let(tween(900, elasticOut));
    }
}