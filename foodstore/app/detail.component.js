"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var DetailComponent = (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.descLoaded = function (args) {
        var tvDesc = args.object;
        labelLineHeight(tvDesc);
    };
    return DetailComponent;
}());
__decorate([
    core_1.ViewChild('desc'),
    __metadata("design:type", core_1.ElementRef)
], DetailComponent.prototype, "descRef", void 0);
DetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'detail',
        template: "\n        <GridLayout class=\"detail-container\">\n            <StackLayout class=\"detail-stack\">\n                <Label class=\"category\" text=\"Vegetable\"></Label>\n                <Label class=\"title\" text=\"Celery\"></Label>\n                <Label class=\"divider\"></Label>\n                <Label #desc class=\"description\" textWrap=\"true\" (loaded)=\"descLoaded($event)\" text=\"sdjf nads adsf ads ad adf adf ds adf adsf adsf adsf adads fasdf adsf asdf adsf asdf asdf ads fadsfadsadfasdf adf adf adsf adsf adfadsf adsf ad fadf asdf adf adsf adsf asdf asdf asdf adsf asdf adsf adf adsf adsf asdf asdf  \" ></Label>\n            </StackLayout>\n        </GridLayout>\n    ",
        styleUrls: ['detail.component.css']
    }),
    __metadata("design:paramtypes", [])
], DetailComponent);
exports.DetailComponent = DetailComponent;
function labelLineHeight(nsLabel) {
    if (application.ios) {
        var label = nsLabel.ios;
        var attributedString;
        if (label.atributedText) {
            attributedString = label.atributedText;
        }
        else {
            attributedString = NSMutableAttributedString.alloc().initWithString(label.text);
        }
        var paragraphStyle = NSMutableParagraphStyle.alloc().init();
        paragraphStyle.lineSpacing = 10;
        var range = { location: 0, length: label.text.length };
        attributedString.addAttributeValueRange(NSParagraphStyleAttributeName, paragraphStyle, range);
        label.attributedText = attributedString;
    }
    else if (application.android) {
        var label = nsLabel.android;
        //Default spacing is 20% of text size
        //setLineSpacing(add,multiplyby);
        label.setLineSpacing(16, 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUseUNBQTJDO0FBb0IzQyxJQUFhLGVBQWU7SUFJeEI7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUdNLG9DQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDbEIsSUFBTSxNQUFNLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFac0I7SUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7OEJBQVUsaUJBQVU7Z0RBQUM7QUFGOUIsZUFBZTtJQWhCM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsaXJCQVNUO1FBQ0QsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQzs7R0FFVyxlQUFlLENBYzNCO0FBZFksMENBQWU7QUFrQjVCLHlCQUF5QixPQUFPO0lBQzVCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFeEIsSUFBSSxnQkFBZ0IsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN0QixnQkFBZ0IsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLGdCQUFnQixHQUFHLHlCQUF5QixDQUFDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUVELElBQUksY0FBYyxHQUFHLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELGNBQWMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksS0FBSyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2RCxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyw2QkFBNkIsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUYsS0FBSyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFNUIscUNBQXFDO1FBQ3JDLGlDQUFpQztRQUNqQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSAndWkvdGV4dC12aWV3JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdkZXRhaWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiZGV0YWlsLXN0YWNrXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwiY2F0ZWdvcnlcIiB0ZXh0PVwiVmVnZXRhYmxlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJ0aXRsZVwiIHRleHQ9XCJDZWxlcnlcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImRpdmlkZXJcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxMYWJlbCAjZGVzYyBjbGFzcz1cImRlc2NyaXB0aW9uXCIgdGV4dFdyYXA9XCJ0cnVlXCIgKGxvYWRlZCk9XCJkZXNjTG9hZGVkKCRldmVudClcIiB0ZXh0PVwic2RqZiBuYWRzIGFkc2YgYWRzIGFkIGFkZiBhZGYgZHMgYWRmIGFkc2YgYWRzZiBhZHNmIGFkYWRzIGZhc2RmIGFkc2YgYXNkZiBhZHNmIGFzZGYgYXNkZiBhZHMgZmFkc2ZhZHNhZGZhc2RmIGFkZiBhZGYgYWRzZiBhZHNmIGFkZmFkc2YgYWRzZiBhZCBmYWRmIGFzZGYgYWRmIGFkc2YgYWRzZiBhc2RmIGFzZGYgYXNkZiBhZHNmIGFzZGYgYWRzZiBhZGYgYWRzZiBhZHNmIGFzZGYgYXNkZiAgXCIgPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdkZXNjJykgZGVzY1JlZjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBkZXNjTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgdHZEZXNjID0gPExhYmVsPmFyZ3Mub2JqZWN0O1xuICAgICAgICBsYWJlbExpbmVIZWlnaHQodHZEZXNjKTtcbiAgICB9XG59XG5cbmRlY2xhcmUgdmFyIE5TTXV0YWJsZUF0dHJpYnV0ZWRTdHJpbmcsIE5TTXV0YWJsZVBhcmFncmFwaFN0eWxlLCBOU1BhcmFncmFwaFN0eWxlQXR0cmlidXRlTmFtZTtcblxuZnVuY3Rpb24gbGFiZWxMaW5lSGVpZ2h0KG5zTGFiZWwpIHtcbiAgICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IG5zTGFiZWwuaW9zO1xuXG4gICAgICAgIHZhciBhdHRyaWJ1dGVkU3RyaW5nO1xuICAgICAgICBpZiAobGFiZWwuYXRyaWJ1dGVkVGV4dCkge1xuICAgICAgICAgICAgYXR0cmlidXRlZFN0cmluZyA9IGxhYmVsLmF0cmlidXRlZFRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVkU3RyaW5nID0gTlNNdXRhYmxlQXR0cmlidXRlZFN0cmluZy5hbGxvYygpLmluaXRXaXRoU3RyaW5nKGxhYmVsLnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcmFncmFwaFN0eWxlID0gTlNNdXRhYmxlUGFyYWdyYXBoU3R5bGUuYWxsb2MoKS5pbml0KCk7XG4gICAgICAgIHBhcmFncmFwaFN0eWxlLmxpbmVTcGFjaW5nID0gMTA7XG4gICAgICAgIHZhciByYW5nZSA9IHsgbG9jYXRpb246IDAsIGxlbmd0aDogbGFiZWwudGV4dC5sZW5ndGggfTtcbiAgICAgICAgYXR0cmlidXRlZFN0cmluZy5hZGRBdHRyaWJ1dGVWYWx1ZVJhbmdlKE5TUGFyYWdyYXBoU3R5bGVBdHRyaWJ1dGVOYW1lLCBwYXJhZ3JhcGhTdHlsZSwgcmFuZ2UpO1xuICAgICAgICBsYWJlbC5hdHRyaWJ1dGVkVGV4dCA9IGF0dHJpYnV0ZWRTdHJpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbnNMYWJlbC5hbmRyb2lkO1xuXG4gICAgICAgIC8vRGVmYXVsdCBzcGFjaW5nIGlzIDIwJSBvZiB0ZXh0IHNpemVcbiAgICAgICAgLy9zZXRMaW5lU3BhY2luZyhhZGQsbXVsdGlwbHlieSk7XG4gICAgICAgIGxhYmVsLnNldExpbmVTcGFjaW5nKDE2LCAxKTtcbiAgICB9XG59Il19