import { Directive, OnInit, ElementRef } from '@angular/core';
import { View } from 'ui/core/view';
import { Observable } from 'data/observable';
import { Color } from 'color';

@Directive({
    selector: '[shadow]'
})

export abstract class ViewShadowBaseDirective implements OnInit {

    private get view(): View {
        return this.el.nativeElement;
    }

    protected get shadowColor(): Color {
        return new Color('#FF00FF');
    }

    protected get shadowOffset(): number {
        return 5.0;
    }

    constructor(protected el: ElementRef) {
        console.log('ViewShadowBaseDirective constr');
        this.view.on(Observable.propertyChangeEvent, () => {
            console.log('propertyChangeEvent');
            console.log('view measured height after change: ' + this.view.getMeasuredHeight());
            /*
        if (this.label.text !== undefined) {
            this.displayShadowOn(this.label);
        }
        */
        });
        console.log('view measured height: ' + this.view.getMeasuredHeight());
        /*
        this.view.on('loaded', () => {
            console.log('loaded in constr');
        });
        this.view.onLoaded = () => {
            console.log('onLoaded in constr');
        };
        */
    }

    public ngOnInit() {
        this.displayShadowOn(this.view);
    }

    protected abstract displayShadowOn(view: View);
}