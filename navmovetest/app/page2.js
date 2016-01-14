var page2_view_model_1 = require("./page2-view-model");
var viewModel = new page2_view_model_1.Page2Model();
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
