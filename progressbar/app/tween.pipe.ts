import { Pipe, PipeTransform } from '@angular/core';
import { Observable, asyncScheduler, interval, defer } from 'rxjs';
import { map, takeWhile, switchMap, startWith, bufferCount } from 'rxjs/operators';
import * as d3 from 'd3-ease';

const distance = (d: number) => (t: number) => t * d;

const msElapsed = (scheduler = asyncScheduler) =>
    defer(() => {
        const start = scheduler.now();
        return interval(0, scheduler).pipe(
            map(t => scheduler.now() - start)
        );
    });

const duration = (ms, scheduler = asyncScheduler) =>
    msElapsed(scheduler).pipe(
        map(elapsedMs => elapsedMs / ms),
        takeWhile(t => t <= 1)
    );

const prevAndCurrent = (initialValue: number) => (source$: Observable<number>) =>
    source$.pipe(
        startWith(initialValue),
        bufferCount(2, 1)
    );

const tween = (ms: number, easing: (t: number) => number) => (source$: Observable<number>) =>
    source$.pipe(
        prevAndCurrent(0),
        takeWhile(([p, n]) => n <= 100),
        switchMap(([p, n]) =>
            duration(ms)
                .pipe(
                    map(easing),
                    map(distance(n - p)),
                    map(v => n + v)
                )
        )
    );

@Pipe({
    name: 'tweenPipe'
})
export class TweenPipe implements PipeTransform {
    transform(value$: Observable<number>, ...args: any[]): any {
        return value$.pipe(
            tween(400, d3.easeQuadOut)
        );
    }
}
