"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var MoveService = (function () {
    function MoveService() {
        // Observable string sources
        /*
        private mLeftAnnouncedSource = new Subject<string>();
        private mLeftConfirmedSource = new Subject<string>();
        private mRightAnnouncedSource = new Subject<string>();
        private mRightConfirmedSource = new Subject<string>();
        */
        this.moveAnnouncedSource = new Subject_1.Subject();
        this.moveConfirmedSource = new Subject_1.Subject();
        // Observable string streams
        /*
        public mLeftAnnounced$ = this.mLeftAnnouncedSource.asObservable();
        public mLeftConfirmed$ = this.mLeftConfirmedSource.asObservable();
        public mRightAnnounced$ = this.mRightAnnouncedSource.asObservable();
        public mRightConfirmed$ = this.mRightConfirmedSource.asObservable();
        */
        this.moveAnnounced$ = this.moveAnnouncedSource.asObservable();
        this.moveConfirmed$ = this.moveConfirmedSource.asObservable();
    }
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
    MoveService.prototype.announceMove = function (direction) {
        this.moveAnnouncedSource.next(direction);
    };
    MoveService.prototype.confirmMove = function (direction) {
        this.moveConfirmedSource.next(direction);
    };
    return MoveService;
}());
MoveService = __decorate([
    core_1.Injectable()
], MoveService);
exports.MoveService = MoveService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW92ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHdDQUF1QztBQUd2QyxJQUFhLFdBQVc7SUFEeEI7UUFHSSw0QkFBNEI7UUFDNUI7Ozs7O1VBS0U7UUFFTSx3QkFBbUIsR0FBRyxJQUFJLGlCQUFPLEVBQVUsQ0FBQztRQUM1Qyx3QkFBbUIsR0FBRyxJQUFJLGlCQUFPLEVBQVUsQ0FBQztRQUVwRCw0QkFBNEI7UUFDNUI7Ozs7O1VBS0U7UUFFSyxtQkFBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6RCxtQkFBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQTZCcEUsQ0FBQztJQTNCRywyQkFBMkI7SUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQkU7SUFHRixrQ0FBWSxHQUFaLFVBQWEsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLFNBQWlCO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQztBQW5EWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBbUR2QjtBQW5EWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW92ZVNlcnZpY2Uge1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xuICAgIC8qXG4gICAgcHJpdmF0ZSBtTGVmdEFubm91bmNlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICBwcml2YXRlIG1MZWZ0Q29uZmlybWVkU291cmNlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgbVJpZ2h0QW5ub3VuY2VkU291cmNlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgbVJpZ2h0Q29uZmlybWVkU291cmNlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgICovXG5cbiAgICBwcml2YXRlIG1vdmVBbm5vdW5jZWRTb3VyY2UgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgcHJpdmF0ZSBtb3ZlQ29uZmlybWVkU291cmNlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xuICAgIC8qXG4gICAgcHVibGljIG1MZWZ0QW5ub3VuY2VkJCA9IHRoaXMubUxlZnRBbm5vdW5jZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHVibGljIG1MZWZ0Q29uZmlybWVkJCA9IHRoaXMubUxlZnRDb25maXJtZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHVibGljIG1SaWdodEFubm91bmNlZCQgPSB0aGlzLm1SaWdodEFubm91bmNlZFNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICBwdWJsaWMgbVJpZ2h0Q29uZmlybWVkJCA9IHRoaXMubVJpZ2h0Q29uZmlybWVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICovXG5cbiAgICBwdWJsaWMgbW92ZUFubm91bmNlZCQgPSB0aGlzLm1vdmVBbm5vdW5jZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHVibGljIG1vdmVDb25maXJtZWQkID0gdGhpcy5tb3ZlQ29uZmlybWVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXG4gICAgLypcbiAgICBhbm5vdW5jZU1vdmVMZWZ0KG1vdmU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1MZWZ0QW5ub3VuY2VkU291cmNlLm5leHQobW92ZSk7XG4gICAgfVxuXG4gICAgY29uZmlybU1vdmVMZWZ0KG1vdmU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1MZWZ0Q29uZmlybWVkU291cmNlLm5leHQobW92ZSk7XG4gICAgfVxuXG4gICAgYW5ub3VuY2VNb3ZlUmlnaHQobW92ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubVJpZ2h0QW5ub3VuY2VkU291cmNlLm5leHQobW92ZSk7XG4gICAgfVxuXG4gICAgY29uZmlybU1vdmVSaWdodChtb3ZlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tUmlnaHRDb25maXJtZWRTb3VyY2UubmV4dChtb3ZlKTtcbiAgICB9XG4gICAgKi9cblxuXG4gICAgYW5ub3VuY2VNb3ZlKGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW92ZUFubm91bmNlZFNvdXJjZS5uZXh0KGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgY29uZmlybU1vdmUoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tb3ZlQ29uZmlybWVkU291cmNlLm5leHQoZGlyZWN0aW9uKTtcbiAgICB9XG59Il19