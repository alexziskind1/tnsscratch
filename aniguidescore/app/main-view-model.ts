import { Observable as NativeScriptObservable } from 'data/observable';
import { ObservableArray } from "data/observable-array";

import "rxjs";
import { Observable } from "rxjs/Observable";


interface Item {
    title: string;
}

export class HelloWorldModel extends NativeScriptObservable {

    //public items: Item[] = [{ title: 'myitem' }];
    public items$: Observable<Item[]>;

    public items: ObservableArray<Item>;

    constructor() {
        super();
        this.items = new ObservableArray<Item>({ title: 'myitem' });

        Observable.interval(100)
            .take(ITEMS.length)
            .do(t => {
                console.dir(ITEMS[t]);
                this.items.push(ITEMS[t]);
            })
            .subscribe();
    }
}


const ITEMS: Item[] = [];

const fillMoreItems = (numItems: number) => {
    for (let i = 0; i < numItems; i++) {
        ITEMS.push({ title: `dynitem ${i}` });
    }
};

fillMoreItems(20);