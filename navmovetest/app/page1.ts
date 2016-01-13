import {HelloWorldModel} from "./page1-view-model";
import {Page} from "ui/page";

import frameModule = require("ui/frame");
var topmost = frameModule.topmost();


var viewModel = new HelloWorldModel(topmost);


export function pageLoaded(args) {
    var page = <Page>args.object;
    page.bindingContext = viewModel;
}
