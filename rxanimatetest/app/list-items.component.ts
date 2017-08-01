import { Component, OnInit } from '@angular/core';
import "rxjs";
import { Observable } from "rxjs/Observable";




@Component({
    selector: 'list-items',
    template: `
        <GridLayout>
            <!--ListView [items]="items">
                <template let-item="item">
                    <StackLayout class="item-wrapper">
                        <Label [text]="item.title"></Label>
                    </StackLayout>
                </template>
            </ListView-->

            <ScrollView>
                <StackLayout>
                    <StackLayout class="item-wrapper" *ngFor="let item of items">
                        <Label [text]="item.title"></Label>
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </GridLayout>
    `,
    styles: [
        `
            ScrollView {
                height: 100%;
            }
            ListView {
                height: 100%;
            }
            .item-wrapper {
                height: 200px;
                margin-bottom: 20px;
                border-color: red;
                border-width: 1;
                background-color: blue;
                
                animation-name: itemin;
                animation-duration: 500ms;
                animation-fill-mode: forwards;
                
            }
            @keyframes itemin {
                from { opacity: 0; transform: translateY(50px); }
                to { opacity: 1; transform: translateY(0px); }
            }
        `
    ]
})

export class ListItemsComponent implements OnInit {

    public items: Item[] = [];
    public items$: Observable<Item[]>;
    constructor() {
        //this.items$ = Observable.of(ITEMS);
    }

    ngOnInit() {
        Observable.interval(100)
            .take(ITEMS.length)
            .map(t => this.items.push(ITEMS[t]))
            .subscribe();
    }
}




interface Item {
    title: string;
}

const ITEMS: Item[] = [];

const fillMoreItems = (numItems: number) => {
    for (let i = 0; i < numItems; i++) {
        ITEMS.push({ title: `dynitem ${i}` });
    }
};

fillMoreItems(20);
