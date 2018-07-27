import { Component, OnInit } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  of,
  asyncScheduler,
  interval,
  defer
} from "rxjs";
import {
  map,
  takeWhile,
  switchMap,
  startWith,
  bufferCount
} from "rxjs/operators";
import * as d3 from "d3-ease";
import { getNewPercentValue } from "~/util";

@Component({
  selector: "progress-orig",
  template: `
    <GridLayout rows="50,50" class="progressbar">
    <StackLayout #pbVal col="0" class="progressbar-value" [style.width]="(percentAnimated$ | async) + '%'"></StackLayout>
    <Button text="go" row="1" (tap)="onTap()"></Button>
    </GridLayout>
            `
})
export class ProgressRxAnimatedComponent implements OnInit {
  public percentAnimated$: Observable<number> = of(0);
  public percent$ = new BehaviorSubject<number>(0);

  public ngOnInit(): void {
    this.percentAnimated$ = this.percent$.pipe(tween(400, d3.easeQuadOut));
  }

  public onTap() {
    let percentCurrent = 0;
    let intervalId = setInterval(() => {
      percentCurrent = getNewPercentValue(percentCurrent);
      this.percent$.next(percentCurrent);
      if (percentCurrent >= 100) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}

const distance = (d: number) => (t: number) => t * d;

const msElapsed = (scheduler = asyncScheduler) =>
  defer(() => {
    const start = scheduler.now();
    return interval(0, scheduler).pipe(map(t => scheduler.now() - start));
  });

const duration = (ms, scheduler = asyncScheduler) =>
  msElapsed(scheduler).pipe(
    map(elapsedMs => elapsedMs / ms),
    takeWhile(t => t <= 1)
  );

const prevAndCurrent = (initialValue: number) => (
  source$: Observable<number>
) =>
  source$.pipe(
    startWith(initialValue),
    bufferCount(2, 1)
  );

const tween = (ms: number, easing: (t: number) => number) => (
  source$: Observable<number>
) =>
  source$.pipe(
    prevAndCurrent(0),
    takeWhile(([p, n]) => n <= 100),
    switchMap(([p, n]) =>
      duration(ms).pipe(
        map(easing),
        map(distance(n - p)),
        map(v => n + v)
      )
    )
  );
