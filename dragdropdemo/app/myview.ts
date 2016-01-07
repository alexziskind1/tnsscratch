import viewModule = require("ui/core/view");
import gesturesModule = require("ui/gestures");

export class MyView extends viewModule.View {


    constructor() {

        var options: viewModule.Options = {
            height:50,
            width :50,
            marginLeft: 0,
            marginRight: 60,
             marginTop: 2,
             marginBottom: 70,
             className: 'myview'
        };

        super(options);

    }

}