import {Size} from "../common/geometry";
import {ScreenItem} from "../model/screenItem";

export var firstLoad: boolean = true;
export var pageSize: Size = new Size(0,0);

export var screens: Array<ScreenItem> = [
    new ScreenItem('page1'),
    new ScreenItem('page2'),
    new ScreenItem('pageHome'),
    new ScreenItem('pageMe')
];

    /*
     "page1", "page2", "pageHome", "pageMe", "page3", "page4","page5","page6","page7","page8","page9","page10","page11","page12","page13","page14","page15","page16","page17","page18","page19", ];
     */