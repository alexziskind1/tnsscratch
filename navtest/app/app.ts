import "./bundle-config";
import * as app from 'application';

import navigationModule = require("./common/navigation");
import navDataConverter = require("./data/navDataConverter");



app.on(app.launchEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);

        var navPages = navDataConverter.convertNavDataToObjects();
    }
});

app.start({ moduleName: navigationModule.navigation.rootPage() });
