import { Observable } from "data/observable";
import * as frameModule from "tns-core-modules/ui/frame";



export class HelloWorldModel extends Observable {
    public counter: number;
    constructor() {
        super();
        this.counter = 5;
        this.set("message", this.counter + " taps left");
    }

    public tapAction() {
        frameModule.topmost().navigate("page2");

    };
};