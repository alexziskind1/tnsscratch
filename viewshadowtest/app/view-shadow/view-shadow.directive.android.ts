import { Directive, ElementRef } from '@angular/core';
import { View } from 'ui/core/view';
import { ViewShadowBaseDirective } from './view-shadow-base.directive';
import { Color } from 'color';

@Directive({
    selector: '[shadow]'
})
export class ViewShadowDirective extends ViewShadowBaseDirective {
    constructor(protected el: ElementRef) {
        super(el);
    }

    protected displayShadowOn(view: View) {
        const nativeView = view.android;
        nativeView.setShadowLayer(
            10.0,
            this.shadowOffset,
            this.shadowOffset,
            this.shadowColor.android
        );
    }
}