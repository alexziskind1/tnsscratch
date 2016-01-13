var page1_view_model_1 = require("./page1-view-model");
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
var viewModel = new page1_view_model_1.HelloWorldModel(topmost);
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
