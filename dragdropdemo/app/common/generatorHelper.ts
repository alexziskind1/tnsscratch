import {Color} from "color";
import {Point, Size} from "./geometry";

export function generateRandomColor() : Color {
    let blueValue = Math.floor(Math.random() * 255) + 1;
    let greenValue = Math.floor(Math.random() * 255) + 1;
    let redValue = Math.floor(Math.random() * 255) + 1;
    
    return new Color(255, redValue,greenValue,blueValue);
}

export function generateRandomPoint(inSize: Size) : Point {
    let pX = Math.floor(Math.random() * (inSize.width)) + 1;
    let pY = Math.floor(Math.random() * (inSize.height)) + 1;
    return new Point(pX, pY);
}