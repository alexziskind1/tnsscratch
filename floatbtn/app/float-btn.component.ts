import { Component, Input, Output, EventEmitter } from "@angular/core";

import { TouchGestureEventData, GestureEventData } from 'ui/gestures';


@Component({
    moduleId: module.id,
    selector: "float-btn",
    template: `
    <StackLayout (tap)="onTap($event)" (touch)="onTouch($event)"  class="float-btn" >   
        <Label class="float-btn-text" [text]="text"></Label>
    </StackLayout>
    `,
    styles: [
        `
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
}
