"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tile_base_1 = require("./tile-base");
var move_service_1 = require("./move.service");
var fake_data_1 = require("./fake-data");
var opacityLow = 0.5;
var TileComponent = (function () {
    function TileComponent(moveService) {
        var _this = this;
        this.moveService = moveService;
        this.tileClass = 'tile';
        this.tileText = 'text';
        this.confirmed = false;
        this.announced = false;
        this.subscription = moveService.moveAnnounced$.subscribe(function (direction) {
            _this.direction = direction;
            _this.announced = true;
            _this.confirmed = false;
            //this.onLeft();
            _this.onMove();
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
    Object.defineProperty(TileComponent.prototype, "directionFromInput", {
        get: function () {
            var m = this.direction === 'left' ? this.mleft : this.mright;
            return m;
        },
        enumerable: true,
        configurable: true
    });
    TileComponent.prototype.ngOnInit = function () {
        if (this.row === '1' && this.col === '1') {
            this.tileClass = 'tile tile-active';
        }
        if (this.tileIndex) {
            this.tileText = fake_data_1.items[parseInt(this.tileIndex)].title;
        }
        this.currentDataIndex = parseInt(this.tileIndex);
    };
    TileComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    TileComponent.prototype.confirm = function () {
        this.moveService.confirmMove(this.direction);
        this.direction = '';
        this.announced = false;
        this.confirmed = true;
    };
    TileComponent.prototype.getNextDataIndex = function (direction) {
        var addend = direction === 'left' ? 1 : -1;
        var nextIdxPreProc = this.currentDataIndex + addend;
        var nextCircularIndex = nextIdxPreProc - Math.floor((nextIdxPreProc - 1) / fake_data_1.items.length) * fake_data_1.items.length; //Accounts for negative numbers
        return nextCircularIndex % fake_data_1.items.length;
    };
    TileComponent.prototype.onMove = function () {
        var _this = this;
        var aniDef = tile_base_1.convertDirectionToAnimation(this.directionFromInput);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition(this.direction);
        this.theTileRef.nativeElement
            .animate(aniDef)
            .then(function () {
            var nIdx = _this.getNextDataIndex(_this.direction);
            _this.currentDataIndex = nIdx;
            _this.tileText = fake_data_1.items[nIdx].title;
            _this.tileIndex = _this.currentDataIndex.toString();
            _this.toOriginalPosition();
            _this.confirm();
        });
    };
    TileComponent.prototype.onLeft = function () {
        var _this = this;
        var aniDef = tile_base_1.convertDirectionToAnimation(this.mleft);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition('left');
        this.theTileRef.nativeElement
            .animate(aniDef)
            .then(function () {
            var nIdx = _this.getNextDataIndex('left');
            _this.currentDataIndex = nIdx;
            _this.tileText = fake_data_1.items[nIdx].title;
            _this.tileIndex = _this.currentDataIndex.toString();
            _this.toOriginalPosition();
            _this.confirm();
        });
    };
    TileComponent.prototype.onRight = function () {
        var _this = this;
        var aniDef = tile_base_1.convertDirectionToAnimation(this.mright);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition('right');
        this.theTileRef.nativeElement
            .animate(aniDef)
            .then(function () {
            var nIdx = _this.getNextDataIndex('right');
            _this.currentDataIndex = nIdx;
            _this.tileText = fake_data_1.items[nIdx].title;
            _this.tileIndex = _this.currentDataIndex.toString();
            _this.toOriginalPosition();
            _this.confirm();
        });
    };
    TileComponent.prototype.getOpacityBasedOnDirectionAndPosition = function (direction) {
        if (this.movingToInactive()) {
            return opacityLow;
        }
        else if (this.movingToActive(direction)) {
            return 1;
        }
    };
    TileComponent.prototype.movingToActive = function (direction) {
        return ((this.row === '2' && this.col === '1' && direction === 'right') ||
            (this.row === '1' && this.col === '2' && direction === 'left'));
    };
    TileComponent.prototype.movingToInactive = function () {
        return this.row === '1' && this.col === '1';
    };
    TileComponent.prototype.toOriginalPosition = function () {
        var gl = this.theTileRef.nativeElement;
        gl.style.translateX = 0;
        gl.style.translateY = 0;
        if (this.row === '1' && this.col === '1') {
            gl.style.opacity = 1;
        }
        else {
            gl.style.opacity = opacityLow;
        }
    };
    return TileComponent;
}());
__decorate([
    core_1.Input('mleft'),
    __metadata("design:type", String)
], TileComponent.prototype, "mleft", void 0);
__decorate([
    core_1.Input('mright'),
    __metadata("design:type", String)
], TileComponent.prototype, "mright", void 0);
__decorate([
    core_1.Input('row'),
    __metadata("design:type", String)
], TileComponent.prototype, "row", void 0);
__decorate([
    core_1.Input('col'),
    __metadata("design:type", String)
], TileComponent.prototype, "col", void 0);
__decorate([
    core_1.Input('tileIndex'),
    __metadata("design:type", String)
], TileComponent.prototype, "tileIndex", void 0);
__decorate([
    core_1.ViewChild('thetile'),
    __metadata("design:type", core_1.ElementRef)
], TileComponent.prototype, "theTileRef", void 0);
TileComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'tile',
        template: "\n        <GridLayout #thetile [class]=\"tileClass\">\n            <StackLayout>\n                <Label class=\"tile-idx\" [text]=\"tileIndex\"></Label>\n                <Label class=\"tile-text\" [text]=\"tileText\"></Label>\n            </StackLayout>\n        </GridLayout>\n    ",
        styles: [
            "\n            .tile {\n                background-color: white;\n                width: 120;\n                height: 120;\n                opacity: " + opacityLow + ";\n            }\n            .tile-active {\n                opacity: 1;\n            }\n            .tile-idx {\n                font-size: 50;\n                transform: rotate(-45);\n            }\n            .tile-text {\n                font-size: 25;\n                transform: rotate(-45);\n                margin-left: 20;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [move_service_1.MoveService])
], TileComponent);
exports.TileComponent = TileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRjtBQUMzRix5Q0FBMEQ7QUFDMUQsK0NBQTZDO0FBTTdDLHlDQUFvQztBQUVwQyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFxQ3ZCLElBQWEsYUFBYTtJQXlCdEIsdUJBQW9CLFdBQXdCO1FBQTVDLGlCQW1CQztRQW5CbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFmckMsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBS2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUNwRCxVQUFBLFNBQVM7WUFDTCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixnQkFBZ0I7WUFDaEIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBRVA7Ozs7Ozs7O1VBUUU7SUFDTixDQUFDO0lBeEJELHNCQUFZLDZDQUFrQjthQUE5QjtZQUNJLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvRCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2IsQ0FBQzs7O09BQUE7SUF1QkQsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENB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QixZQUFLLENBQUMsUUFBUSxDQUFDOzs2Q0FBZ0I7QUFDbEI7SUFBYixZQUFLLENBQUMsS0FBSyxDQUFDOzswQ0FBYTtBQUNaO0lBQWIsWUFBSyxDQUFDLEtBQUssQ0FBQzs7MENBQWE7QUFDTjtJQUFuQixZQUFLLENBQUMsV0FBVyxDQUFDOztnREFBbUI7QUFFaEI7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQWEsaUJBQVU7aURBQUM7QUFScEMsYUFBYTtJQW5DekIsZ0JBQVMsQ0FBQztRQUNQLHNCQUFzQjtRQUN0QixRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsNlJBT1Q7UUFDRCxNQUFNLEVBQUU7WUFDSiwwSkFLbUIsVUFBVSw0V0FjNUI7U0FDSjtLQUNKLENBQUM7cUNBMkJtQywwQkFBVztHQXpCbkMsYUFBYSxDQTJKekI7QUEzSlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb252ZXJ0RGlyZWN0aW9uVG9BbmltYXRpb24gfSBmcm9tIFwiLi90aWxlLWJhc2VcIjtcbmltcG9ydCB7IE1vdmVTZXJ2aWNlIH0gZnJvbSBcIi4vbW92ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hbmltYXRpb25cIjtcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi9mYWtlLWRhdGEnO1xuXG5jb25zdCBvcGFjaXR5TG93ID0gMC41O1xuXG5AQ29tcG9uZW50KHtcbiAgICAvL21vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd0aWxlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8R3JpZExheW91dCAjdGhldGlsZSBbY2xhc3NdPVwidGlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwidGlsZS1pZHhcIiBbdGV4dF09XCJ0aWxlSW5kZXhcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInRpbGUtdGV4dFwiIFt0ZXh0XT1cInRpbGVUZXh0XCI+PC9MYWJlbD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgICAgICAudGlsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAke29wYWNpdHlMb3d9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbGUtYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbGUtaWR4IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGlsZS10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICBgXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFRpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoJ21sZWZ0JykgbWxlZnQ6IHN0cmluZztcbiAgICBASW5wdXQoJ21yaWdodCcpIG1yaWdodDogc3RyaW5nO1xuICAgIEBJbnB1dCgncm93Jykgcm93OiBzdHJpbmc7XG4gICAgQElucHV0KCdjb2wnKSBjb2w6IHN0cmluZztcbiAgICBASW5wdXQoJ3RpbGVJbmRleCcpIHRpbGVJbmRleDogc3RyaW5nO1xuXG4gICAgQFZpZXdDaGlsZCgndGhldGlsZScpIHRoZVRpbGVSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgdGlsZUNsYXNzID0gJ3RpbGUnO1xuICAgIHB1YmxpYyB0aWxlVGV4dCA9ICd0ZXh0JztcblxuICAgIHB1YmxpYyBjdXJyZW50RGF0YUluZGV4OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGRpcmVjdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgY29uZmlybWVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhbm5vdW5jZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHJpdmF0ZSBnZXQgZGlyZWN0aW9uRnJvbUlucHV0KCkge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubWxlZnQgOiB0aGlzLm1yaWdodDtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3ZlU2VydmljZTogTW92ZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3ZlU2VydmljZS5tb3ZlQW5ub3VuY2VkJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5ub3VuY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5vbkxlZnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLypcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG1vdmVTZXJ2aWNlLm1SaWdodEFubm91bmNlZCQuc3Vic2NyaWJlKFxuICAgICAgICBtb3ZlID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZSA9IG1vdmU7XG4gICAgICAgICAgICB0aGlzLmFubm91bmNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vblJpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAqL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5yb3cgPT09ICcxJyAmJiB0aGlzLmNvbCA9PT0gJzEnKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVDbGFzcyA9ICd0aWxlIHRpbGUtYWN0aXZlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRpbGVJbmRleCkge1xuICAgICAgICAgICAgdGhpcy50aWxlVGV4dCA9IGl0ZW1zW3BhcnNlSW50KHRoaXMudGlsZUluZGV4KV0udGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnREYXRhSW5kZXggPSBwYXJzZUludCh0aGlzLnRpbGVJbmRleCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlU2VydmljZS5jb25maXJtTW92ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYW5ub3VuY2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE5leHREYXRhSW5kZXgoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYWRkZW5kID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAxIDogLTE7XG4gICAgICAgIGNvbnN0IG5leHRJZHhQcmVQcm9jID0gdGhpcy5jdXJyZW50RGF0YUluZGV4ICsgYWRkZW5kO1xuICAgICAgICBjb25zdCBuZXh0Q2lyY3VsYXJJbmRleCA9IG5leHRJZHhQcmVQcm9jIC0gTWF0aC5mbG9vcigobmV4dElkeFByZVByb2MgLSAxKSAvIGl0ZW1zLmxlbmd0aCkgKiBpdGVtcy5sZW5ndGg7IC8vQWNjb3VudHMgZm9yIG5lZ2F0aXZlIG51bWJlcnNcbiAgICAgICAgcmV0dXJuIG5leHRDaXJjdWxhckluZGV4ICUgaXRlbXMubGVuZ3RoO1xuICAgIH1cblxuXG4gICAgcHVibGljIG9uTW92ZSgpIHtcbiAgICAgICAgY29uc3QgYW5pRGVmID0gY29udmVydERpcmVjdGlvblRvQW5pbWF0aW9uKHRoaXMuZGlyZWN0aW9uRnJvbUlucHV0KTtcbiAgICAgICAgYW5pRGVmLm9wYWNpdHkgPSB0aGlzLmdldE9wYWNpdHlCYXNlZE9uRGlyZWN0aW9uQW5kUG9zaXRpb24odGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgICAgICg8R3JpZExheW91dD50aGlzLnRoZVRpbGVSZWYubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5hbmltYXRlKGFuaURlZilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuSWR4ID0gdGhpcy5nZXROZXh0RGF0YUluZGV4KHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhSW5kZXggPSBuSWR4O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZVRleHQgPSBpdGVtc1tuSWR4XS50aXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVJbmRleCA9IHRoaXMuY3VycmVudERhdGFJbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9PcmlnaW5hbFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWZ0KCkge1xuICAgICAgICBjb25zdCBhbmlEZWYgPSBjb252ZXJ0RGlyZWN0aW9uVG9BbmltYXRpb24odGhpcy5tbGVmdCk7XG4gICAgICAgIGFuaURlZi5vcGFjaXR5ID0gdGhpcy5nZXRPcGFjaXR5QmFzZWRPbkRpcmVjdGlvbkFuZFBvc2l0aW9uKCdsZWZ0Jyk7XG5cbiAgICAgICAgKDxHcmlkTGF5b3V0PnRoaXMudGhlVGlsZVJlZi5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLmFuaW1hdGUoYW5pRGVmKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5JZHggPSB0aGlzLmdldE5leHREYXRhSW5kZXgoJ2xlZnQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRhSW5kZXggPSBuSWR4O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZVRleHQgPSBpdGVtc1tuSWR4XS50aXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVJbmRleCA9IHRoaXMuY3VycmVudERhdGFJbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudG9PcmlnaW5hbFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SaWdodCgpIHtcbiAgICAgICAgY29uc3QgYW5pRGVmID0gY29udmVydERpcmVjdGlvblRvQW5pbWF0aW9uKHRoaXMubXJpZ2h0KTtcbiAgICAgICAgYW5pRGVmLm9wYWNpdHkgPSB0aGlzLmdldE9wYWNpdHlCYXNlZE9uRGlyZWN0aW9uQW5kUG9zaXRpb24oJ3JpZ2h0Jyk7XG5cbiAgICAgICAgKDxHcmlkTGF5b3V0PnRoaXMudGhlVGlsZVJlZi5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLmFuaW1hdGUoYW5pRGVmKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5JZHggPSB0aGlzLmdldE5leHREYXRhSW5kZXgoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0YUluZGV4ID0gbklkeDtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVUZXh0ID0gaXRlbXNbbklkeF0udGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlSW5kZXggPSB0aGlzLmN1cnJlbnREYXRhSW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvT3JpZ2luYWxQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldE9wYWNpdHlCYXNlZE9uRGlyZWN0aW9uQW5kUG9zaXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubW92aW5nVG9JbmFjdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eUxvdztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZ1RvQWN0aXZlKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZpbmdUb0FjdGl2ZShkaXJlY3Rpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKCh0aGlzLnJvdyA9PT0gJzInICYmIHRoaXMuY29sID09PSAnMScgJiYgZGlyZWN0aW9uID09PSAncmlnaHQnKSB8fFxuICAgICAgICAgICAgKHRoaXMucm93ID09PSAnMScgJiYgdGhpcy5jb2wgPT09ICcyJyAmJiBkaXJlY3Rpb24gPT09ICdsZWZ0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92aW5nVG9JbmFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93ID09PSAnMScgJiYgdGhpcy5jb2wgPT09ICcxJztcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvT3JpZ2luYWxQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgZ2wgPSA8R3JpZExheW91dD50aGlzLnRoZVRpbGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgZ2wuc3R5bGUudHJhbnNsYXRlWCA9IDA7XG4gICAgICAgIGdsLnN0eWxlLnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICBpZiAodGhpcy5yb3cgPT09ICcxJyAmJiB0aGlzLmNvbCA9PT0gJzEnKSB7XG4gICAgICAgICAgICBnbC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5TG93O1xuICAgICAgICB9XG4gICAgfVxuXG59Il19