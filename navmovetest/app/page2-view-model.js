var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require("data/observable");
var Page2Model = (function (_super) {
    __extends(Page2Model, _super);
    function Page2Model() {
        _super.call(this);
        this.counter = 5;
        this.set("message", this.counter + " taps left");
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
})(observable_1.Observable);
exports.Page2Model = Page2Model;
;
