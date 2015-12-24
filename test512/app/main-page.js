var gestures = require("ui/gestures");

var layoutBase, lblMyLabel;

function pageLoaded(args) {
    debugger;
    var page = args.object;
     getViewRefs(page);
    setupHandlers();
}
exports.pageLoaded = pageLoaded;

function getViewRefs(page) {
    layoutBase = page.getViewById("layoutBase");
    lblMyLabel = page.getViewById("lblMyLabel");
}

function setupHandlers() {
    layoutBase.on(gestures.GestureTypes.pan, function (arg1, arg2, arg3, arg4) {
        debugger;
    });
}