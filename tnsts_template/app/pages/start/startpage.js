var observable_1 = require("data/observable");
var StartPageController = (function (_super) {
    __extends(StartPageController, _super);
    function StartPageController() {
        _super.apply(this, arguments);
        this.counter = 42;
    }
    StartPageController.prototype.pageLoaded = function (args) {
        var page = args.object;
        page.bindingContext = this;
    };
    StartPageController.prototype.tapAction = function () {
        this.counter++;
        this.set("message", this.counter + " taps");
    };
    return StartPageController;
})(observable_1.Observable);
var spc = new StartPageController();
exports.pageLoaded = function (args) { return spc.pageLoaded(args); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnRwYWdlLnRzIl0sIm5hbWVzIjpbIlN0YXJ0UGFnZUNvbnRyb2xsZXIiLCJTdGFydFBhZ2VDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiU3RhcnRQYWdlQ29udHJvbGxlci5wYWdlTG9hZGVkIiwiU3RhcnRQYWdlQ29udHJvbGxlci50YXBBY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLDJCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3REO0lBQWtDQSx1Q0FBVUE7SUFBNUNBO1FBQWtDQyw4QkFBVUE7UUFDaENBLFlBQU9BLEdBQVdBLEVBQUVBLENBQUNBO0lBV2pDQSxDQUFDQTtJQVRVRCx3Q0FBVUEsR0FBakJBLFVBQWtCQSxJQUFlQTtRQUM3QkUsSUFBSUEsSUFBSUEsR0FBU0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDN0JBLElBQUlBLENBQUNBLGNBQWNBLEdBQUdBLElBQUlBLENBQUNBO0lBQy9CQSxDQUFDQTtJQUVNRix1Q0FBU0EsR0FBaEJBO1FBQ0lHLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO1FBQ2ZBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUtBLElBQUlBLENBQUNBLE9BQU9BLFVBQU9BLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUNMSCwwQkFBQ0E7QUFBREEsQ0FBQ0EsQUFaRCxFQUFrQyx1QkFBVSxFQVkzQztBQUVELElBQUksR0FBRyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUNwQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyJ9