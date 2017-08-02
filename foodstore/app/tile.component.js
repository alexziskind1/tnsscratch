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
        this.confirmed = false;
        this.announced = false;
        this.subscription = moveService.moveAnnounced$.subscribe(function (direction) {
            _this.direction = direction;
            _this.announced = true;
            _this.confirmed = false;
            _this.onMove();
        });
    }
    Object.defineProperty(TileComponent.prototype, "directionFromInput", {
        get: function () {
            var m = this.direction === 'left' ? this.mleft : this.mright;
            return m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileComponent.prototype, "isActiveTile", {
        get: function () {
            return (this.row === '1' && this.col === '1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileComponent.prototype, "tileClass", {
        get: function () {
            if (this.isActiveTile)
                return 'tile tile-active';
            else
                return 'tile';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileComponent.prototype, "imgSrc", {
        get: function () {
            if (this.item) {
                return "~/images/" + this.item.pictureSrc;
            }
        },
        enumerable: true,
        configurable: true
    });
    TileComponent.prototype.ngOnInit = function () {
        this.currentDataIndex = parseInt(this.tileIndex);
        this.item = fake_data_1.items[this.currentDataIndex];
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
        var aniDef = tile_base_1.convertDirectionToAnimation(this.directionFromInput, 150);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition(this.direction);
        this.theTileRef.nativeElement
            .animate(aniDef)
            .then(function () {
            var nIdx = _this.getNextDataIndex(_this.direction);
            _this.currentDataIndex = nIdx;
            _this.item = fake_data_1.items[_this.currentDataIndex];
            _this.toOriginalPosition();
            _this.confirm();
        });
    };
    TileComponent.prototype.getOpacityBasedOnDirectionAndPosition = function (direction) {
        if (this.isActiveTile) {
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
    TileComponent.prototype.toOriginalPosition = function () {
        var gl = this.theTileRef.nativeElement;
        gl.style.translateX = 0;
        gl.style.translateY = 0;
        if (this.isActiveTile) {
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
        moduleId: module.id,
        selector: 'tile',
        template: "\n        <GridLayout #thetile [class]=\"tileClass\" [row]=\"row\" [col]=\"col\">\n            <Image class=\"tile-img\" [src]=\"imgSrc\"></Image>\n        </GridLayout>\n    ",
        styles: [
            "\n            .tile {\n                background-color: white;\n                width: 120;\n                height: 120;\n                opacity: " + opacityLow + ";\n            }\n            .tile-active {\n                opacity: 1;\n            }\n            .tile-img {\n                transform: rotate(-45);\n                width: 80;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [move_service_1.MoveService])
], TileComponent);
exports.TileComponent = TileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRjtBQUMzRix5Q0FBMEQ7QUFDMUQsK0NBQTZDO0FBTTdDLHlDQUFvQztBQUdwQyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUE2QnZCLElBQWEsYUFBYTtJQXVDdEIsdUJBQW9CLFdBQXdCO1FBQTVDLGlCQVFDO1FBUm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBekJwQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUF5QnRCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQ3BELFVBQUEsU0FBUztZQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3QkQsc0JBQVksNkNBQWtCO2FBQTlCO1lBQ0ksSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDOzs7T0FBQTtJQUVELHNCQUFZLHVDQUFZO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLG9DQUFTO2FBQXJCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlB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QUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLGlMQUlUO1FBQ0QsTUFBTSxFQUFFO1lBQ0osMEpBS21CLFVBQVUsb05BUzVCO1NBQ0o7S0FDSixDQUFDO3FDQXlDbUMsMEJBQVc7R0F2Q25DLGFBQWEsQ0FpSHpCO0FBakhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29udmVydERpcmVjdGlvblRvQW5pbWF0aW9uIH0gZnJvbSBcIi4vdGlsZS1iYXNlXCI7XG5pbXBvcnQgeyBNb3ZlU2VydmljZSB9IGZyb20gXCIuL21vdmUuc2VydmljZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBHcmlkTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4vZmFrZS1kYXRhJztcbmltcG9ydCB7IE15SXRlbSB9IGZyb20gXCIuL21vZGVsXCI7XG5cbmNvbnN0IG9wYWNpdHlMb3cgPSAwLjU7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd0aWxlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8R3JpZExheW91dCAjdGhldGlsZSBbY2xhc3NdPVwidGlsZUNsYXNzXCIgW3Jvd109XCJyb3dcIiBbY29sXT1cImNvbFwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzPVwidGlsZS1pbWdcIiBbc3JjXT1cImltZ1NyY1wiPjwvSW1hZ2U+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgICAgICAudGlsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAke29wYWNpdHlMb3d9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbGUtYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpbGUtaW1nIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCdtbGVmdCcpIG1sZWZ0OiBzdHJpbmc7XG4gICAgQElucHV0KCdtcmlnaHQnKSBtcmlnaHQ6IHN0cmluZztcbiAgICBASW5wdXQoJ3JvdycpIHJvdzogc3RyaW5nO1xuICAgIEBJbnB1dCgnY29sJykgY29sOiBzdHJpbmc7XG4gICAgQElucHV0KCd0aWxlSW5kZXgnKSB0aWxlSW5kZXg6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ3RoZXRpbGUnKSB0aGVUaWxlUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGN1cnJlbnREYXRhSW5kZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgaXRlbTogTXlJdGVtO1xuXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IHN0cmluZztcbiAgICBwcml2YXRlIGNvbmZpcm1lZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgYW5ub3VuY2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIHByaXZhdGUgZ2V0IGRpcmVjdGlvbkZyb21JbnB1dCgpIHtcbiAgICAgICAgY29uc3QgbSA9IHRoaXMuZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLm1sZWZ0IDogdGhpcy5tcmlnaHQ7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGlzQWN0aXZlVGlsZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnJvdyA9PT0gJzEnICYmIHRoaXMuY29sID09PSAnMScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHRpbGVDbGFzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVUaWxlKVxuICAgICAgICAgICAgcmV0dXJuICd0aWxlIHRpbGUtYWN0aXZlJztcbiAgICAgICAgZWxzZSByZXR1cm4gJ3RpbGUnO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGltZ1NyYygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGB+L2ltYWdlcy8ke3RoaXMuaXRlbS5waWN0dXJlU3JjfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vdmVTZXJ2aWNlOiBNb3ZlU2VydmljZSkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG1vdmVTZXJ2aWNlLm1vdmVBbm5vdW5jZWQkLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5hbm5vdW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhSW5kZXggPSBwYXJzZUludCh0aGlzLnRpbGVJbmRleCk7XG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW1zW3RoaXMuY3VycmVudERhdGFJbmRleF07XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25maXJtKCkge1xuICAgICAgICB0aGlzLm1vdmVTZXJ2aWNlLmNvbmZpcm1Nb3ZlKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5hbm5vdW5jZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25maXJtZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TmV4dERhdGFJbmRleChkaXJlY3Rpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBhZGRlbmQgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgbmV4dElkeFByZVByb2MgPSB0aGlzLmN1cnJlbnREYXRhSW5kZXggKyBhZGRlbmQ7XG4gICAgICAgIGNvbnN0IG5leHRDaXJjdWxhckluZGV4ID0gbmV4dElkeFByZVByb2MgLSBNYXRoLmZsb29yKChuZXh0SWR4UHJlUHJvYyAtIDEpIC8gaXRlbXMubGVuZ3RoKSAqIGl0ZW1zLmxlbmd0aDsgLy9BY2NvdW50cyBmb3IgbmVnYXRpdmUgbnVtYmVyc1xuICAgICAgICByZXR1cm4gbmV4dENpcmN1bGFySW5kZXggJSBpdGVtcy5sZW5ndGg7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25Nb3ZlKCkge1xuICAgICAgICBjb25zdCBhbmlEZWYgPSBjb252ZXJ0RGlyZWN0aW9uVG9BbmltYXRpb24odGhpcy5kaXJlY3Rpb25Gcm9tSW5wdXQsIDE1MCk7XG4gICAgICAgIGFuaURlZi5vcGFjaXR5ID0gdGhpcy5nZXRPcGFjaXR5QmFzZWRPbkRpcmVjdGlvbkFuZFBvc2l0aW9uKHRoaXMuZGlyZWN0aW9uKTtcblxuICAgICAgICAoPEdyaWRMYXlvdXQ+dGhpcy50aGVUaWxlUmVmLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICAuYW5pbWF0ZShhbmlEZWYpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbklkeCA9IHRoaXMuZ2V0TmV4dERhdGFJbmRleCh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0YUluZGV4ID0gbklkeDtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBpdGVtc1t0aGlzLmN1cnJlbnREYXRhSW5kZXhdO1xuICAgICAgICAgICAgICAgIHRoaXMudG9PcmlnaW5hbFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE9wYWNpdHlCYXNlZE9uRGlyZWN0aW9uQW5kUG9zaXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVUaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eUxvdztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZ1RvQWN0aXZlKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZpbmdUb0FjdGl2ZShkaXJlY3Rpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKCh0aGlzLnJvdyA9PT0gJzInICYmIHRoaXMuY29sID09PSAnMScgJiYgZGlyZWN0aW9uID09PSAncmlnaHQnKSB8fFxuICAgICAgICAgICAgKHRoaXMucm93ID09PSAnMScgJiYgdGhpcy5jb2wgPT09ICcyJyAmJiBkaXJlY3Rpb24gPT09ICdsZWZ0JykpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0b09yaWdpbmFsUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGdsID0gPEdyaWRMYXlvdXQ+dGhpcy50aGVUaWxlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGdsLnN0eWxlLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICBnbC5zdHlsZS50cmFuc2xhdGVZID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVUaWxlKSB7XG4gICAgICAgICAgICBnbC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5TG93O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==