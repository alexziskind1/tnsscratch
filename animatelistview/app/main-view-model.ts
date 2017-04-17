import { Observable } from 'data/observable';

import { ListView } from 'ui/list-view';
import { MyItem } from './models';

declare var NSIndexPath;
declare var UITableViewScrollPosition;

export class HelloWorldModel extends Observable {
    private _listView: ListView;
    private _selectedIndex: number = 1;

    public listItems: Array<MyItem> = [];

    public positions = [
        { title: 'Row 1', position: 1 },
        { title: 'Row 450', position: 450 },
        { title: 'Row 900', position: 900 }
    ];

    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(value: number) {
        this._selectedIndex = value;
        let position = this.positions[value].position;
        this.scrollListView(position);
    }

    constructor(lv: ListView) {
        super();
        this._listView = lv;
        this.fillListItems();
    }

    private fillListItems() {
        for (var i = 0; i < 1000; i++) {
            let item: MyItem = { text: 'myItem' + i };
            this.listItems.push(item);
        }
    }

    private scrollListView(position: number) {
        if (this._listView.ios) {
            this._listView.ios.scrollToRowAtIndexPathAtScrollPositionAnimated(NSIndexPath.indexPathForItemInSection(position, 0), UITableViewScrollPosition.UITableViewScrollPositionTop, true);
        } else {
            this._listView.scrollToIndex(position);
        }
    }

}