import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { convertDirectionToAnimation } from "./tile-base";
import { MoveService } from "./move.service";
import { Subscription } from "rxjs/Subscription";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
import { items } from './fake-data';
import { MyItem } from "./model";

const opacityLow = 0.5;

@Component({
    moduleId: module.id,
    selector: 'tile',
    template: `
        <GridLayout #thetile [class]="tileClass" [row]="row" [col]="col">
            <Image class="tile-img" [src]="imgSrc"></Image>
        </GridLayout>
    `,
    styles: [
        `
            .tile {
                background-color: white;
                width: 120;
                height: 120;
                opacity: ${opacityLow};
            }
            .tile-active {
                opacity: 1;
            }
            .tile-img {
                transform: rotate(-45);
                width: 80;
            }
        `
    ]
})

export class TileComponent implements OnInit, OnDestroy {

    @Input('mleft') mleft: string;
    @Input('mright') mright: string;
    @Input('row') row: string;
    @Input('col') col: string;
    @Input('tileIndex') tileIndex: string;

    @ViewChild('thetile') theTileRef: ElementRef;

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
        return (this.row === '1' && this.col === '1');
    }

    private get tileClass() {
        if (this.isActiveTile)
            return 'tile tile-active';
        else return 'tile';
    }

    private get imgSrc() {
        if (this.item) {
            return `~/images/${this.item.pictureSrc}`;
        }
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
        this.currentDataIndex = parseInt(this.tileIndex);
        this.item = items[this.currentDataIndex];
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
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
        const aniDef = convertDirectionToAnimation(this.directionFromInput, 150);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition(this.direction);

        (<GridLayout>this.theTileRef.nativeElement)
            .animate(aniDef)
            .then(() => {
                const nIdx = this.getNextDataIndex(this.direction);
                this.currentDataIndex = nIdx;
                this.item = items[this.currentDataIndex];
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
        return ((this.row === '2' && this.col === '1' && direction === 'right') ||
            (this.row === '1' && this.col === '2' && direction === 'left'));
    }


    private toOriginalPosition() {
        const gl = <GridLayout>this.theTileRef.nativeElement;
        gl.style.translateX = 0;
        gl.style.translateY = 0;
        if (this.isActiveTile) {
            gl.style.opacity = 1;
        } else {
            gl.style.opacity = opacityLow;
        }
    }
}