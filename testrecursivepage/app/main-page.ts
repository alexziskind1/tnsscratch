import { MainViewModel } from "./main-view-model";
import { Page } from 'ui/page';
import * as navigationModule from './shared/navigation';

var page: Page;
var a = 1;

export function onNavigatingTo(args) {
    page = <Page>args.object;
    page.bindingContext = new MainViewModel();
}

var factoryFunc = function () {
    //var newpage = <Page>clone(page);
    //var newpage: Page;
    //newpage = extend(page, newpage);
    var newpage = <Page>Object.create(page);
    newpage.bindingContext = null;
    return newpage;
};

export function onTap() {
    navigationModule.navigateByFunc(factoryFunc);
}


function extend(from, to) {
    if (from == null || typeof from != "object") return from;
    if (from.constructor != Object && from.constructor != Array) return from;
    if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
        from.constructor == String || from.constructor == Number || from.constructor == Boolean)
        return new from.constructor(from);

    to = to || new from.constructor();

    for (var name in from)
    {
        to[name] = typeof to[name] == "undefined" ? extend(from[name], null) : to[name];
    }

    return to;
}


function clone(obj) {
      if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
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
            //} else {
            //  tempPropDescriptor.writable = true;
            //  temp[key] = clone(obj[key]);
            //  tempPropDescriptor.writable = false;
            //}
          }
          
          delete obj['isActiveClone'];
        }
      }

      return temp;
}