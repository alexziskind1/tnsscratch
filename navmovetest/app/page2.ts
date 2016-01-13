import {Page2Model} from "./page2-view-model";

import pageModule from "ui/page";

var viewModel = new Page2Model();

export function pageLoaded(args) {
    var page = <pageModule.Page>args.object;
    page.bindingContext = viewModel;
}
