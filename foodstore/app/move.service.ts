import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MoveService {

    // Observable string sources
    /*
    private mLeftAnnouncedSource = new Subject<string>();
    private mLeftConfirmedSource = new Subject<string>();
    private mRightAnnouncedSource = new Subject<string>();
    private mRightConfirmedSource = new Subject<string>();
    */

    private moveAnnouncedSource = new Subject<string>();
    private moveConfirmedSource = new Subject<string>();

    // Observable string streams
    /*
    public mLeftAnnounced$ = this.mLeftAnnouncedSource.asObservable();
    public mLeftConfirmed$ = this.mLeftConfirmedSource.asObservable();
    public mRightAnnounced$ = this.mRightAnnouncedSource.asObservable();
    public mRightConfirmed$ = this.mRightConfirmedSource.asObservable();
    */

    public moveAnnounced$ = this.moveAnnouncedSource.asObservable();
    public moveConfirmed$ = this.moveConfirmedSource.asObservable();

    // Service message commands
    /*
    announceMoveLeft(move: string) {
        this.mLeftAnnouncedSource.next(move);
    }

    confirmMoveLeft(move: string) {
        this.mLeftConfirmedSource.next(move);
    }

    announceMoveRight(move: string) {
        this.mRightAnnouncedSource.next(move);
    }

    confirmMoveRight(move: string) {
        this.mRightConfirmedSource.next(move);
    }
    */


    announceMove(direction: string) {
        this.moveAnnouncedSource.next(direction);
    }

    confirmMove(direction: string) {
        this.moveConfirmedSource.next(direction);
    }
}