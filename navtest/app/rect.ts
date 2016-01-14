import {Point} from "./point";
import {Size} from "./size";

export class Rect {
    public origin: Point;
    public size: Size;

    constructor(x: number,
                y: number,
                width: number,
                height: number) {
        this.origin = new Point(x, y);
        this.size = new Size(width, height);
    }

    public toPoints(): Array<Point> {
        return [ this.origin,
                 new Point(this.origin.x + this.size.width, this.origin.y),
                 new Point(this.origin.x + this.size.width, this.origin.y + this.size.height),
                 new Point(this.origin.x, this.origin.y + this.size.height)
        ];
    }
}