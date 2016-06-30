"use strict";
var observable_1 = require("data/observable");
var navigationModule = require('./shared/navigation');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this.counter = 42;
        this.message = '';
        this.message = this.getMessage(this.counter);
    }
    MainViewModel.prototype.onTap = function () {
        this.counter--;
        this.set("message", this.getMessage(this.counter));
        navigationModule.goToMainPage();
    };
    MainViewModel.prototype.getMessage = function (counter) {
        if (counter <= 0) {
            return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
        }
        else {
            return counter + " taps left";
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map