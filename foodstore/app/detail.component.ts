import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import * as application from 'application';
import { TextView } from 'ui/text-view';
import { Label } from "ui/label";
import { Subscription } from "rxjs/Subscription";
import { MoveService } from "./move.service";
import { GridLayout } from "ui/layouts/grid-layout";
import { convertDirectionToAnimation } from "./tile-base";
import { items } from './fake-data';
import { labelLineHeight } from "./label.helper";
import { MyItem } from "./model";


const opacityLow = 0;

@Component({
    moduleId: module.id,
    selector: 'detail',
    template: `
        <GridLayout #detailContainer [class]="detailClass" [row]="row" [col]="col" [rowSpan]="rowSpan" [colSpan]="colSpan">
            <GridLayout class="content">
                <StackLayout class="detail-stack">
                    <Label class="category" [text]="theCategory"></Label>
                    <Label class="title" [text]="theTitle"></Label>
                    <Label class="divider"></Label>
                    <Label #desc class="description" textWrap="true" (loaded)="descLoaded($event)" [text]="theDescription"></Label>
                </StackLayout>
            </GridLayout>
        </GridLayout>
    `,
    styleUrls: ['detail.component.css'],
    styles: [
        `
            .detail-container {
                opacity: ${opacityLow};
            }
            .detail-active {
                opacity: 1;
            }
        `
    ]
})

export class DetailComponent implements OnInit, OnDestroy {

    @Input('mleft') mleft: string;
    @Input('mright') mright: string;
    @Input('row') row: string;
    @Input('col') col: string;
    @Input('rowSpan') rowSpan: string;
    @Input('colSpan') colSpan: string;
    @Input('detailIndex') detailIndex: string;

    @ViewChild('detailContainer') detailContainer: ElementRef;
    @ViewChild('desc') descRef: ElementRef;

    public currentDataIndex: number;
    public item: MyItem;

    private direction: string;
    private confirmed = false;
    private announced = false;
    private subscription: Subscription;

    private get directionFromInput() {
        const m = this.direction === 'left' ? this.mleft : this.mright;
        return m;
    }

    private get isActiveTile() {
        return (this.row === '2' && this.col === '2');
    }

    private get detailClass() {
        if (this.isActiveTile)
            return 'detail-container detail-active';
        else return 'detail-container';
    }

    private get theCategory() {
        if (this.item) return this.item.category;
        else return '';
    }

    private get theTitle() {
        if (this.item) return this.item.title;
        else return '';
    }

    private get theDescription() {
        if (this.item) return this.item.description;
        else return '';
    }

    constructor(private moveService: MoveService) {
        this.subscription = moveService.moveAnnounced$.subscribe(
            direction => {
                this.direction = direction;
                this.announced = true;
                this.confirmed = false;
                this.onMove();
            });
    }

    ngOnInit() {
        this.currentDataIndex = parseInt(this.detailIndex);
        this.item = items[this.currentDataIndex];
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }


    public descLoaded(args) {
        const tvDesc = <Label>args.object;
        if (!this.item) { ///this is a hack to fix the label line spacing - a property that's coming in the next version of {N} 
            tvDesc.text = 'sd adsf adsf adsf adsf adsf adsf adsf adhsfb adkf ahdfiu ahdf akhfal kdhaku dhfjkl ahdfklj ahdfklj ahjsldkf haljkdf ajkldhfk jadhfkj ahdg afdg sfg sfghsfdg sfg sfdg sfg sdfg sdfg sfg sfdg sfdg sfg sfdg sfg sfdg sfdg fdg';
        }
        labelLineHeight(tvDesc);
    }

    private confirm() {
        this.moveService.confirmMove(this.direction);
        this.direction = '';
        this.announced = false;
        this.confirmed = true;
    }

    private getNextDataIndex(direction: string) {
        const addend = direction === 'left' ? 1 : -1;
        const nextIdxPreProc = this.currentDataIndex + addend;
        const nextCircularIndex = nextIdxPreProc - Math.floor((nextIdxPreProc - 1) / items.length) * items.length; //Accounts for negative numbers
        return nextCircularIndex % items.length;
    }

    public onMove() {
        const aniDef = convertDirectionToAnimation(this.directionFromInput, 300);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition(this.direction);

        (<GridLayout>this.detailContainer.nativeElement)
            .animate(aniDef)
            .then(() => {
                if (this.direction) {
                    const nIdx = this.getNextDataIndex(this.direction);
                    this.currentDataIndex = nIdx;
                    this.item = items[this.currentDataIndex];
                }
                this.toOriginalPosition();
                this.confirm();
            });
    }

    private getOpacityBasedOnDirectionAndPosition(direction: string) {
        if (this.isActiveTile) {
            return opacityLow;
        } else if (this.movingToActive(direction)) {
            return 1;
        }
    }

    private movingToActive(direction: string) {
        return ((this.row === '4' && this.col === '2' && direction === 'right') ||
            (this.row === '2' && this.col === '4' && direction === 'left'));
    }

    private toOriginalPosition() {
        const gl = <GridLayout>this.detailContainer.nativeElement;
        gl.style.translateX = 0;
        gl.style.translateY = 0;
        if (this.isActiveTile) {
            gl.style.opacity = 1;
        } else {
            gl.style.opacity = opacityLow;
        }
    }
}

