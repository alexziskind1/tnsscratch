"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gestures_1 = require("ui/gestures");
var color_1 = require("color");
var geometry_1 = require("../common/geometry");
var viewAnimationExtensions_1 = require("../common/animation/viewAnimationExtensions");
var LinkView = (function (_super) {
    __extends(LinkView, _super);
    function LinkView(li, rect, showLPCallback) {
        var _this = _super.call(this) || this;
        _this.rect = rect;
        //private _width: number = 50;
        //private _height: number = 50;
        _this.lastLocation = new geometry_1.Point(0, 0);
        //this._width = options.width;
        //this._height = options.height;
        _this.linkItem = li;
        _this.showLinkPickerCallback = showLPCallback;
        _this.on(gestures_1.GestureTypes.pan, function (args) {
            switch (args.state) {
                case gestures_1.GestureStateTypes.began: {
                    _this.dragStarted();
                    break;
                }
                case gestures_1.GestureStateTypes.changed:
                    _this.dragged(args);
                    break;
                case gestures_1.GestureStateTypes.ended: {
                    _this.dragged(args);
                    _this.dradEnded();
                    break;
                }
            }
        });
        _this.on(gestures_1.GestureTypes.longPress, function (args) {
            console.log('link view long press');
        });
        _this.on(gestures_1.GestureTypes.tap, function (args) {
            console.log('link view tap');
            //this.showLinkPickerCallback(this, this.linkItem);
            _this.showLinkPickerCallback(_this, _this.linkItem);
            //this.showLinkPicker();
        });
        return _this;
    }
    /*
        public showLinkPicker() {
            var p: Page = <Page>this.page;
            var fullscreen: boolean = true;
    
            p.showModal("../linkPicker", "Context from showModal", function (username: string, password: string) {
                console.log(username + "/" + password);
                //label.text = username + "/" + password;
            }, fullscreen);
        }
        */
    //View lifecycle
    LinkView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        //randomize color
        var blueValue = Math.floor(Math.random() * 255) + 1;
        var greenValue = Math.floor(Math.random() * 255) + 1;
        var redValue = Math.floor(Math.random() * 255) + 1;
        this.setMeasuredDimension(this.rect.size.width, this.rect.size.height);
        this.backgroundColor = new color_1.Color(150, redValue, greenValue, blueValue);
        //this.color = new Color(255, redValue,greenValue,blueValue);
        //randomize location
        //let pointX = Math.floor(Math.random() * (this.parent.getMeasuredWidth() - this.rect.size.width)) + 1;
        //let pointY = Math.floor(Math.random() * (this.parent.getMeasuredHeight() - this.rect.size.height)) + 1
        this.translateX = this.rect.origin.x;
        this.translateY = this.rect.origin.y;
        //this.applyStationaryShadow();
    };
    //Private methods
    LinkView.prototype.dragged = function (args) {
        var translation = args.ios.translationInView(this.parent.ios);
        var newCenter = {
            x: this.lastLocation.x + translation.x,
            y: this.lastLocation.y + translation.y
        };
        this.ios.center = newCenter;
    };
    LinkView.prototype.dragStarted = function () {
        this.lastLocation.x = this.ios.center.x;
        this.lastLocation.y = this.ios.center.y;
        this.parent.ios.bringSubviewToFront(this.ios);
        this.applyRaisedShadow();
        this.animate({
            scale: {
                x: 1.5,
                y: 1.5
            },
            duration: 100
        });
    };
    LinkView.prototype.dradEnded = function () {
        this.applyStationaryShadow();
        this.animate({
            scale: {
                x: 1,
                y: 1
            },
            duration: 100
        });
    };
    LinkView.prototype.applyStationaryShadow = function () {
        if (this.ios) {
            this.ios.layer.shadowOffset = { height: 2, width: -2 };
            this.ios.layer.shadowRadius = 5;
            this.ios.layer.shadowOpacity = 0.3;
        }
    };
    LinkView.prototype.applyRaisedShadow = function () {
        if (this.ios) {
            this.ios.layer.shadowOffset = { height: 10, width: -10 };
            //this.ios.layer.shadowRadius = 5;
            this.ios.layer.shadowOpacity = 0.5;
        }
    };
    return LinkView;
}(viewAnimationExtensions_1.AnimatedLabel));
exports.LinkView = LinkView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua1ZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5rVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFxRztBQUlyRywrQkFBOEI7QUFFOUIsK0NBQWlEO0FBRWpELHVGQUE0RTtBQUc1RTtJQUE4Qiw0QkFBYTtJQVF2QyxrQkFBWSxFQUFZLEVBQVUsSUFBVSxFQUFFLGNBQXdCO1FBQXRFLFlBQ0ksaUJBQU8sU0FvQ1Y7UUFyQ2lDLFVBQUksR0FBSixJQUFJLENBQU07UUFONUMsOEJBQThCO1FBQzlCLCtCQUErQjtRQUN2QixrQkFBWSxHQUFVLElBQUksZ0JBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFNMUMsOEJBQThCO1FBQzlCLGdDQUFnQztRQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFJLENBQUMsc0JBQXNCLEdBQUcsY0FBYyxDQUFDO1FBRTdDLEtBQUksQ0FBQyxFQUFFLENBQUMsdUJBQVksQ0FBQyxHQUFHLEVBQUUsVUFBQyxJQUF5QjtZQUNoRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyw0QkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixLQUFLLENBQUM7Z0JBQ1YsQ0FBQztnQkFDRCxLQUFLLDRCQUFpQixDQUFDLE9BQU87b0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25CLEtBQUssQ0FBQztnQkFDVixLQUFLLDRCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMzQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLEtBQUssQ0FBQztnQkFDVixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FB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dGEsIFBhbkdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVUeXBlcywgR2VzdHVyZVN0YXRlVHlwZXMgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5cbmltcG9ydCB7IFBvaW50LCBSZWN0IH0gZnJvbSBcIi4uL2NvbW1vbi9nZW9tZXRyeVwiO1xuaW1wb3J0IHsgTGlua0l0ZW0gfSBmcm9tIFwiLi4vbW9kZWwvbGlua0l0ZW1cIjtcbmltcG9ydCB7IEFuaW1hdGVkTGFiZWwgfSBmcm9tIFwiLi4vY29tbW9uL2FuaW1hdGlvbi92aWV3QW5pbWF0aW9uRXh0ZW5zaW9uc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBMaW5rVmlldyBleHRlbmRzIEFuaW1hdGVkTGFiZWwge1xuXG4gICAgLy9wcml2YXRlIF93aWR0aDogbnVtYmVyID0gNTA7XG4gICAgLy9wcml2YXRlIF9oZWlnaHQ6IG51bWJlciA9IDUwO1xuICAgIHByaXZhdGUgbGFzdExvY2F0aW9uOiBQb2ludCA9IG5ldyBQb2ludCgwLCAwKTtcbiAgICBwdWJsaWMgbGlua0l0ZW06IExpbmtJdGVtO1xuICAgIHByaXZhdGUgc2hvd0xpbmtQaWNrZXJDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihsaTogTGlua0l0ZW0sIHByaXZhdGUgcmVjdDogUmVjdCwgc2hvd0xQQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vdGhpcy5fd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgICAgICAvL3RoaXMuX2hlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmxpbmtJdGVtID0gbGk7XG4gICAgICAgIHRoaXMuc2hvd0xpbmtQaWNrZXJDYWxsYmFjayA9IHNob3dMUENhbGxiYWNrO1xuXG4gICAgICAgIHRoaXMub24oR2VzdHVyZVR5cGVzLnBhbiwgKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoYXJncy5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgR2VzdHVyZVN0YXRlVHlwZXMuYmVnYW46IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRlZCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBHZXN0dXJlU3RhdGVUeXBlcy5jaGFuZ2VkOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdnZWQoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgR2VzdHVyZVN0YXRlVHlwZXMuZW5kZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2VkKGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWRFbmRlZCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oR2VzdHVyZVR5cGVzLmxvbmdQcmVzcywgKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaW5rIHZpZXcgbG9uZyBwcmVzcycpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKEdlc3R1cmVUeXBlcy50YXAsIChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGluayB2aWV3IHRhcCcpO1xuICAgICAgICAgICAgLy90aGlzLnNob3dMaW5rUGlja2VyQ2FsbGJhY2sodGhpcywgdGhpcy5saW5rSXRlbSk7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rUGlja2VyQ2FsbGJhY2sodGhpcywgdGhpcy5saW5rSXRlbSk7XG5cbiAgICAgICAgICAgIC8vdGhpcy5zaG93TGlua1BpY2tlcigpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgcHVibGljIHNob3dMaW5rUGlja2VyKCkge1xuICAgICAgICAgICAgdmFyIHA6IFBhZ2UgPSA8UGFnZT50aGlzLnBhZ2U7XG4gICAgICAgICAgICB2YXIgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICBwLnNob3dNb2RhbChcIi4uL2xpbmtQaWNrZXJcIiwgXCJDb250ZXh0IGZyb20gc2hvd01vZGFsXCIsIGZ1bmN0aW9uICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcm5hbWUgKyBcIi9cIiArIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAvL2xhYmVsLnRleHQgPSB1c2VybmFtZSArIFwiL1wiICsgcGFzc3dvcmQ7XG4gICAgICAgICAgICB9LCBmdWxsc2NyZWVuKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgLy9WaWV3IGxpZmVjeWNsZVxuXG4gICAgcHVibGljIG9uTWVhc3VyZSh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy9yYW5kb21pemUgY29sb3JcbiAgICAgICAgbGV0IGJsdWVWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSkgKyAxO1xuICAgICAgICBsZXQgZ3JlZW5WYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSkgKyAxO1xuICAgICAgICBsZXQgcmVkVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpICsgMTtcblxuICAgICAgICB0aGlzLnNldE1lYXN1cmVkRGltZW5zaW9uKHRoaXMucmVjdC5zaXplLndpZHRoLCB0aGlzLnJlY3Quc2l6ZS5oZWlnaHQpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcigxNTAsIHJlZFZhbHVlLCBncmVlblZhbHVlLCBibHVlVmFsdWUpO1xuICAgICAgICAvL3RoaXMuY29sb3IgPSBuZXcgQ29sb3IoMjU1LCByZWRWYWx1ZSxncmVlblZhbHVlLGJsdWVWYWx1ZSk7XG5cbiAgICAgICAgLy9yYW5kb21pemUgbG9jYXRpb25cbiAgICAgICAgLy9sZXQgcG9pbnRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMucGFyZW50LmdldE1lYXN1cmVkV2lkdGgoKSAtIHRoaXMucmVjdC5zaXplLndpZHRoKSkgKyAxO1xuICAgICAgICAvL2xldCBwb2ludFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5wYXJlbnQuZ2V0TWVhc3VyZWRIZWlnaHQoKSAtIHRoaXMucmVjdC5zaXplLmhlaWdodCkpICsgMVxuXG5cblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVggPSB0aGlzLnJlY3Qub3JpZ2luLng7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IHRoaXMucmVjdC5vcmlnaW4ueTtcbiAgICAgICAgLy90aGlzLmFwcGx5U3RhdGlvbmFyeVNoYWRvdygpO1xuICAgIH1cblxuXG4gICAgLy9Qcml2YXRlIG1ldGhvZHNcblxuICAgIHByaXZhdGUgZHJhZ2dlZChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIHZhciB0cmFuc2xhdGlvbiA9IGFyZ3MuaW9zLnRyYW5zbGF0aW9uSW5WaWV3KHRoaXMucGFyZW50Lmlvcyk7XG4gICAgICAgIHZhciBuZXdDZW50ZXIgPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmxhc3RMb2NhdGlvbi54ICsgdHJhbnNsYXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMubGFzdExvY2F0aW9uLnkgKyB0cmFuc2xhdGlvbi55XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW9zLmNlbnRlciA9IG5ld0NlbnRlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYWdTdGFydGVkKCkge1xuICAgICAgICB0aGlzLmxhc3RMb2NhdGlvbi54ID0gdGhpcy5pb3MuY2VudGVyLng7XG4gICAgICAgIHRoaXMubGFzdExvY2F0aW9uLnkgPSB0aGlzLmlvcy5jZW50ZXIueTtcbiAgICAgICAgdGhpcy5wYXJlbnQuaW9zLmJyaW5nU3Vidmlld1RvRnJvbnQodGhpcy5pb3MpO1xuICAgICAgICB0aGlzLmFwcGx5UmFpc2VkU2hhZG93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHg6IDEuNSxcbiAgICAgICAgICAgICAgICB5OiAxLjVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhZEVuZGVkKCkge1xuICAgICAgICB0aGlzLmFwcGx5U3RhdGlvbmFyeVNoYWRvdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICAgIHk6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXBwbHlTdGF0aW9uYXJ5U2hhZG93KCkge1xuICAgICAgICBpZiAodGhpcy5pb3MpIHtcbiAgICAgICAgICAgIHRoaXMuaW9zLmxheWVyLnNoYWRvd09mZnNldCA9IHsgaGVpZ2h0OiAyLCB3aWR0aDogLTIgfTtcbiAgICAgICAgICAgIHRoaXMuaW9zLmxheWVyLnNoYWRvd1JhZGl1cyA9IDU7XG4gICAgICAgICAgICB0aGlzLmlvcy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMC4zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVJhaXNlZFNoYWRvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW9zKSB7XG4gICAgICAgICAgICB0aGlzLmlvcy5sYXllci5zaGFkb3dPZmZzZXQgPSB7IGhlaWdodDogMTAsIHdpZHRoOiAtMTAgfTtcbiAgICAgICAgICAgIC8vdGhpcy5pb3MubGF5ZXIuc2hhZG93UmFkaXVzID0gNTtcbiAgICAgICAgICAgIHRoaXMuaW9zLmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjU7XG4gICAgICAgIH1cbiAgICB9XG59Il19