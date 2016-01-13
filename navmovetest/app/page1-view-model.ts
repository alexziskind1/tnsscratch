import {Observable} from "data/observable";
import frameModule = require("ui/frame");



export class HelloWorldModel extends Observable {
    public counter: number;
    public topFrame: frameModule.Frame;

    constructor(topFrame: frameModule.Frame) {
        super();
        this.topFrame = topFrame;
        this.counter = 5;
        this.set("message", this.counter + " taps left");
    }

    public tapAction() {
        this.topFrame.navigate("page2");

    };
};