import frameModule = require("ui/frame");
import {NavigationBarVisibility} from "ui/enums";

var token = true;

export var navigation =  {
	goToPage1: function() {
        var topFrame = frameModule.topmost();
        
        topFrame.ios.navBarVisibility = NavigationBarVisibility.never;
        
		topFrame.navigate({
            moduleName: "views/page1/page1",
            clearHistory: false
        });
	},
    goToPage2: function() {
        var topFrame = frameModule.topmost();
        topFrame.ios.navBarVisibility = NavigationBarVisibility.never;
		topFrame.navigate({
            moduleName: "views/page2/page2",
            clearHistory: false
        });
	},
	goToRegisterPage: function() {
		frameModule.topmost().navigate("views/register/register");
	},
	goToPasswordPage: function() {
		frameModule.topmost().navigate("views/password/password");
	},
	goToListPage: function() {
		frameModule.topmost().navigate({
			moduleName: "views/list/list",
			clearHistory: true
		});
	},
	signOut: function() {
		//config.invalidateToken();
		frameModule.topmost().navigate({
			moduleName: "views/login/login",
			animated: false,
			clearHistory: true
		});
	},
	startingPage: function() {
		return token ? "views/page1/page1" : "views/login/login";
	}
};
