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
    var newpage = <Page>clone(page);
    newpage.bindingContext = null;
    return newpage;
};

function onTap() {
    navigationModule.navigateByFunc(factoryFunc);
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
          temp[key] = clone(obj[key]);
          delete obj['isActiveClone'];
        }
      }

      return temp;
}