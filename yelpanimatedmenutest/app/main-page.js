var gestures = require("ui/gestures");
var animationModule = require("ui/animation");
var animationSpringModule = require("nativescript-animation-spring");

var vScroll, vBtnWrapper, vBtnOpen, vBtnClose, vReview, vCheckIn, vPhoto, vNearby, vBlur, imgNearby, imgBlur, imgPhoto, brBar, lblHi, pageHeight, pageWidth;

function pageLoaded(args) { 
    var page = args.object;

    getViewRefs(page);
    initViews(page);
    setupHandlers();
}
exports.pageLoaded = pageLoaded;

function getViewRefs(page) {
    vScroll = page.getViewById("vScroll");
    vBtnWrapper = page.getViewById("vBtnWrapper");
    vBtnOpen = page.getViewById("vBtnOpen");
    vBtnClose = page.getViewById("vBtnClose");
    vReview = page.getViewById("vReview");
    vCheckIn = page.getViewById("vCheckIn");
    vPhoto = page.getViewById("vPhoto");

    lblHi = page.getViewById("lblHi");

    imgNearby = page.getViewById("imgNearby");
    imgBlur = page.getViewById("imgBlur");
    imgPhoto = page.getViewById("imgPhoto");
    brBar = page.getViewById("brBar");
}

function initViews(page) {
    pageHeight = page.getMeasuredHeight();
    pageWidth = page.getMeasuredWidth();
    vBtnClose.translateY = 100;
    vReview.translateY = 100;
    vReview.scaleX = .2;
    vReview.scaleY = .2;
    vCheckIn.translateX = 0;
    vCheckIn.translateY = 100;
    vPhoto.translateX = 0;
    vPhoto.translateY = 100; 

    imgNearby.width = pageWidth;
    imgBlur.width = pageWidth;
    imgBlur.opacity = 0.1;

    brBar.width = pageWidth + 10;
    brBar.style.marginTop = pageHeight - 50;
    brBar.style.marginLeft = -5;

    vScroll.style.height = pageHeight - 50;
}

function setupHandlers() {
    //Open button tap handler
    vBtnOpen.on(gestures.GestureTypes.tap, function (args) {

        vReview.animate({
            translate: {
                x: 0,
                y: -100
            },
            scale: {
                x: 1,
                y: 1
            },
            duration: 500,
            delay: 0,
            dampingRatio: 0.6,
            velocity: 0.4,
            options: null,
            curve: "spring"
        })
        .then(function(){
            console.log('animation done');
        });


        vBtnOpen.animate({
                translate: {
                    x: 0,
                    y: -45
                },
                duration: 100,
                opacity: 0
            })
            .then(function () {
                return vBtnClose.animate({
                    translate: {
                        x: 0,
                        y: 0
                    },
                    duration: 150
                });
            });

        var definitions = new Array();

        var avCheckIn = {
            target: vCheckIn,
            translate: {
                x: -60,
                y: -80
            },
            duration: 200
        };
        definitions.push(avCheckIn);

        var avPhoto = {
            target: vPhoto,
            translate: {
                x: 80,
                y: -80
            },
            duration: 200
        };
        definitions.push(avPhoto);

        var aImgBlur = {
            target: imgBlur,
            opacity: 1,
            duration: 200
        };
        definitions.push(aImgBlur);

        var animationSet = new animationModule.Animation(definitions);
        animationSet.play().finished.then(function () {
                console.log("Animation finished");
            })
            .catch(function (e) {
                console.log(e.message);
            });
    });
    
    //Close button tap handler
    vBtnClose.on(gestures.GestureTypes.tap, function (args) {

         vReview.animate({
            translate: {
                x: 0,
                y: 100
            },
            scale: {
                x: 0.2,
                y: 0.2
            },
            duration: 300,
            delay: 0,
            dampingRatio: 0.7,
            velocity: 0.4,
            options: null,
            curve: "spring"
        })
        .then(function(){
            console.log('animation done');
        });
        
        
        vBtnClose.animate({
                translate: {
                    x: 0,
                    y: 100
                },
                duration: 150
            })
            .then(function () {
                return vBtnOpen.animate({
                    translate: {
                        x: 0,
                        y: 5
                    },
                    scale: {
                        x: 1.2,
                        y: 1.2
                    },
                    opacity: 1,
                    duration: 100
                });
            })
            .then(function () {
                return vBtnOpen.animate({
                    translate: {
                        x: 0,
                        y: 0
                    }
                });
            })

        var definitions = new Array();

        var avCheckIn = {
            target: vCheckIn,
            translate: {
                x: 0,
                y: 100
            },
            duration: 200
        };
        definitions.push(avCheckIn);

        var avPhoto = {
            target: vPhoto,
            translate: {
                x: 0,
                y: 100
            },
            duration: 200
        };
        definitions.push(avPhoto);

        var aImgBlur = {
            target: imgBlur,
            opacity: 0.1,
            duration: 300
        };
        definitions.push(aImgBlur);

        var animationSet = new animationModule.Animation(definitions);
        animationSet.play().finished.then(function () {
                console.log("Animation finished");
            })
            .catch(function (e) {
                console.log(e.message);
            });

    });
}
