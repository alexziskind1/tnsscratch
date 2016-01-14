import applicationModule = require("application");
import navigationModule = require("./shared/navigation");
import navDataConverter = require("./shared/navDataConverter");

applicationModule.mainModule = navigationModule.navigation.rootPage();
applicationModule.cssFile = "./app.css";


applicationModule.on(applicationModule.launchEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);

        var navPages = navDataConverter.convertNavDataToObjects();

    }
});


applicationModule.start();