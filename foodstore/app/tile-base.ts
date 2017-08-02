import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { AnimationDefinition, CubicBezierAnimationCurve } from "tns-core-modules/ui/animation";

export function convertDirectionToAnimation(direction: string, offset: number): AnimationDefinition {
    let def: AnimationDefinition = {
        duration: 500,
        translate: { x: 0, y: 0 },
        curve: new CubicBezierAnimationCurve(0, .5, .5, 1)
    };
    switch (direction) {
        case 'down':
            def.translate = { x: 0, y: offset };
            break;
        case 'up':
            def.translate = { x: 0, y: -offset };
            break;
        case 'left':
            def.translate = { x: -offset, y: 0 };
            break;
        case 'right':
            def.translate = { x: offset, y: 0 };
            break;
        default:
            break;
    }
    return def;
}
