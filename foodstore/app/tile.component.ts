import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { convertDirectionToAnimation } from "./tile-base";
import { MoveService } from "./move.service";
import { Subscription } from "rxjs/Subscription";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
import { items } from './fake-data';

const opacityLow = 0.5;

@Component({
    //moduleId: module.id,
    selector: 'tile',
    template: `
        <GridLayout #thetile [class]="tileClass">
            <StackLayout>
                <Label class="tile-idx" [text]="tileIndex"></Label>
                <Label class="tile-text" [text]="tileText"></Label>
            </StackLayout>
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
            .tile-idx {
                font-size: 50;
                transform: rotate(-45);
            }
            .tile-text {
                font-size: 25;
                transform: rotate(-45);
                margin-left: 20;
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

    public tileClass = 'tile';
    public tileText = 'text';

    public currentDataIndex: number;

    private direction: string;
    private confirmed = false;
    private announced = false;
    private subscription: Subscription;

    private get directionFromInput() {
        const m = this.direction === 'left' ? this.mleft : this.mright;
        return m;
    }

    constructor(private moveService: MoveService) {
        this.subscription = moveService.moveAnnounced$.subscribe(
            direction => {
                this.direction = direction;
                this.announced = true;
                this.confirmed = false;
                //this.onLeft();
                this.onMove();
            });

        /*
    this.subscription = moveService.mRightAnnounced$.subscribe(
        move => {
            this.move = move;
            this.announced = true;
            this.confirmed = false;
            this.onRight();
        });
        */
    }

    ngOnInit() {
        if (this.row === '1' && this.col === '1') {
            this.tileClass = 'tile tile-active';
        }

        if (this.tileIndex) {
            this.tileText = items[parseInt(this.tileIndex)].title;
        }

        this.currentDataIndex = parseInt(this.tileIndex);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }

    confirm() {
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
        const aniDef = convertDirectionToAnimation(this.directionFromInput);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition(this.direction);

        (<GridLayout>this.theTileRef.nativeElement)
            .animate(aniDef)
            .then(() => {
                const nIdx = this.getNextDataIndex(this.direction);
                this.currentDataIndex = nIdx;
                this.tileText = items[nIdx].title;
                this.tileIndex = this.currentDataIndex.toString();
                this.toOriginalPosition();
                this.confirm();
            });
    }

    public onLeft() {
        const aniDef = convertDirectionToAnimation(this.mleft);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition('left');

        (<GridLayout>this.theTileRef.nativeElement)
            .animate(aniDef)
            .then(() => {
                const nIdx = this.getNextDataIndex('left');
                this.currentDataIndex = nIdx;
                this.tileText = items[nIdx].title;
                this.tileIndex = this.currentDataIndex.toString();
                this.toOriginalPosition();
                this.confirm();
            });
    }

    public onRight() {
        const aniDef = convertDirectionToAnimation(this.mright);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition('right');

        (<GridLayout>this.theTileRef.nativeElement)
            .animate(aniDef)
            .then(() => {
                const nIdx = this.getNextDataIndex('right');
                this.currentDataIndex = nIdx;
                this.tileText = items[nIdx].title;
                this.tileIndex = this.currentDataIndex.toString();
                this.toOriginalPosition();
                this.confirm();
            });
    }


    private getOpacityBasedOnDirectionAndPosition(direction: string) {
        if (this.movingToInactive()) {
            return opacityLow;
        } else if (this.movingToActive(direction)) {
            return 1;
        }
    }

    private movingToActive(direction: string) {
        return ((this.row === '2' && this.col === '1' && direction === 'right') ||
            (this.row === '1' && this.col === '2' && direction === 'left'));
    }

    private movingToInactive() {
        return this.row === '1' && this.col === '1';
    }

    private toOriginalPosition() {
        const gl = <GridLayout>this.theTileRef.nativeElement;
        gl.style.translateX = 0;
        gl.style.translateY = 0;
        if (this.row === '1' && this.col === '1') {
            gl.style.opacity = 1;
        } else {
            gl.style.opacity = opacityLow;
        }
    }

}