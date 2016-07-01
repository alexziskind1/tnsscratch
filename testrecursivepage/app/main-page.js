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
    //var newpage = <Page>clone(page);
    //var newpage: Page;
    //newpage = extend(page, newpage);
    var newpage = Object.create(page);
    newpage.bindingContext = null;
    return newpage;
};
function onTap() {
    navigationModule.navigateByFunc(factoryFunc);
}
exports.onTap = onTap;
function extend(from, to) {
    if (from == null || typeof from != "object")
        return from;
    if (from.constructor != Object && from.constructor != Array)
        return from;
    if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
        from.constructor == String || from.constructor == Number || from.constructor == Boolean)
        return new from.constructor(from);
    to = to || new from.constructor();
    for (var name in from) {
        to[name] = typeof to[name] == "undefined" ? extend(from[name], null) : to[name];
    }
    return to;
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
            if (temp) {
                //var tempPropDescriptor = Object.getOwnPropertyDescriptor(temp, key);
                //if (tempPropDescriptor.writable) {
                temp[key] = clone(obj[key]);
            }
            delete obj['isActiveClone'];
        }
    }
    return temp;
}
//# sourceMappingURL=main-page.js.map