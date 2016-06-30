import * as frameModule from 'ui/frame';

export function goToMainPage() {
    var navEntry: frameModule.NavigationEntry = {
        moduleName: 'main-page',
        context: null,
        clearHistory: false
    };
    frameModule.topmost().navigate(navEntry);
}

export function navigateByFunc(func) {
    frameModule.topmost().navigate(func);
}