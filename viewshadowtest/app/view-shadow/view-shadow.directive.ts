import { View } from 'ui/core/view';
import { ViewShadowBaseDirective } from './view-shadow-base.directive';

export declare class ViewShadowDirective extends ViewShadowBaseDirective {
    constructor(view: View);
    protected displayShadowOn(view: View);
}