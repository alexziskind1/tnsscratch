import {Observable} from "data/observable";
import * as navigationModule from './shared/navigation';

export class MainViewModel extends Observable {

    public counter: number = 42;
    public message: string = '';

    constructor() {
        super();
        this.message = this.getMessage(this.counter);
    }

    public onTap() {
        this.counter--;
        this.set("message", this.getMessage(this.counter));
        navigationModule.goToMainPage();
    }

    private getMessage(counter) {
        if (counter <= 0) {
            return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        } else {
            return counter + " taps left";
        }
    }
}
