"use strict";
var core_1 = require("@angular/core");
var MyComponent = (function () {
    function MyComponent() {
        this.text = 'blah';
    }
    MyComponent.prototype.onLoaded = function (args) {
        console.log('my component onLoaded');
        var v = args.object;
        v.on('measure,propertyChange,change', function (d) {
            console.log('event: ' + d.eventName);
            console.dir(d);
        });
    };
    MyComponent.prototype.onUnloaded = function (args) {
        console.log('my component onUnloaded');
    };
    MyComponent.prototype.onMeasure = function (args) {
        console.log('my component onMeasure');
    };
    MyComponent.prototype.onTap = function (args) {
        console.log('my component tap measured hjeight: ' + args.view.getMeasuredHeight());
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: "my-component",
            template: "\n        <Label shadow style.color=\"red\" [text]=\"text\"  (tap)=\"onTap($event)\"></Label>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFjMUM7SUFBQTtRQUVXLFNBQUksR0FBVyxNQUFNLENBQUM7SUF3QmpDLENBQUM7SUF0QlUsOEJBQVEsR0FBZixVQUFnQixJQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMsK0JBQStCLEVBQUUsVUFBQyxDQUFZO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLElBQXNCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFFdkYsQ0FBQztJQS9CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsdUdBR1Q7U0FDSixDQUFDOzttQkFBQTtJQTJCRixrQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksbUJBQVcsY0EwQnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd1aS9nZXN0dXJlcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktY29tcG9uZW50XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPExhYmVsIHNoYWRvdyBzdHlsZS5jb2xvcj1cInJlZFwiIFt0ZXh0XT1cInRleHRcIiAgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCI+PC9MYWJlbD5cblxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnQge1xuXG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9ICdibGFoJztcblxuICAgIHB1YmxpYyBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ215IGNvbXBvbmVudCBvbkxvYWRlZCcpO1xuICAgICAgICBsZXQgdiA9IDxWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICB2Lm9uKCdtZWFzdXJlLHByb3BlcnR5Q2hhbmdlLGNoYW5nZScsIChkOiBFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudDogJyArIGQuZXZlbnROYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VbmxvYWRlZChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdteSBjb21wb25lbnQgb25VbmxvYWRlZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1lYXN1cmUoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZygnbXkgY29tcG9uZW50IG9uTWVhc3VyZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdteSBjb21wb25lbnQgdGFwIG1lYXN1cmVkIGhqZWlnaHQ6ICcgKyBhcmdzLnZpZXcuZ2V0TWVhc3VyZWRIZWlnaHQoKSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==