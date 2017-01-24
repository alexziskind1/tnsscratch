import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    public arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    private counter = 1;
    public onTap(args) {
        this.counter++;
        console.log('tapped ' + this.counter);
    }
}
