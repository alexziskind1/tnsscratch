import { Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { Item } from "./item";
import { ItemEvent } from "./item-event.model";
import { View, Size, Point } from "ui/core/view";
import { Image } from "ui/image/image";


@Component({
    moduleId: module.id,
    selector: 'list-item',
    template: `
        <GridLayout columns="*,*" class="list-item" (tap)="onTap($event, itemImage)">
            <Image #itemImage [src]="'~/images/' + item.pic" col="0" class="image"></Image>
            <Label [text]="item.name" class="label" col="1"></Label>
        </GridLayout>
    `
})

export class ListItemComponent implements OnInit, AfterViewInit {

    @Input() item: Item;
    @Input() selectedView: View;
    @Output() itemTap = new EventEmitter<ItemEvent>();
    //@ViewChild('listItemView') listItemViewRef: ElementRef;

    constructor() { }

    public ngOnInit() {

    }

    public ngAfterViewInit() {
        /*
        if (this.selectedView) {
            const actualSize = this.selectedView.getActualSize();
            const locOnScreen = this.selectedView.getLocationOnScreen();

            const thisView = <View>this.listItemViewRef.nativeElement;
            //thisView.height = actualSize.height;
            thisView.width = actualSize.width;
            thisView.top = locOnScreen.y - 20; //20 is the status bar height
            thisView.left = locOnScreen.x;
        }
        */
    }

    public onTap(args, itemImage: Image) {

        //const actualSize = <Size>itemImage.getActualSize();
        //const locOnScreen = <Point>itemImage.getLocationOnScreen();

        //listItemView.width = actualSize.width;
        //listItemView.top = locOnScreen.y - 20; //20 is the status bar height
        //listItemView.left = locOnScreen.x;

        //alert(`image width: ${actualSize.width} , x: ${locOnScreen.x} , y: ${locOnScreen.y}`);

        if (this.selectedView) {
            this.itemTap.emit({ item: undefined, listItemImage: itemImage });
        } else {
            this.itemTap.emit({ item: this.item, listItemImage: itemImage });
        }
    }
}