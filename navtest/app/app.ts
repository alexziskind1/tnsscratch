import applicationModule = require("application");
import navigationModule = require("./shared/navigation");

applicationModule.mainModule = navigationModule.navigation.startingPage();
applicationModule.cssFile = "./app.css";
applicationModule.start();