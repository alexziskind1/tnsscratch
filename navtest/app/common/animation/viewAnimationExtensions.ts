import {View} from "ui/core/view";
import {Label} from "ui/label";
import animationUtilsModule = require("./utils");


export interface IView extends View {
    fadeIn(): Promise<void>
    fadeOut(): Promise<void>
}


export class AnimatedLabel extends Label implements IView {
    public fadeIn(duration: number = 300) : Promise<void> {
        return animationUtilsModule.fadeIn(this, duration);
    }

    public fadeOut(duration: number = 300) : Promise<void> {
        return animationUtilsModule.fadeOut(this, duration);
    }
}