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
        return new Color('#888888');
    }

    protected get shadowOffset(): number {
        return 5.0;
    }

    constructor(protected el: ElementRef) {
    }

    public ngOnInit() {
        this.displayShadowOn(this.view);
    }

    protected abstract displayShadowOn(view: View);
}