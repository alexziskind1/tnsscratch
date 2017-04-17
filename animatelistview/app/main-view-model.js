"use strict";
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(lv) {
        var _this = _super.call(this) || this;
        _this._selectedIndex = 1;
        _this.listItems = [];
        _this.positions = [
            { title: 'Row 1', position: 1 },
            { title: 'Row 450', position: 450 },
            { title: 'Row 900', position: 900 }
        ];
        _this._listView = lv;
        _this.fillListItems();
        return _this;
    }
    Object.defineProperty(HelloWorldModel.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._selectedIndex = value;
            var position = this.positions[value].position;
            this.scrollListView(position);
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.fillListItems = function () {
        for (var i = 0; i < 1000; i++) {
            var item = { text: 'myItem' + i };
            this.listItems.push(item);
        }
    };
    HelloWorldModel.prototype.scrollListView = function (position) {
        if (this._listView.ios) {
            this._listView.ios.scrollToRowAtIndexPathAtScrollPositionAnimated(NSIndexPath.indexPathForItemInSection(position, 0), UITableViewScrollPosition.UITableViewScrollPositionTop, true);
        }
        else {
            this._listView.scrollToIndex(position);
        }
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFRN0M7SUFBcUMsbUNBQVU7SUFzQjNDLHlCQUFZLEVBQVk7UUFBeEIsWUFDSSxpQkFBTyxTQUdWO1FBeEJPLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLGVBQVMsR0FBa0IsRUFBRSxDQUFDO1FBRTlCLGVBQVMsR0FBRztZQUNmLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1lBQy9CLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ25DLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1NBQ3RDLENBQUM7UUFjRSxLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBQ3pCLENBQUM7SUFkRCxzQkFBSSwwQ0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BTkE7SUFjTyx1Q0FBYSxHQUFyQjtRQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQVcsRUFBRSxJQUFJLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRU8sd0NBQWMsR0FBdEIsVUFBdUIsUUFBZ0I7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUseUJBQXlCLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEwsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUEzQ0QsQ0FBcUMsdUJBQVUsR0EyQzlDO0FBM0NZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IE15SXRlbSB9IGZyb20gJy4vbW9kZWxzJztcblxuZGVjbGFyZSB2YXIgTlNJbmRleFBhdGg7XG5kZWNsYXJlIHZhciBVSVRhYmxlVmlld1Njcm9sbFBvc2l0aW9uO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfbGlzdFZpZXc6IExpc3RWaWV3O1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciA9IDE7XG5cbiAgICBwdWJsaWMgbGlzdEl0ZW1zOiBBcnJheTxNeUl0ZW0+ID0gW107XG5cbiAgICBwdWJsaWMgcG9zaXRpb25zID0gW1xuICAgICAgICB7IHRpdGxlOiAnUm93IDEnLCBwb3NpdGlvbjogMSB9LFxuICAgICAgICB7IHRpdGxlOiAnUm93IDQ1MCcsIHBvc2l0aW9uOiA0NTAgfSxcbiAgICAgICAgeyB0aXRsZTogJ1JvdyA5MDAnLCBwb3NpdGlvbjogOTAwIH1cbiAgICBdO1xuXG4gICAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIH1cblxuICAgIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uc1t2YWx1ZV0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuc2Nyb2xsTGlzdFZpZXcocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGx2OiBMaXN0Vmlldykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9saXN0VmlldyA9IGx2O1xuICAgICAgICB0aGlzLmZpbGxMaXN0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbGxMaXN0SXRlbXMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbTogTXlJdGVtID0geyB0ZXh0OiAnbXlJdGVtJyArIGkgfTtcbiAgICAgICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbExpc3RWaWV3KHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RWaWV3Lmlvcykge1xuICAgICAgICAgICAgdGhpcy5fbGlzdFZpZXcuaW9zLnNjcm9sbFRvUm93QXRJbmRleFBhdGhBdFNjcm9sbFBvc2l0aW9uQW5pbWF0ZWQoTlNJbmRleFBhdGguaW5kZXhQYXRoRm9ySXRlbUluU2VjdGlvbihwb3NpdGlvbiwgMCksIFVJVGFibGVWaWV3U2Nyb2xsUG9zaXRpb24uVUlUYWJsZVZpZXdTY3JvbGxQb3NpdGlvblRvcCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9saXN0Vmlldy5zY3JvbGxUb0luZGV4KHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==