import { Component, Input, Output, EventEmitter } from "@angular/core";

import { TouchGestureEventData, GestureEventData } from 'ui/gestures';
import { Color } from 'color';


declare const CGSizeMake: any;
declare const android: any;


@Component({
    moduleId: module.id,
    selector: "float-btn",
    template: `
    <GridLayout class="float-btn-wrapper">
        <GridLayout class="float-btn-shadow" (loaded)="onLoaded($event)"> 
            <StackLayout class="float-btn" (tap)="onTap($event)" (touch)="onTouch($event)">  
                <Label class="float-btn-text" [text]="text"></Label>
            </StackLayout>
        </GridLayout>
    </GridLayout>
    `,
    styles: [
        `
            .float-btn-wrapper {
                width:75;
                height:75;
            }
            .float-btn-shadow {
                width:56;
                height:56;
            }

            .float-btn {
                background-color:#30bcff;
                border-radius: 28;
                width:56;
                height:56;
                text-align: center;
                vertical-align: middle;         
            }

             .float-btn.down {
                 animation-name: down;
                 animation-duration: 0.2s;
                 animation-fill-mode: forwards;
             }

            .float-btn-text {
                color:#fff;
                font-size: 36;
                margin-top:-4;
            }

            @keyframes down {
                from { background-color: #30bcff; }
                to { background-color: purple;  }
            }
        `
    ]
})
export class FloatBtnComponent {

    @Input() text: string;
    @Output() tap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();


    protected get shadowColor(): Color {
        return new Color('#888888');
    }

    protected get shadowOffset(): number {
        return 2.0;
    }

    public onTap(args: GestureEventData) {
        this.tap.emit(args);
    }

    public onTouch(args: TouchGestureEventData) {
        let theBtn = args.view;
        switch (args.action) {
            case 'down':
                theBtn.className = 'float-btn down';
                break;
            case 'up':
                theBtn.className = 'float-btn';
                break;
        }
    }

    public onLoaded(args) {
        let tnsView = <any>args.object;

        setTimeout(() => {
            console.log('timeout done');
            tnsView.clipToBounds = false;
            if (tnsView.ios)
                tnsView.ios.clipsToBounds = false;
        }, 200);

        if (tnsView.android) {
            let nativeAnView = tnsView.android;
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
            shape.setColor(android.graphics.Color.parseColor("#30bcff"));
            nativeAnView.setBackgroundDrawable(shape);
            nativeAnView.setElevation(20);
        } else if (tnsView.ios) {
            let nativeView = tnsView.ios;
            nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
            nativeView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
            nativeView.layer.shadowOpacity = 0.5;
            nativeView.layer.shadowRadius = 5.0;
        }
    }
}
