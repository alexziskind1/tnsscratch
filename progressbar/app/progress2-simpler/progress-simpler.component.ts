import { Component, OnInit } from '@angular/core';
import { getNewPercentValue } from '~/util';

@Component({
    selector: 'progress-simpler',
    template: `
            <GridLayout  class="progressbar">
                <StackLayout col="0" class="progressbar-value" [style.width]="percent + '%'"></StackLayout>
                </GridLayout>
            `
})
export class ProgressSimplerComponent implements OnInit {

    public percent = 0;

    public ngOnInit(): void {
        let intervalId = setInterval(() => {

            this.percent = getNewPercentValue(this.percent);

            if (this.percent >= 100) {
                clearInterval(intervalId);
            }
        }, 1000);
    }
}
