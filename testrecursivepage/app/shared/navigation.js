"use strict";
var frameModule = require('ui/frame');
function goToMainPage() {
    var navEntry = {
        moduleName: 'main-page',
        context: null,
        clearHistory: false
    };
    frameModule.topmost().navigate(navEntry);
}
exports.goToMainPage = goToMainPage;
function navigateByFunc(func) {
    frameModule.topmost().navigate(func);
}
exports.navigateByFunc = navigateByFunc;
//# sourceMappingURL=navigation.js.map