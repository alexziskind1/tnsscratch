import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import "rxjs";
import { Scheduler, Observable } from "rxjs";
import { Page } from "tns-core-modules/ui/page";
import { isIOS, screen } from 'platform';
import { topmost } from 'ui/frame';
import { StackLayout } from 'ui/layouts/stack-layout';
import * as d3e from 'd3-ease';

const timeElapsed = Observable.defer(() => {
    const start = Scheduler.animationFrame.now();
    return Observable.interval(1)
        .map(() => Math.floor((Date.now() - start)));
});

const duration = (totalMs) =>
    timeElapsed
        .map(elapsedMs => elapsedMs / totalMs)
        .takeWhile(t => t <= 1);

const amountFromTo = function (range) {
    return function (t) {
        const ret = range.from + t * (range.to - range.from);
        return ret;
    };
};


@Component({
    selector: "ns-app",
    template: `
        <StackLayout>
            
            <GridLayout class="loading-cover" (tap)="onTap($event)" [height]="coverHeight$ | async">
                <Label class="thelabel" text="Hello"></Label>
            </GridLayout>
            <ScrollView>
                <StackLayout>
                    <StackLayout class="item-wrapper" *ngFor="let item of items">
                        <!--Label [text]="item.title"></Label-->
                        <Image [src]="item.picSource"></Image>
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
    `,
    styles: [
        `
            .loading-cover {
                background-color: red;
                height: 100%;
                width: 100%;
                text-align: center;
            }
            .thelabel {
                font-size: 28;
                font-weight: bold;
                color: white;
            }
            ScrollView {
                height: 100%;
            }
            .item-wrapper {
                border-color: #efefef;
                border-width: 1;

                animation-name: itemin;
                animation-duration: 300ms;
                animation-fill-mode: forwards;
            }

            @keyframes itemin {
                from { opacity: 0; transform: translateY(250px); }
                to { opacity: 1; transform: translateY(0px); }
            }
        `
    ]
})

export class AppComponent implements OnInit {

    public items: Item[] = [];
    public items$: Observable<Item[]>;

    public coverHeight$: Observable<number>;

    private get screenHeight() {
        return screen.mainScreen.heightDIPs;
    }
    private get rangeOneWayPixels() {
        return { from: this.screenHeight, to: 50 };
    }

    constructor(private page: Page) {
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.actionBarHidden = true;
        if (isIOS) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
        this.coverHeight$ = Observable.of(this.screenHeight);
    }

    onTap() {
        this.coverHeight$ = duration(700)
            .map(d3e.easeExpOut)
            .map(amountFromTo(this.rangeOneWayPixels));

        Observable.interval(200)
            .take(ITEMS.length)
            .map(t => this.items.push(ITEMS[t]))
            .subscribe();
    }

    ngOnInit() { }
}


interface Item {
    title: string;
    picSource: string;
}

const ITEMS: Item[] = [];

const fillMoreItems = (numItems: number) => {
    for (let i = 0; i < numItems; i++) {
        ITEMS.push({ title: `dynitem ${i}`, picSource: `~/images/post${i}.png` });
    }
};

fillMoreItems(20);
