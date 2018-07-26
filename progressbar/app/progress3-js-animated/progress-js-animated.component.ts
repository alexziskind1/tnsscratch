import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getNewPercentValue } from '~/util';
import * as d3 from 'd3-ease';

@Component({
    selector: 'progress-orig',
    template: `
    <GridLayout  class="progressbar">
    <StackLayout #pbVal col="0" class="progressbar-value" [style.width]="percent + '%'"></StackLayout>
    </GridLayout> `
})
export class ProgressJsAnimatedComponent implements OnInit {

    @ViewChild('pbVal') pbValRef: ElementRef;

    public percent = 0;

    public ngOnInit(): void {
        let percentCurrent = 0;

        let intervalId = setInterval(() => {
            const oldPercent = percentCurrent;
            percentCurrent = getNewPercentValue(percentCurrent);

            animate(
                d3.easeQuadOut,
                (delta) => {
                    const newWidth = amountFromTo({ from: oldPercent, to: percentCurrent })(delta);
                    this.percent = newWidth;
                },
                300);

            if (percentCurrent >= 100) {
                clearInterval(intervalId);
            }
        }, 1000);
    }
}

function animate(deltaCalc: (p: number) => number, step: (delta: number) => void, duration: number) {
    var start = new Date();
    var id = setInterval(function () {
        var timePassed = new Date().valueOf() - start.valueOf();
        var progress = timePassed / duration;

        if (progress > 1) progress = 1;

        var delta = deltaCalc(progress);

        step(delta);

        if (progress == 1) {
            clearInterval(id);
        }
    }, 10);
}

const amountFromTo = function (range: { from: number, to: number }) {
    return function (t) {
        const ret = range.from + t * (range.to - range.from);
        return ret;
    };
};

