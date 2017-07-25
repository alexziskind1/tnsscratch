import frameModule = require("ui/frame");
import { NavigationBarVisibility } from "ui/enums";
import { NavPage } from "../model/navPage";


var token = true;
export var navPages: Array<NavPage> = [];

export var navigation = {
    goToRoot: function (newPage: NavPage) {
        var topFrame = frameModule.topmost();

        topFrame.ios.navBarVisibility = "never";

        topFrame.navigate({
            moduleName: "rootPage",
            context: newPage,
            clearHistory: false
        });
    },
    goBack: function () {
        var topFrame = frameModule.topmost();
        topFrame.goBack();
    },
    goToPage1: function () {
        var topFrame = frameModule.topmost();

        topFrame.ios.navBarVisibility = "never";

        topFrame.navigate({
            moduleName: "views/page1/page1",
            clearHistory: false
        });
    },
    goToPage2: function () {
        var topFrame = frameModule.topmost();
        topFrame.ios.navBarVisibility = "never";
        topFrame.navigate({
            moduleName: "views/page2/page2",
            clearHistory: false
        });
    },
    goToRegisterPage: function () {
        frameModule.topmost().navigate("views/register/register");
    },
    goToPasswordPage: function () {
        frameModule.topmost().navigate("views/password/password");
    },
    goToListPage: function () {
        frameModule.topmost().navigate({
            moduleName: "views/list/list",
            clearHistory: true
        });
    },
    signOut: function () {
        //config.invalidateToken();
        frameModule.topmost().navigate({
            moduleName: "views/login/login",
            animated: false,
            clearHistory: true
        });
    },
    rootPage: function () {
        //return token ? "views/page1/page1" : "views/login/login";
        return "rootPage";
    },
    startPage: function () {
        return navPages[0];
    },
    getPageByName: function (name: string): NavPage {
        return navPages.filter(p => p.name == name).pop();
    }
};
