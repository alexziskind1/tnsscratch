"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var move_service_1 = require("./move.service");
var tile_base_1 = require("./tile-base");
var fake_data_1 = require("./fake-data");
var label_helper_1 = require("./label.helper");
var opacityLow = 0;
var DetailComponent = (function () {
    function DetailComponent(moveService) {
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
    Object.defineProperty(DetailComponent.prototype, "directionFromInput", {
        get: function () {
            var m = this.direction === 'left' ? this.mleft : this.mright;
            return m;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailComponent.prototype, "isActiveTile", {
        get: function () {
            return (this.row === '2' && this.col === '2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailComponent.prototype, "detailClass", {
        get: function () {
            if (this.isActiveTile)
                return 'detail-container detail-active';
            else
                return 'detail-container';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailComponent.prototype, "theCategory", {
        get: function () {
            if (this.item)
                return this.item.category;
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailComponent.prototype, "theTitle", {
        get: function () {
            if (this.item)
                return this.item.title;
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailComponent.prototype, "theDescription", {
        get: function () {
            if (this.item)
                return this.item.description;
            else
                return '';
        },
        enumerable: true,
        configurable: true
    });
    DetailComponent.prototype.ngOnInit = function () {
        this.currentDataIndex = parseInt(this.detailIndex);
        this.item = fake_data_1.items[this.currentDataIndex];
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    DetailComponent.prototype.descLoaded = function (args) {
        var tvDesc = args.object;
        if (!this.item) {
            tvDesc.text = 'sd adsf adsf adsf adsf adsf adsf adsf adhsfb adkf ahdfiu ahdf akhfal kdhaku dhfjkl ahdfklj ahdfklj ahjsldkf haljkdf ajkldhfk jadhfkj ahdg afdg sfg sfghsfdg sfg sfdg sfg sdfg sdfg sfg sfdg sfdg sfg sfdg sfg sfdg sfdg fdg';
        }
        label_helper_1.labelLineHeight(tvDesc);
    };
    DetailComponent.prototype.confirm = function () {
        this.moveService.confirmMove(this.direction);
        this.direction = '';
        this.announced = false;
        this.confirmed = true;
    };
    DetailComponent.prototype.getNextDataIndex = function (direction) {
        var addend = direction === 'left' ? 1 : -1;
        var nextIdxPreProc = this.currentDataIndex + addend;
        var nextCircularIndex = nextIdxPreProc - Math.floor((nextIdxPreProc - 1) / fake_data_1.items.length) * fake_data_1.items.length; //Accounts for negative numbers
        return nextCircularIndex % fake_data_1.items.length;
    };
    DetailComponent.prototype.onMove = function () {
        var _this = this;
        var aniDef = tile_base_1.convertDirectionToAnimation(this.directionFromInput, 300);
        aniDef.opacity = this.getOpacityBasedOnDirectionAndPosition(this.direction);
        this.detailContainer.nativeElement
            .animate(aniDef)
            .then(function () {
            if (_this.direction) {
                var nIdx = _this.getNextDataIndex(_this.direction);
                _this.currentDataIndex = nIdx;
                _this.item = fake_data_1.items[_this.currentDataIndex];
            }
            _this.toOriginalPosition();
            _this.confirm();
        });
    };
    DetailComponent.prototype.getOpacityBasedOnDirectionAndPosition = function (direction) {
        if (this.isActiveTile) {
            return opacityLow;
        }
        else if (this.movingToActive(direction)) {
            return 1;
        }
    };
    DetailComponent.prototype.movingToActive = function (direction) {
        return ((this.row === '4' && this.col === '2' && direction === 'right') ||
            (this.row === '2' && this.col === '4' && direction === 'left'));
    };
    DetailComponent.prototype.toOriginalPosition = function () {
        var gl = this.detailContainer.nativeElement;
        gl.style.translateX = 0;
        gl.style.translateY = 0;
        if (this.isActiveTile) {
            gl.style.opacity = 1;
        }
        else {
            gl.style.opacity = opacityLow;
        }
    };
    return DetailComponent;
}());
__decorate([
    core_1.Input('mleft'),
    __metadata("design:type", String)
], DetailComponent.prototype, "mleft", void 0);
__decorate([
    core_1.Input('mright'),
    __metadata("design:type", String)
], DetailComponent.prototype, "mright", void 0);
__decorate([
    core_1.Input('row'),
    __metadata("design:type", String)
], DetailComponent.prototype, "row", void 0);
__decorate([
    core_1.Input('col'),
    __metadata("design:type", String)
], DetailComponent.prototype, "col", void 0);
__decorate([
    core_1.Input('rowSpan'),
    __metadata("design:type", String)
], DetailComponent.prototype, "rowSpan", void 0);
__decorate([
    core_1.Input('colSpan'),
    __metadata("design:type", String)
], DetailComponent.prototype, "colSpan", void 0);
__decorate([
    core_1.Input('detailIndex'),
    __metadata("design:type", String)
], DetailComponent.prototype, "detailIndex", void 0);
__decorate([
    core_1.ViewChild('detailContainer'),
    __metadata("design:type", core_1.ElementRef)
], DetailComponent.prototype, "detailContainer", void 0);
__decorate([
    core_1.ViewChild('desc'),
    __metadata("design:type", core_1.ElementRef)
], DetailComponent.prototype, "descRef", void 0);
DetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'detail',
        template: "\n        <GridLayout #detailContainer [class]=\"detailClass\" [row]=\"row\" [col]=\"col\" [rowSpan]=\"rowSpan\" [colSpan]=\"colSpan\">\n            <GridLayout class=\"content\">\n                <StackLayout class=\"detail-stack\">\n                    <Label class=\"category\" [text]=\"theCategory\"></Label>\n                    <Label class=\"title\" [text]=\"theTitle\"></Label>\n                    <Label class=\"divider\"></Label>\n                    <Label #desc class=\"description\" textWrap=\"true\" (loaded)=\"descLoaded($event)\" [text]=\"theDescription\"></Label>\n                </StackLayout>\n            </GridLayout>\n        </GridLayout>\n    ",
        styleUrls: ['detail.component.css'],
        styles: [
            "\n            .detail-container {\n                opacity: " + opacityLow + ";\n            }\n            .detail-active {\n                opacity: 1;\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [move_service_1.MoveService])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFLM0YsK0NBQTZDO0FBRTdDLHlDQUEwRDtBQUMxRCx5Q0FBb0M7QUFDcEMsK0NBQWlEO0FBSWpELElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQztBQThCckIsSUFBYSxlQUFlO0lBbUR4Qix5QkFBb0IsV0FBd0I7UUFBNUMsaUJBUUM7UUFSbUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFsQ3BDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQWtDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FDcEQsVUFBQSxTQUFTO1lBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXRDRCxzQkFBWSwrQ0FBa0I7YUFBOUI7WUFDSSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDL0QsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQVkseUNBQVk7YUFBeEI7WUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRUQsc0JBQVksd0NBQVc7YUFBdkI7WUFDSSxFQUFFLENBQUMs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QUFDO3FDQXFEbUMsMEJBQVc7R0FuRG5DLGVBQWUsQ0FzSTNCO0FBdElZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tICd1aS90ZXh0LXZpZXcnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xuaW1wb3J0IHsgTW92ZVNlcnZpY2UgfSBmcm9tIFwiLi9tb3ZlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgY29udmVydERpcmVjdGlvblRvQW5pbWF0aW9uIH0gZnJvbSBcIi4vdGlsZS1iYXNlXCI7XG5pbXBvcnQgeyBpdGVtcyB9IGZyb20gJy4vZmFrZS1kYXRhJztcbmltcG9ydCB7IGxhYmVsTGluZUhlaWdodCB9IGZyb20gXCIuL2xhYmVsLmhlbHBlclwiO1xuaW1wb3J0IHsgTXlJdGVtIH0gZnJvbSBcIi4vbW9kZWxcIjtcblxuXG5jb25zdCBvcGFjaXR5TG93ID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2RldGFpbCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPEdyaWRMYXlvdXQgI2RldGFpbENvbnRhaW5lciBbY2xhc3NdPVwiZGV0YWlsQ2xhc3NcIiBbcm93XT1cInJvd1wiIFtjb2xdPVwiY29sXCIgW3Jvd1NwYW5dPVwicm93U3BhblwiIFtjb2xTcGFuXT1cImNvbFNwYW5cIj5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImRldGFpbC1zdGFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJjYXRlZ29yeVwiIFt0ZXh0XT1cInRoZUNhdGVnb3J5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwidGl0bGVcIiBbdGV4dF09XCJ0aGVUaXRsZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImRpdmlkZXJcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgI2Rlc2MgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHRleHRXcmFwPVwidHJ1ZVwiIChsb2FkZWQpPVwiZGVzY0xvYWRlZCgkZXZlbnQpXCIgW3RleHRdPVwidGhlRGVzY3JpcHRpb25cIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIDwvR3JpZExheW91dD5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydkZXRhaWwuY29tcG9uZW50LmNzcyddLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgICAgICAuZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogJHtvcGFjaXR5TG93fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWwtYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICBgXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgnbWxlZnQnKSBtbGVmdDogc3RyaW5nO1xuICAgIEBJbnB1dCgnbXJpZ2h0JykgbXJpZ2h0OiBzdHJpbmc7XG4gICAgQElucHV0KCdyb3cnKSByb3c6IHN0cmluZztcbiAgICBASW5wdXQoJ2NvbCcpIGNvbDogc3RyaW5nO1xuICAgIEBJbnB1dCgncm93U3BhbicpIHJvd1NwYW46IHN0cmluZztcbiAgICBASW5wdXQoJ2NvbFNwYW4nKSBjb2xTcGFuOiBzdHJpbmc7XG4gICAgQElucHV0KCdkZXRhaWxJbmRleCcpIGRldGFpbEluZGV4OiBzdHJpbmc7XG5cbiAgICBAVmlld0NoaWxkKCdkZXRhaWxDb250YWluZXInKSBkZXRhaWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnZGVzYycpIGRlc2NSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgY3VycmVudERhdGFJbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyBpdGVtOiBNeUl0ZW07XG5cbiAgICBwcml2YXRlIGRpcmVjdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgY29uZmlybWVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhbm5vdW5jZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHJpdmF0ZSBnZXQgZGlyZWN0aW9uRnJvbUlucHV0KCkge1xuICAgICAgICBjb25zdCBtID0gdGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubWxlZnQgOiB0aGlzLm1yaWdodDtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaXNBY3RpdmVUaWxlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMucm93ID09PSAnMicgJiYgdGhpcy5jb2wgPT09ICcyJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgZGV0YWlsQ2xhc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlVGlsZSlcbiAgICAgICAgICAgIHJldHVybiAnZGV0YWlsLWNvbnRhaW5lciBkZXRhaWwtYWN0aXZlJztcbiAgICAgICAgZWxzZSByZXR1cm4gJ2RldGFpbC1jb250YWluZXInO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IHRoZUNhdGVnb3J5KCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtKSByZXR1cm4gdGhpcy5pdGVtLmNhdGVnb3J5O1xuICAgICAgICBlbHNlIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCB0aGVUaXRsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbSkgcmV0dXJuIHRoaXMuaXRlbS50aXRsZTtcbiAgICAgICAgZWxzZSByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgdGhlRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW0pIHJldHVybiB0aGlzLml0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIGVsc2UgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW92ZVNlcnZpY2U6IE1vdmVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbW92ZVNlcnZpY2UubW92ZUFubm91bmNlZCQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGlyZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmFubm91bmNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGFJbmRleCA9IHBhcnNlSW50KHRoaXMuZGV0YWlsSW5kZXgpO1xuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtc1t0aGlzLmN1cnJlbnREYXRhSW5kZXhdO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICAvLyBwcmV2ZW50IG1lbW9yeSBsZWFrIHdoZW4gY29tcG9uZW50IGRlc3Ryb3llZFxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGRlc2NMb2FkZWQoYXJncykge1xuICAgICAgICBjb25zdCB0dkRlc2MgPSA8TGFiZWw+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmICghdGhpcy5pdGVtKSB7IC8vL3RoaXMgaXMgYSBoYWNrIHRvIGZpeCB0aGUgbGFiZWwgbGluZSBzcGFjaW5nIC0gYSBwcm9wZXJ0eSB0aGF0J3MgY29taW5nIGluIHRoZSBuZXh0IHZlcnNpb24gb2Yge059IFxuICAgICAgICAgICAgdHZEZXNjLnRleHQgPSAnc2QgYWRzZiBhZHNmIGFkc2YgYWRzZiBhZHNmIGFkc2YgYWRzZiBhZGhzZmIgYWRrZiBhaGRmaXUgYWhkZiBha2hmYWwga2RoYWt1IGRoZmprbCBhaGRma2xqIGFoZGZrbGogYWhqc2xka2YgaGFsamtkZiBhamtsZGhmayBqYWRoZmtqIGFoZGcgYWZkZyBzZmcgc2ZnaHNmZGcgc2ZnIHNmZGcgc2ZnIHNkZmcgc2RmZyBzZmcgc2ZkZyBzZmRnIHNmZyBzZmRnIHNmZyBzZmRnIHNmZGcgZmRnJztcbiAgICAgICAgfVxuICAgICAgICBsYWJlbExpbmVIZWlnaHQodHZEZXNjKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMubW92ZVNlcnZpY2UuY29uZmlybU1vdmUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFubm91bmNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXROZXh0RGF0YUluZGV4KGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGFkZGVuZCA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBuZXh0SWR4UHJlUHJvYyA9IHRoaXMuY3VycmVudERhdGFJbmRleCArIGFkZGVuZDtcbiAgICAgICAgY29uc3QgbmV4dENpcmN1bGFySW5kZXggPSBuZXh0SWR4UHJlUHJvYyAtIE1hdGguZmxvb3IoKG5leHRJZHhQcmVQcm9jIC0gMSkgLyBpdGVtcy5sZW5ndGgpICogaXRlbXMubGVuZ3RoOyAvL0FjY291bnRzIGZvciBuZWdhdGl2ZSBudW1iZXJzXG4gICAgICAgIHJldHVybiBuZXh0Q2lyY3VsYXJJbmRleCAlIGl0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3ZlKCkge1xuICAgICAgICBjb25zdCBhbmlEZWYgPSBjb252ZXJ0RGlyZWN0aW9uVG9BbmltYXRpb24odGhpcy5kaXJlY3Rpb25Gcm9tSW5wdXQsIDMwMCk7XG4gICAgICAgIGFuaURlZi5vcGFjaXR5ID0gdGhpcy5nZXRPcGFjaXR5QmFzZWRPbkRpcmVjdGlvbkFuZFBvc2l0aW9uKHRoaXMuZGlyZWN0aW9uKTtcblxuICAgICAgICAoPEdyaWRMYXlvdXQ+dGhpcy5kZXRhaWxDb250YWluZXIubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC5hbmltYXRlKGFuaURlZilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbklkeCA9IHRoaXMuZ2V0TmV4dERhdGFJbmRleCh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGFJbmRleCA9IG5JZHg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbSA9IGl0ZW1zW3RoaXMuY3VycmVudERhdGFJbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudG9PcmlnaW5hbFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE9wYWNpdHlCYXNlZE9uRGlyZWN0aW9uQW5kUG9zaXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVUaWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gb3BhY2l0eUxvdztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmluZ1RvQWN0aXZlKGRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZpbmdUb0FjdGl2ZShkaXJlY3Rpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gKCh0aGlzLnJvdyA9PT0gJzQnICYmIHRoaXMuY29sID09PSAnMicgJiYgZGlyZWN0aW9uID09PSAncmlnaHQnKSB8fFxuICAgICAgICAgICAgKHRoaXMucm93ID09PSAnMicgJiYgdGhpcy5jb2wgPT09ICc0JyAmJiBkaXJlY3Rpb24gPT09ICdsZWZ0JykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9PcmlnaW5hbFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBnbCA9IDxHcmlkTGF5b3V0PnRoaXMuZGV0YWlsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGdsLnN0eWxlLnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICBnbC5zdHlsZS50cmFuc2xhdGVZID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVUaWxlKSB7XG4gICAgICAgICAgICBnbC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5TG93O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=