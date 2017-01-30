import { Component } from "@angular/core";

@Component({
    selector: "my-component",
    template: `
        <Label shadow style.color="red" [text]="text"></Label>

    `
})
export class MyComponent {

    public text: string = 'blah';

}
