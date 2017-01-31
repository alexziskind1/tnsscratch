import { Component } from "@angular/core";

import { View } from 'ui/core/view';
import { Label } from 'ui/label';
import { LayoutBase } from 'ui/layouts/layout-base';
import { StackLayout } from 'ui/layouts/stack-layout';
import { GridLayout } from 'ui/layouts/grid-layout';
import { EventData, PropertyChangeData } from "data/observable";
import { GestureEventData } from 'ui/gestures';
import { Color } from 'color';

declare const CGSizeMake: any;
declare const android: any;

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public slText: string = 'dfdf';
    protected get shadowColor(): Color {
        return new Color('#888888');
    }

    protected get shadowOffset(): number {
        return 2.0;
    }

    constructor() {
        console.log('ctorf');
    }

    public onLoaded(args: EventData) {
        let tnsView = (<StackLayout>args.object);

        if (tnsView.android) {
            let nativeAnView = tnsView.android;
            if (nativeAnView.setShadowLayer) {
                nativeAnView.setShadowLayer(
                    10.0,
                    this.shadowOffset,
                    this.shadowOffset,
                    this.shadowColor.android
                );
            } else {
                var shape = new android.graphics.drawable.GradientDrawable();
                shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
                shape.setColor(android.graphics.Color.parseColor("#eeeeee"));
                nativeAnView.setBackgroundDrawable(shape);
                nativeAnView.setElevation(20);
            }
        }

        if (tnsView.ios) {
            let nativeView = tnsView.ios;

            setTimeout(() => {
                tnsView.clipToBounds = false;
                tnsView.ios.clipsToBounds = false;
            }, 30);

            nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    }

    public onTap(args: GestureEventData) {

        console.log('AppComponent tag');
        /*
        const nativeView = (<View>args.object).ios;
        nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
        nativeView.layer.shadowOffset = CGSizeMake(this.shadowOffset, this.shadowOffset);
        nativeView.layer.shadowOpacity = 1.0;
        nativeView.layer.shadowRadius = 2.0;
        */

    }
}
