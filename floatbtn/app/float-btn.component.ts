import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { View } from 'ui/core/view';
import { TouchGestureEventData, GestureEventData } from 'ui/gestures';
import { Color } from 'color';

declare var android: any;

@Component({
    moduleId: module.id,
    selector: "float-btn",
    template: `
    <StackLayout (tap)="onTap($event)" (touch)="onTouch($event)" (loaded)="onLoaded($event)" class="float-btn" >   
        <Label class="float-btn-text" [text]="text"></Label>
    </StackLayout>


    <StackLayout class="outer" (tap)="outerTap($event)" >
        <StackLayout class="inner">
            <Label class="inner-lbl" text="hi"></Label>
        </StackLayout>
    </StackLayout>
    `,
    styles: [
        `
            .outer {
                background-color: green;
                margin: 5;
                padding: 5;
            }
            .inner {
                background-color: red;
                margin: 5;
                padding: 5;
            }
            .float-btn-text {
                margin: 5;
                padding: 5;
            }


            .float-btn {
                background-color:#30bcff;
                border-color:#30bcff;
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
                to { background-color: red;  }
            }
        `
    ]
})
export class FloatBtnComponent implements OnInit {

    @Input() text: string;
    @Output() tap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();


    public outerTap(args: GestureEventData) {
        console.log('outerTap');
    }

    public ngOnInit() {
        console.log('ngOnInit');
    }

    public onLoaded(args) {
        //let obj = args.object;
        //args.object.android.setBackgroundResource(android.R.drawable.dialog_holo_light_frame);
        //args.object.android.setElevation(2);
        //args.object.android.elevation = '2dp';
        console.log('onLoaded');
        console.log('backgorund before: ' + args.object.android.getBackground());

        //args.object.android.setBackgroundColor(android.graphics.Color.parseColor("#000000"));

//console.dir(android.R.drawable());

        //args.object.android.setBackgroundResource(android.R.drawable.tags_rounded_corners);
      
        //let drawable = args.object.android.getBackground();

        //drawable.setColor(android.graphics.Color.RED);
console.log('constant color: ' + android.graphics.Color.RED);

    var shape = new android.graphics.drawable.GradientDrawable();
    shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
    //shape.setCornerRadii([ 40, 40, 40, 40, 40, 40, 40, 40 ]);
    shape.setColor(android.graphics.Color.RED);
    //shape.setStroke(3, android.graphics.Color.RED);
    args.object.android.setBackgroundDrawable(shape);


        //args.object.android.setElevation(10);
        args.object.android.setTranslationZ(10);
        //args.object.android.elevation = 40;
        //args.object.android.getChildAt(0).setElevation(20);
        //args.object.android.getChildAt(0).elevation = 20;
        //args.object.android.clipToPadding = false;
        //console.log('elevation: ' + args.object.android.getChildAt(0).getElevation());
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
                //theBtn.className = 'float-btn';
                break;
        }
    }
}
