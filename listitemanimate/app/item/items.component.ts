import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import * as frameModule from 'ui/frame';
import { screen } from "platform"
import { ListView } from 'ui/list-view';
import { Image } from 'ui/image';

import { Item } from "./item";
import { ItemService } from "./item.service";

import * as labelModule from 'ui/label';
import { GridLayout } from 'ui/layouts/grid-layout';
import { AbsoluteLayout } from 'ui/layouts/absolute-layout';
import { ItemEvent } from "./item-event.model";
import { View, Size, Point, Visibility } from "ui/core/view";
import { Observable } from "rxjs/Rx";
import { duration, elasticOut, amount, amountFromTo, amountInverse, transformPathInset, getClipPathValueInset, clipPathValueToArrayInset, tween, AniRange } from "../shared/animation";
import * as d3 from 'd3-ease';
import { PropertyChangeData } from "data/observable";


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    public items: Item[];
    public selectedItem: Item;

    @ViewChild('itemList') itemListRef: ElementRef;
    private get itemListElement(): ListView {
        return this.itemListRef.nativeElement;
    }
    @ViewChild('detailContainer') detailContainerRef: ElementRef;
    private get detailContainerElement(): View {
        return this.detailContainerRef.nativeElement;
    }
    @ViewChild('detailTitle') detailTitleRef: ElementRef;
    private get detailTitleElement(): labelModule.Label {
        return this.detailTitleRef.nativeElement;
    }
    @ViewChild('detailImage') detailImageRef: ElementRef;
    private get detailImageElement(): Image {
        return this.detailImageRef.nativeElement;
    }

    @ViewChild('listContainer') listContainerRef: ElementRef;
    private get listContainerElement(): View {
        return this.listContainerRef.nativeElement;
    }

    private pathVal = 'inset(0 20 0 20)';
    private get path() {
        return clipPathValueToArrayInset(this.pathVal);
    }

    public imageWidth$ = Observable.of(207);
    public overlayTop$ = Observable.of(0);
    public overlayLeft$ = Observable.of(0);
    public clipPath$ = Observable.of(this.pathVal);

    private animationDuration = 500;

    private listItemImageSize: Size;
    private listItemImagePoint: Point;

    /*
    public get overlayVisible() {
        return this.selectedItem ? 'visible' : 'collapse';
    }
    */
    public overlayVisible: Visibility = 'collapse';

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }


    listItemTap(itemEvent: ItemEvent, overlayImage: Image) {
        this.selectedItem = itemEvent.item;
        const listItemImage = itemEvent.listItemImage;
        this.overlayVisible = 'visible';

        const newImageSrc = `~/images/${this.selectedItem.pic}`;
        this.detailTitleElement.text = this.selectedItem.name;
        this.detailImageElement.src = newImageSrc;

        (<any>this.itemListElement).classList.remove('swoosh-back');
        (<any>this.itemListElement).classList.add('swoosh-forward');

        this.listItemImageSize = <Size>listItemImage.getActualSize();
        this.listItemImagePoint = <Point>listItemImage.getLocationOnScreen();

        overlayImage.width = this.listItemImageSize.width;
        overlayImage.top = this.listItemImagePoint.y - 20; //20 is the status bar height
        overlayImage.left = this.listItemImagePoint.x;


        this.animateElements(this.animationDuration,
            { from: this.listItemImageSize.width, to: screen.mainScreen.widthDIPs },
            { from: this.listItemImagePoint.y - 20, to: 0 },
            { from: this.listItemImagePoint.x, to: 0 },
            d3.easeQuadOut,
            amountInverse,
            1);


        this.detailContainerElement.animate({
            opacity: 1,
            duration: this.animationDuration,
            delay: this.animationDuration
        }).then(() => {
            this.overlayVisible = 'collapse';
            this.listContainerElement.visibility = 'collapse';
        });
    }


    onCloseTap(args, overlay) {
        this.overlayVisible = 'visible';
        this.listContainerElement.visibility = 'visible';

        (<any>this.itemListElement).classList.remove('swoosh-forward');
        (<any>this.itemListElement).classList.add('swoosh-back');

        this.animateElements(this.animationDuration,
            { from: screen.mainScreen.widthDIPs, to: this.listItemImageSize.width },
            { from: 0, to: this.listItemImagePoint.y - 20 },
            { from: 0, to: this.listItemImagePoint.x },
            d3.easeQuadOut,
            amount,
            1);

        this.detailContainerElement.animate({
            opacity: 0,
            duration: this.animationDuration,
        }).then(() => {
            this.overlayVisible = 'collapse';
        });
    }

    private animateElements(animationDuration: number, sizeRange: AniRange, topRange: AniRange, leftRange: AniRange, easingFunction: (number) => number,
        amountDirectionFunction: (d: number) => (t: number) => number, amount: number) {

        this.imageWidth$ = duration(animationDuration)
            .map(easingFunction)
            .map(amountFromTo(sizeRange));

        this.overlayTop$ = duration(animationDuration)
            .map(easingFunction)
            .map(amountFromTo(topRange));

        this.overlayLeft$ = duration(animationDuration)
            .map(easingFunction)
            .map(amountFromTo(leftRange));

        this.clipPath$ = duration(animationDuration)
            .map(amountDirectionFunction(amount))
            .map(amt => this.path.map(w => w * amt))
            .map(getClipPathValueInset);
    }
}