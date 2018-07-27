import { Component, OnInit } from "@angular/core";
import { getNewPercentValue } from "~/util";

@Component({
  selector: "progress-orig",
  template: `
            <GridLayout [columns]="columns" class="progressbar">
                <StackLayout col="0" class="progressbar-value"></StackLayout>
            </GridLayout>
            `
})
export class ProgressOrigComponent implements OnInit {
  public columns;

  public ngOnInit(): void {
    let percent = 0;
    const intervalId = setInterval(() => {
      this.setProgressbarWidth(percent);
      //percent++;
      percent = getNewPercentValue(percent);
      if (percent > 100) {
        clearInterval(intervalId);
      }
    }, 500);
  }

  public setProgressbarWidth(percent) {
    this.columns = percent + "*," + (100 - percent) + "*";
  }
}
