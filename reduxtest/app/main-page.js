var redux = require("redux");
var createStore = redux.createStore;
var actionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
};
var counter = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
var sdfdsf = function (state, action) {
};
var store = createStore(counter);
var lblMessage;
var MainPageController = (function () {
    function MainPageController() {
    }
    //private lblMessage: Label;
    MainPageController.prototype.pageLoaded = function (args) {
        this.page = args.object;
        lblMessage = this.page.getViewById("lblMessage");
        store.subscribe(this.updateLabel);
    };
    MainPageController.prototype.tapPlus = function () {
        store.dispatch({ type: actionTypes.INCREMENT });
    };
    MainPageController.prototype.tapMinus = function () {
        store.dispatch({ type: actionTypes.INCREMENT });
    };
    MainPageController.prototype.updateLabel = function (message) {
        var state = store.getState();
        lblMessage.text = state + " yay!";
    };
    return MainPageController;
})();
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
exports.tapPlus = function () { return mpc.tapPlus(); };
exports.tapMinus = function () { return mpc.tapMinus(); };
