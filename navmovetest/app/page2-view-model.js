"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var Page2Model = (function (_super) {
    __extends(Page2Model, _super);
    function Page2Model() {
        var _this = _super.call(this) || this;
        _this.counter = 5;
        _this.set("message", _this.counter + " taps left");
        return _this;
    }
    Page2Model.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! Clicker achievement unlocked!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    };
    ;
    return Page2Model;
}(observable_1.Observable));
exports.Page2Model = Page2Model;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFFM0M7SUFBZ0MsOEJBQVU7SUFHdEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDOztJQUNyRCxDQUFDO0lBRU0sOEJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsMENBQTBDLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBSyxJQUFJLENBQUMsT0FBTyxlQUFZLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFDTixpQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBZ0MsdUJBQVUsR0FpQnpDO0FBakJZLGdDQUFVO0FBaUJ0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWdlMk1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHVibGljIGNvdW50ZXI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSA1O1xuICAgICAgICB0aGlzLnNldChcIm1lc3NhZ2VcIiwgdGhpcy5jb3VudGVyICsgXCIgdGFwcyBsZWZ0XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0YXBBY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY291bnRlci0tO1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KFwibWVzc2FnZVwiLCBcIkhvb3JyYWFheSEgQ2xpY2tlciBhY2hpZXZlbWVudCB1bmxvY2tlZCFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldChcIm1lc3NhZ2VcIiwgYCR7dGhpcy5jb3VudGVyfSB0YXBzIGxlZnRgKTtcbiAgICAgICAgfVxuICAgIH07XG59OyJdfQ==