"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs");
var Observable_1 = require("rxjs/Observable");
var ListItemsComponent = (function () {
    function ListItemsComponent() {
        this.items = [];
        //this.items$ = Observable.of(ITEMS);
    }
    ListItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.interval(100)
            .take(ITEMS.length)
            .map(function (t) { return _this.items.push(ITEMS[t]); })
            .subscribe();
    };
    return ListItemsComponent;
}());
ListItemsComponent = __decorate([
    core_1.Component({
        selector: 'list-items',
        template: "\n        <GridLayout>\n            <!--ListView [items]=\"items\">\n                <template let-item=\"item\">\n                    <StackLayout class=\"item-wrapper\">\n                        <Label [text]=\"item.title\"></Label>\n                    </StackLayout>\n                </template>\n            </ListView-->\n\n            <ScrollView>\n                <StackLayout>\n                    <StackLayout class=\"item-wrapper\" *ngFor=\"let item of items\">\n                        <Label [text]=\"item.title\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </ScrollView>\n        </GridLayout>\n    ",
        styles: [
            "\n            ScrollView {\n                height: 100%;\n            }\n            ListView {\n                height: 100%;\n            }\n            .item-wrapper {\n                height: 200px;\n                margin-bottom: 20px;\n                border-color: red;\n                border-width: 1;\n                background-color: blue;\n                \n                animation-name: itemin;\n                animation-duration: 500ms;\n                animation-fill-mode: forwards;\n                \n            }\n            @keyframes itemin {\n                from { opacity: 0; transform: translateY(50px); }\n                to { opacity: 1; transform: translateY(0px); }\n            }\n        "
        ]
    }),
    __metadata("design:paramtypes", [])
], ListItemsComponent);
exports.ListItemsComponent = ListItemsComponent;
var ITEMS = [];
var fillMoreItems = function (numItems) {
    for (var i = 0; i < numItems; i++) {
        ITEMS.push({ title: "dynitem " + i });
    }
};
fillMoreItems(20);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQkFBYztBQUNkLDhDQUE2QztBQXNEN0MsSUFBYSxrQkFBa0I7SUFJM0I7UUFGTyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR3RCLHFDQUFxQztJQUN6QyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF6QixDQUF5QixDQUFDO2FBQ25DLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksa0JBQWtCO0lBakQ5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLHFwQkFrQlQ7UUFDRCxNQUFNLEVBQUU7WUFDSix1dEJBdUJDO1NBQ0o7S0FDSixDQUFDOztHQUVXLGtCQUFrQixDQWM5QjtBQWRZLGdEQUFrQjtBQXVCL0IsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO0FBRXpCLElBQU0sYUFBYSxHQUFHLFVBQUMsUUFBZ0I7SUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQVcsQ0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBcInJ4anNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGlzdC1pdGVtcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPEdyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8IS0tTGlzdFZpZXcgW2l0ZW1zXT1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJpdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCJpdGVtLnRpdGxlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9MaXN0Vmlldy0tPlxuXG4gICAgICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIml0ZW0td3JhcHBlclwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS50aXRsZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cbiAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICAgIGBcbiAgICAgICAgICAgIFNjcm9sbFZpZXcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExpc3RWaWV3IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGl0ZW1pbjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBpdGVtaW4ge1xuICAgICAgICAgICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7IH1cbiAgICAgICAgICAgICAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpdGVtczogSXRlbVtdID0gW107XG4gICAgcHVibGljIGl0ZW1zJDogT2JzZXJ2YWJsZTxJdGVtW10+O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL3RoaXMuaXRlbXMkID0gT2JzZXJ2YWJsZS5vZihJVEVNUyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIE9ic2VydmFibGUuaW50ZXJ2YWwoMTAwKVxuICAgICAgICAgICAgLnRha2UoSVRFTVMubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcCh0ID0+IHRoaXMuaXRlbXMucHVzaChJVEVNU1t0XSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuXG5cblxuXG5pbnRlcmZhY2UgSXRlbSB7XG4gICAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgSVRFTVM6IEl0ZW1bXSA9IFtdO1xuXG5jb25zdCBmaWxsTW9yZUl0ZW1zID0gKG51bUl0ZW1zOiBudW1iZXIpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUl0ZW1zOyBpKyspIHtcbiAgICAgICAgSVRFTVMucHVzaCh7IHRpdGxlOiBgZHluaXRlbSAke2l9YCB9KTtcbiAgICB9XG59O1xuXG5maWxsTW9yZUl0ZW1zKDIwKTtcbiJdfQ==