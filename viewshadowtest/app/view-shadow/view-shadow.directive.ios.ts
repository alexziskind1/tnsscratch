import { Directive, ElementRef } from '@angular/core';
import { View } from 'ui/core/view';
import { Observable } from 'data/observable';
import { ViewShadowBaseDirective } from './view-shadow-base.directive';
import { Color } from 'color';

declare const CGSizeMake: any;

@Directive({
    selector: '[shadow]'
})
export abstract class ViewShadowDirective extends ViewShadowBaseDirective {

    constructor(protected el: ElementRef) {
        super(el);
        console.log('ViewShadowDirective constr');
    }

    protected displayShadowOn(view: View) {
        console.log('displayShadowOn view2');
        const nativeView = view.ios;
        nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
        nativeView.layer.shadowOffset = CGSizeMake(this.shadowOffset, this.shadowOffset);
        nativeView.layer.shadowOpacity = 1.0;
        nativeView.layer.shadowRadius = 2.0;
    }
}