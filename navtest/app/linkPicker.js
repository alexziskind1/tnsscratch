"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frameModule = require("ui/frame");
var linkPickerEventArgs_1 = require("./common/events/linkPickerEventArgs");
var globalModule = require("./common/myglobal");
var LinkPickerController = (function (_super) {
    __extends(LinkPickerController, _super);
    function LinkPickerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.screens = [];
        return _this;
    }
    /*
        public onShowingModally(args: EventData) {
            console.log(">>> linkPicker.onShowingModally");
            var modalPage = <Page>args.object;
            if (modalPage.ios && modalPage.ios.modalPresentationStyle === UIModalPresentationStyle.UIModalPresentationFullScreen) {
                console.log(">>> Setting modalPage.ios.modalPresentationStyle to UIModalPresentationStyle.UIModalPresentationOverFullScreen");
                modalPage.ios.modalPresentationStyle = UIModalPresentationStyle.UIModalPresentationOverFullScreen;
            }
        }
        */
    LinkPickerController.prototype.onShownModally = function (args) {
        console.log(">>> linkPicker.onShownModally, context: " + args.context);
        this.set("selectedScreenName", args.context);
        this.closeCallback = args.closeCallback;
        var modalPage = args.object;
        if (frameModule.topmost().currentPage.modal !== args.object) {
            throw new Error("frameModule.topmost().currentPage.modal.id: " + frameModule.topmost().currentPage.modal.id + "; modalPage.id: " + modalPage.id);
        }
    };
    LinkPickerController.prototype.onLoaded = function (args) {
        console.log(">>> linkPicker.onLoaded");
        this.page = args.object;
        this.screens = globalModule.screens;
        this.page.bindingContext = this;
        this.page.animate({
            translate: { x: 0, y: -1000 },
            opacity: 1,
            duration: 300
        });
    };
    LinkPickerController.prototype.listViewItemTap = function (args) {
        var itemIndex = args.index;
        var selectedScreen = this.screens[itemIndex];
        console.log('listViewItemTap idx: ' + itemIndex);
        this.set("selectedScreenName", selectedScreen.name);
    };
    LinkPickerController.prototype.cancelTap = function (args) {
        console.log(">>> linkPicker.cancelTap");
        if (this.closeCallback) {
            var lpArgs = new linkPickerEventArgs_1.LinkPickerClosedEventArgs();
            lpArgs.canceled = true;
            this.dismissModal(lpArgs);
        }
    };
    LinkPickerController.prototype.doneTap = function (args) {
        console.log(">>> linkPicker.doneTap");
        if (this.closeCallback) {
            var selectedScreenName = this.get("selectedScreenName");
            var lpArgs = new linkPickerEventArgs_1.LinkPickerClosedEventArgs();
            lpArgs.selectedName = selectedScreenName;
            this.dismissModal(lpArgs);
        }
    };
    LinkPickerController.prototype.deleteTap = function (args) {
        console.log(">>> linkPicker.deleteTap");
        if (this.closeCallback) {
            var lpArgs = new linkPickerEventArgs_1.LinkPickerClosedEventArgs();
            lpArgs.linkDeleted = true;
            this.dismissModal(lpArgs);
        }
    };
    LinkPickerController.prototype.dismissModal = function (lpArgs) {
        this.closeCallback(lpArgs);
    };
    return LinkPickerController;
}(observable_1.Observable));
exports.LinkPickerController = LinkPickerController;
var lpc = new LinkPickerController();
//export var onShowingModally = args => lpc.onShowingModally(args);
exports.onShownModally = function (args) { return lpc.onShownModally(args); };
exports.onLoaded = function (args) { return lpc.onLoaded(args); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua1BpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpbmtQaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFJeEQsc0NBQXlDO0FBS3pDLDJFQUFnRjtBQUNoRixnREFBbUQ7QUFFbkQ7SUFBMEMsd0NBQVU7SUFBcEQ7UUFBQSxxRUF3RkM7UUFwRlUsYUFBTyxHQUFzQixFQUFFLENBQUM7O0lBb0YzQyxDQUFDO0lBbEZHOzs7Ozs7Ozs7VUFTTTtJQUVDLDZDQUFjLEdBQXJCLFVBQXNCLElBQXNCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTJDLElBQUksQ0FBQyxPQUFTLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsYUFBYSxHQUE0QyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2pGLElBQUksU0FBUyxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFbEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBK0MsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSx3QkFBbUIsU0FBUyxDQUFDLEVBQUksQ0FBQyxDQUFDO1FBQ2hKLENBQUM7SUFDTCxDQUFDO0lBRU0sdUNBQVEsR0FBZixVQUFnQixJQUFlO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNkLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDhDQUFlLEdBQXRCLFVBQXVCLElBQW1CO1FBQ3RDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFM0IsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSx3Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLCtDQUF5QixFQUFFLENBQUM7WUFDN0MsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVNLHNDQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3hELElBQUksTUFBTSxHQUFHLElBQUksK0NBQXlCLEVBQUUsQ0FBQztZQUM3QyxNQUFNLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDO1lBRXpDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFTSx3Q0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUV4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLCtDQUF5QixFQUFFLENBQUM7WUFDN0MsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVPLDJDQUFZLEdBQXBCLFVBQXFCLE1BQWlDO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUdMLDJCQUFDO0FBQUQsQ0FBQyxBQXhGRCxDQUEwQyx1QkFBVSxHQXdGbkQ7QUF4Rlksb0RBQW9CO0FBMEZqQyxJQUFJLEdBQUcsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7QUFDckMsbUVBQW1FO0FBQ3hELFFBQUEsY0FBYyxHQUFHLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztBQUNsRCxRQUFBLFFBQVEsR0FBRyxVQUFBLElBQUksSUFBSSxPQUFBLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlLCBTaG93bk1vZGFsbHlEYXRhLCBOYXZpZ2F0ZWREYXRhIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xuaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG4vL2ltcG9ydCB7VGV4dEZpZWxkfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuLy9pbXBvcnQge0l0ZW1FdmVudERhdGF9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcbmltcG9ydCB7IFNjcmVlbkl0ZW0gfSBmcm9tIFwiLi9tb2RlbC9zY3JlZW5JdGVtXCI7XG5pbXBvcnQgeyBMaW5rUGlja2VyQ2xvc2VkRXZlbnRBcmdzIH0gZnJvbSBcIi4vY29tbW9uL2V2ZW50cy9saW5rUGlja2VyRXZlbnRBcmdzXCI7XG5pbXBvcnQgZ2xvYmFsTW9kdWxlID0gcmVxdWlyZShcIi4vY29tbW9uL215Z2xvYmFsXCIpO1xuXG5leHBvcnQgY2xhc3MgTGlua1BpY2tlckNvbnRyb2xsZXIgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgcGFnZTogUGFnZTtcbiAgICBwcml2YXRlIGNsb3NlQ2FsbGJhY2s6IChhcmdzOiBMaW5rUGlja2VyQ2xvc2VkRXZlbnRBcmdzKSA9PiB7fTtcbiAgICBwdWJsaWMgc2NyZWVuczogQXJyYXk8U2NyZWVuSXRlbT4gPSBbXTtcblxuICAgIC8qXG4gICAgICAgIHB1YmxpYyBvblNob3dpbmdNb2RhbGx5KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI+Pj4gbGlua1BpY2tlci5vblNob3dpbmdNb2RhbGx5XCIpO1xuICAgICAgICAgICAgdmFyIG1vZGFsUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgaWYgKG1vZGFsUGFnZS5pb3MgJiYgbW9kYWxQYWdlLmlvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID09PSBVSU1vZGFsUHJlc2VudGF0aW9uU3R5bGUuVUlNb2RhbFByZXNlbnRhdGlvbkZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+PiBTZXR0aW5nIG1vZGFsUGFnZS5pb3MubW9kYWxQcmVzZW50YXRpb25TdHlsZSB0byBVSU1vZGFsUHJlc2VudGF0aW9uU3R5bGUuVUlNb2RhbFByZXNlbnRhdGlvbk92ZXJGdWxsU2NyZWVuXCIpO1xuICAgICAgICAgICAgICAgIG1vZGFsUGFnZS5pb3MubW9kYWxQcmVzZW50YXRpb25TdHlsZSA9IFVJTW9kYWxQcmVzZW50YXRpb25TdHlsZS5VSU1vZGFsUHJlc2VudGF0aW9uT3ZlckZ1bGxTY3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgIHB1YmxpYyBvblNob3duTW9kYWxseShhcmdzOiBTaG93bk1vZGFsbHlEYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGA+Pj4gbGlua1BpY2tlci5vblNob3duTW9kYWxseSwgY29udGV4dDogJHthcmdzLmNvbnRleHR9YCk7XG5cbiAgICAgICAgdGhpcy5zZXQoXCJzZWxlY3RlZFNjcmVlbk5hbWVcIiwgYXJncy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSA8KGFyZ3M6IExpbmtQaWNrZXJDbG9zZWRFdmVudEFyZ3MpID0+IHt9PmFyZ3MuY2xvc2VDYWxsYmFjaztcbiAgICAgICAgdmFyIG1vZGFsUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIGlmIChmcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2UubW9kYWwgIT09IGFyZ3Mub2JqZWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5jdXJyZW50UGFnZS5tb2RhbC5pZDogJHtmcmFtZU1vZHVsZS50b3Btb3N0KCkuY3VycmVudFBhZ2UubW9kYWwuaWR9OyBtb2RhbFBhZ2UuaWQ6ICR7bW9kYWxQYWdlLmlkfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIj4+PiBsaW5rUGlja2VyLm9uTG9hZGVkXCIpO1xuICAgICAgICB0aGlzLnBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICAgICAgdGhpcy5zY3JlZW5zID0gZ2xvYmFsTW9kdWxlLnNjcmVlbnM7XG4gICAgICAgIHRoaXMucGFnZS5iaW5kaW5nQ29udGV4dCA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5wYWdlLmFuaW1hdGUoe1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0xMDAwIH0sXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbGlzdFZpZXdJdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IGFyZ3MuaW5kZXg7XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkU2NyZWVuID0gdGhpcy5zY3JlZW5zW2l0ZW1JbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0Vmlld0l0ZW1UYXAgaWR4OiAnICsgaXRlbUluZGV4KTtcbiAgICAgICAgdGhpcy5zZXQoXCJzZWxlY3RlZFNjcmVlbk5hbWVcIiwgc2VsZWN0ZWRTY3JlZW4ubmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbmNlbFRhcChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+IGxpbmtQaWNrZXIuY2FuY2VsVGFwXCIpO1xuICAgICAgICBpZiAodGhpcy5jbG9zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgbHBBcmdzID0gbmV3IExpbmtQaWNrZXJDbG9zZWRFdmVudEFyZ3MoKTtcbiAgICAgICAgICAgIGxwQXJncy5jYW5jZWxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc01vZGFsKGxwQXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZG9uZVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPj4+IGxpbmtQaWNrZXIuZG9uZVRhcFwiKTtcblxuICAgICAgICBpZiAodGhpcy5jbG9zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRTY3JlZW5OYW1lID0gdGhpcy5nZXQoXCJzZWxlY3RlZFNjcmVlbk5hbWVcIik7XG4gICAgICAgICAgICB2YXIgbHBBcmdzID0gbmV3IExpbmtQaWNrZXJDbG9zZWRFdmVudEFyZ3MoKTtcbiAgICAgICAgICAgIGxwQXJncy5zZWxlY3RlZE5hbWUgPSBzZWxlY3RlZFNjcmVlbk5hbWU7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc01vZGFsKGxwQXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI+Pj4gbGlua1BpY2tlci5kZWxldGVUYXBcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VDYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGxwQXJncyA9IG5ldyBMaW5rUGlja2VyQ2xvc2VkRXZlbnRBcmdzKCk7XG4gICAgICAgICAgICBscEFyZ3MubGlua0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzTW9kYWwobHBBcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGlzbWlzc01vZGFsKGxwQXJnczogTGlua1BpY2tlckNsb3NlZEV2ZW50QXJncykge1xuICAgICAgICB0aGlzLmNsb3NlQ2FsbGJhY2sobHBBcmdzKTtcbiAgICB9XG5cblxufVxuXG52YXIgbHBjID0gbmV3IExpbmtQaWNrZXJDb250cm9sbGVyKCk7XG4vL2V4cG9ydCB2YXIgb25TaG93aW5nTW9kYWxseSA9IGFyZ3MgPT4gbHBjLm9uU2hvd2luZ01vZGFsbHkoYXJncyk7XG5leHBvcnQgdmFyIG9uU2hvd25Nb2RhbGx5ID0gYXJncyA9PiBscGMub25TaG93bk1vZGFsbHkoYXJncyk7XG5leHBvcnQgdmFyIG9uTG9hZGVkID0gYXJncyA9PiBscGMub25Mb2FkZWQoYXJncyk7XG4iXX0=