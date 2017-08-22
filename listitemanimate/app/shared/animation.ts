//import { Observable } from "rxjs/Observable";
//import { Scheduler } from "rxjs/Scheduler";
import { Observable, Scheduler } from "rxjs";
import { Point } from "ui/core/view/view";
/*import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
*/

export interface AniRange {
    from: number;
    to: number;
}

export const timeElapsed = Observable.defer(() => {
    const start = Scheduler.animationFrame.now();
    return Observable.interval(1)
        .map(() => Math.floor((Date.now() - start)));
});

export const duration = (totalMs) =>
    timeElapsed
        .map(elapsedMs => elapsedMs / totalMs)
        .takeWhile(t => t <= 1);

export const amount = (d) => (t) => t * d;
export const amountInverse = (d) => (t) => (1 - t) * d;

export const amountFromTo = (range: AniRange) =>
    (t) => range.from + t * (range.to - range.from);


export const elasticOut = (t) =>
    Math.sin(-13.0 * (t + 1.0) *
        Math.PI / 2) *
    Math.pow(2.0, -10.0 * t) +
    1.0;

const prevAndCurrent = (initialValue) => (source$) =>
    source$.startWith(initialValue)
        .bufferCount(2, 1);

export const tween = (ms, easing) => (source$) =>
    source$
        .let(prevAndCurrent(0))
        .switchMap(([p, n]) =>
            duration(ms)
                .map(easing)
                .map(amount(n - p))
                .map(v => n + v)
        );

////Clip paths polygon
export const mkPt = (x: number, y: number) => { return { x, y }; };

export const getClipPathValuePoly = (path: Point[]): string => {
    const pieces = [];
    for (let i = 0; i < path.length; i++) {
        pieces.push(`${path[i].x} ${path[i].y}`);
    }
    return `polygon(${pieces.join(', ')})`;
};

export const transformPointPoly = (point: Point) =>
    (amtX: number = 0, amtY: number = 0) =>
        ({ x: point.x + amtX, y: point.y + amtY });


export const transformPathPoly = (path: Point[]) => {
    return (amtX: number = 0, amtY: number = 0) => {
        //console.log(`amtX: ${amtX} , amtY: ${amtY}`);
        return path.map(p => transformPointPoly(p)(amtX, amtY));
    };
};

export const clipPathValueToArrayPoly = (polygon: string): Point[] => {
    const vals = polygon.substring(polygon.indexOf('(') + 1, polygon.indexOf(')'));
    const pointStrings = vals.split(',').filter(x => x);
    return pointStrings.map(pStr => {
        const ptParts = pStr.replace(/\%/g, '').split(' ').filter(x => x);
        return mkPt(parseInt(ptParts[0]), parseInt(ptParts[1]));
    });
};

////Clip paths inset
export const clipPathValueToArrayInset = (clipPathInset: string): number[] => {
    const vals = clipPathInset.substring(clipPathInset.indexOf('(') + 1, clipPathInset.indexOf(')'));
    const valStrings = vals.split(' ').filter(x => x);
    return valStrings.map(pStr => parseInt(pStr));
};

export const transformValInset = (val: number) => (amt: number = 0) => val + amt;

export const transformPathInset = (path: number[]) => {
    return (amt: number = 0) => {
        return path.map(val => transformValInset(val)(amt));
    };
};
export const getClipPathValueInset = (path: number[]): string => `inset(${path.join(' ')})`;

