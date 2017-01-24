import { Component, ChangeDetectionStrategy } from "@angular/core";

import { View } from 'ui/core/view';
import { Button } from 'ui/button';
import { TouchGestureEventData } from 'ui/gestures';
import { Color } from 'color';

@Component({
    selector: "my-app",
    templateUrl: "app2.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    private counter = 1;
    public onTap(args: Button) {
        this.counter ++;
        console.log('tapped ' + this.counter);
    }

    public onTouch(args: TouchGestureEventData) {
        let theBtn = <Button>args.view;
        switch (args.action) {
            case 'down':
                theBtn.animate({
                    backgroundColor: new Color('red'),
                    duration: 100
                });
                break;
            case 'up':
                theBtn.animate({
                    backgroundColor: new Color('blue'),
                    duration: 100
                });
                break;
        }
    }
}
