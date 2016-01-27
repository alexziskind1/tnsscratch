import {View} from "ui/core/view";


export function fadeIn(view: View, duration: number) : Promise<void> {
        return view.animate({
            opacity: 1,
            duration: duration
        });
}

export function fadeOut(view: View, duration: number) : Promise<void> {
        return view.animate({
            opacity: 0,
            duration: duration
        });
}
