var GesturesModule = require("ui/gestures");
var ImageModule = require("ui/image");
var ImageSourceModule = require("image-source");
var ColorModule = require("color");
var EnumsModule = require("ui/enums");
var vmModule = require("./main-view-model");
var AbsoluteLayoutModule = require("ui/layouts/absolute-layout");
var AppNavDataModule = require("./app-nav-data");


var layoutBase, lblMyLabel, imgMy;

function pageLoaded(args) {
    var page = args.object;
    //page.bindingContext = vmModule.mainViewModel;

    getViewRefs(page);
    setupHandlers();


}
exports.pageLoaded = pageLoaded;

function getViewRefs(page) {
    layoutBase = page.getViewById("layoutBase");
    lblMyLabel = page.getViewById("lblMyLabel");

    imgMy = page.getViewById("imgMy");
}

var startPoint = { x: 0, y: 0};
var rect = { origin: {x: 0, y: 0}, size: { width: 0, height: 0 } };

function setupHandlers() {
    layoutBase.on(GesturesModule.GestureTypes.pan, function (arg1, arg2, arg3, arg4) {

        if (arg1.state == UIGestureRecognizerState.Began) {
            rect.origin.x = arg1.ios.locationInView(arg1.ios.view).x;
            rect.origin.y = arg1.ios.locationInView(arg1.ios.view).y;
            startPoint.x = rect.origin.x;
            startPoint.y = rect.origin.y;
            rect.size.width = 0;
            rect.size.height = 0;
            drawRectUpdate();
        }
        else if (arg1.state == UIGestureRecognizerState.Changed) {

            if (arg1.deltaX < 0) {
                rect.size.width = Math.abs(arg1.deltaX);
                rect.origin.x = startPoint.x - rect.size.width;
            }
            else {
                rect.size.width = arg1.deltaX;
            }
            if (arg1.deltaY < 0) {
                rect.size.height = Math.abs(arg1.deltaY);
                rect.origin.y = startPoint.y - rect.size.height;
            }
            else {
                rect.size.height = arg1.deltaY;
            }

            if (rect.origin.x < 0)
                rect.origin.x = 0;
            if (rect.origin.y < 0)
                rect.origin.y = 0;

            drawRectUpdate();
        }
        else if (arg1.state == UIGestureRecognizerState.Ended) {
            saveSelection();
        }
     });
    layoutBase.on(GesturesModule.GestureTypes.tap, function (arg1, arg2, arg3, arg4) {
        clearSelection();
    });
}

var currentRect = new AbsoluteLayoutModule.AbsoluteLayout();
currentRect.id = "currentRect";
currentRect.style.backgroundColor = new ColorModule.Color("LightGray");


function saveSelection() {
    console.log(JSON.stringify(rect));
}

function clearSelection() {
    var ch = layoutBase.getChildById("currentRect");
    if (ch != null)
        layoutBase.removeChild(ch);
}

function drawRectUpdate() {
    AbsoluteLayoutModule.AbsoluteLayout.setTop(currentRect, rect.origin.y);
    AbsoluteLayoutModule.AbsoluteLayout.setLeft(currentRect, rect.origin.x);

    currentRect.width = rect.size.width;
    currentRect.height = rect.size.height;

    var ch = layoutBase.getChildById("currentRect");
    if (ch == null)
        layoutBase.addChild(currentRect);
}

function buttonTap() {
    imgMy.imageSource = ImageSourceModule.fromResource("page1.png");

    imgMy.stretch = EnumsModule.Stretch.aspectFill;
}

exports.buttonTap = buttonTap;
