import {Observable, EventData} from "data/observable";
import {Page, ShownModallyData, NavigatedData, ItemEventData, TextField} from "ui";
import frameModule = require("ui/frame");

//import {TextField} from "ui/text-field";
//import {ItemEventData} from "ui/list-view";
import {ScreenItem} from "./model/screenItem";
import {LinkPickerClosedEventArgs} from "./common/events/linkPickerEventArgs";
import globalModule = require("./common/myglobal");

export class LinkPickerController extends Observable {

    private page: Page;
    private closeCallback: (args: LinkPickerClosedEventArgs)=>{};
    public screens: Array<ScreenItem> = [];

/*
    public onShowingModally(args: EventData) {
        console.log(">>> linkPicker.onShowingModally");
        var modalPage = <Page>args.object;
        if (modalPage.ios && modalPage.ios.modalPresentationStyle === UIModalPresentationStyle.UIModalPresentationFullScreen) {
            console.log(">>> Setting modalPage.ios.modalPresentationStyle to UIModalPresentationStyle.UIModalPresentationOverFullScreen");
            modalPage.ios.modalPresentationStyle = UIModalPresentationStyle.UIModalPresentationOverFullScreen;
        }
    }
    */

    public onShownModally(args: ShownModallyData) {
        console.log(`>>> linkPicker.onShownModally, context: ${args.context}`);

        this.set("selectedScreenName", args.context);

        this.closeCallback = <(args: LinkPickerClosedEventArgs)=>{}>args.closeCallback;
        var modalPage = <Page>args.object;

        if (frameModule.topmost().currentPage.modal !== args.object) {
            throw new Error(`frameModule.topmost().currentPage.modal.id: ${frameModule.topmost().currentPage.modal.id}; modalPage.id: ${modalPage.id}`);
        }
    }

    public onLoaded(args: EventData) {
        console.log(">>> linkPicker.onLoaded");
        this.page = <Page>args.object;
        this.screens = globalModule.screens;
        this.page.bindingContext = this;

        this.page.animate({
            translate: { x: 0, y: -1000 },
            opacity: 1,
            duration: 300
        });
    }

    public listViewItemTap(args: ItemEventData) {
        var itemIndex = args.index;

        var selectedScreen = this.screens[itemIndex];
        console.log('listViewItemTap idx: ' + itemIndex);
        this.set("selectedScreenName", selectedScreen.name);
    }

    public doneTap(args) {
        console.log(">>> linkPicker.doneTap");

        if (this.closeCallback) {
            var selectedScreenName = this.get("selectedScreenName");

            var lpArgs = new LinkPickerClosedEventArgs();
            lpArgs.selectedName = selectedScreenName;

            this.closeCallback(lpArgs);
        }
        else {
            frameModule.topmost().goBack();
        }
    }

    public deleteTap(args) {
        console.log(">>> linkPicker.deleteTap");

        if (this.closeCallback) {
            var selectedScreenName = this.get("selectedScreenName");

            var lpArgs = new LinkPickerClosedEventArgs();
            lpArgs.linkDeleted = true;

            this.closeCallback(lpArgs);
        }
        else {
            frameModule.topmost().goBack();
        }
    }


}

var lpc = new LinkPickerController();
//export var onShowingModally = args => lpc.onShowingModally(args);
export var onShownModally = args => lpc.onShownModally(args);
export var onLoaded = args => lpc.onLoaded(args);
