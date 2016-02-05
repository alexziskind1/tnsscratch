var color_1 = require("color");
var geometry_1 = require("./geometry");
function generateRandomColor() {
    var blueValue = Math.floor(Math.random() * 255) + 1;
    var greenValue = Math.floor(Math.random() * 255) + 1;
    var redValue = Math.floor(Math.random() * 255) + 1;
    return new color_1.Color(255, redValue, greenValue, blueValue);
}
exports.generateRandomColor = generateRandomColor;
function generateRandomPoint(inSize) {
    var pX = Math.floor(Math.random() * (inSize.width)) + 1;
    var pY = Math.floor(Math.random() * (inSize.height)) + 1;
    return new geometry_1.Point(pX, pY);
}
exports.generateRandomPoint = generateRandomPoint;
