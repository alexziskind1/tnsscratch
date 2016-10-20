import { Component, ElementRef, ViewChild } from "@angular/core";
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import { View } from 'ui/core/view';


@Component({
    moduleId: module.id,
    selector: "modal-box",
    templateUrl: "modal-box.component.html",
    styleUrls: ["modal-box.component.css"]
})
export class ModalBoxComponent {



    @ViewChild("navIcon1") navIcon1: ElementRef;
    @ViewChild("navIcon2") navIcon2: ElementRef;
    @ViewChild("navIcon3") navIcon3: ElementRef;
    @ViewChild("navIcon4") navIcon4: ElementRef;


    public navIcon1Tap() {
        let navIcon1 = <View>this.navIcon1.nativeElement;
        this.toggleClassOnView(navIcon1, 'open', '');
    }

    public navIcon2Tap() {
        let navIcon2 = <View>this.navIcon2.nativeElement;
        this.toggleClassOnView(navIcon2, 'open', '');
    }
    public navIcon3Tap() {
        let navIcon3 = <View>this.navIcon2.nativeElement;
        this.toggleClassOnView(navIcon3, 'open', '');
    }
    public navIcon4Tap() {
        let navIcon4 = <View>this.navIcon4.nativeElement;
        this.toggleClassOnView(navIcon4, 'open', '');
    }

    private toggleClassOnView(view: View, className1: string, className2: string) {
        console.log('start toggleClassName:' + view.className);
        var newClassName = view.className.trim();
        if (view.className.indexOf(className1) >= 0) {
            newClassName = view.className.replace(className1, '');
            newClassName = newClassName.trim() + ' ' + className2;
        } else {
            newClassName = view.className.replace(className2, '');
            newClassName = newClassName.trim() + ' ' + className1;
        }

        view.className = newClassName;
        console.log('end toggleClassName:' + view.className);
    }
}
var a = 1;