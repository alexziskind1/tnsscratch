function fadeIn(view, duration) {
    return view.animate({
        opacity: 1,
        duration: duration
    });
}
exports.fadeIn = fadeIn;
function fadeOut(view, duration) {
    return view.animate({
        opacity: 0,
        duration: duration
    });
}
exports.fadeOut = fadeOut;
