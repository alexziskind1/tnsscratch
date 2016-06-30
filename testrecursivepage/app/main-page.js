"use strict";
var main_view_model_1 = require("./main-view-model");
var navigationModule = require('./shared/navigation');
var page;
var a = 1;
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = new main_view_model_1.MainViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
var factoryFunc = function () {
    var newpage = clone(page);
    newpage.bindingContext = null;
    return newpage;
};
function onTap() {
    navigationModule.navigateByFunc(factoryFunc);
}
function clone(obj) {
    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
        return obj;
    if (obj instanceof Date)
        var temp = new obj.constructor(); //or new Date(obj);
    else
        var temp = obj.constructor();
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
}
//# sourceMappingURL=main-page.js.map