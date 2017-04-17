import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { ListView } from 'ui/list-view';
import { HelloWorldModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    let listView = <ListView>page.getViewById('myListView');
    page.bindingContext = new HelloWorldModel(listView);
}