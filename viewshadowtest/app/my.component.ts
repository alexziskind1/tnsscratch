import { Component } from "@angular/core";

import { View } from 'ui/core/view';
import { EventData } from "data/observable";
import { GestureEventData } from 'ui/gestures';


@Component({
    selector: "my-component",
    template: `
        <Label shadow style.color="red" [text]="text"  (tap)="onTap($event)"></Label>

    `
})
export class MyComponent {

    public text: string = 'blah';

    public onLoaded(args: EventData) {
        console.log('my component onLoaded');
        let v = <View>args.object;
        v.on('measure,propertyChange,change', (d: EventData) => {
            console.log('event: ' + d.eventName);
            console.dir(d);
        });
    }

    public onUnloaded(args) {
        console.log('my component onUnloaded');
    }

    public onMeasure(args) {
        console.log('my component onMeasure');
    }

    public onTap(args: GestureEventData) {
        console.log('my component tap measured hjeight: ' + args.view.getMeasuredHeight());

    }

}
