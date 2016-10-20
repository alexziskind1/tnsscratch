import { Component, ElementRef, ViewChild } from "@angular/core";
import { Label } from 'ui/label';
import { Image } from 'ui/image';
import {View} from 'ui/core/view';


 
@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    public counter: number = 16;

    @ViewChild("myLbl") myLbl: ElementRef;
    @ViewChild("myImg") myImg: ElementRef;
    @ViewChild("lblSquare") lblSquare: ElementRef;
    @ViewChild("myTitle") myTitle: ElementRef;
    @ViewChild("myHeartImg") myHeartImg: ElementRef;
    

    


    @ViewChild("myMenuBtn") myMenuBtn: ElementRef;
    @ViewChild("myMenuBtnBar1") myMenuBtnBar1: ElementRef;
    @ViewChild("myMenuBtnBar2") myMenuBtnBar2: ElementRef;
    @ViewChild("myMenuBtnBar3") myMenuBtnBar3: ElementRef;


    constructor() {

    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public menuTap() {
        let btn = <View>this.myMenuBtn.nativeElement;
        let bar1 = <View>this.myMenuBtnBar1.nativeElement;
        let bar2 = <View>this.myMenuBtnBar2.nativeElement;
        let bar3 = <View>this.myMenuBtnBar3.nativeElement;
        btn.className = 'menu-button-on';
        this.toggleClassOnView(bar1, 'menu-bar-on', 'menu-bar-off');
        this.toggleClassOnView(bar2, 'menu-bar-on', 'menu-bar-off');
        this.toggleClassOnView(bar3, 'menu-bar-on', 'menu-bar-off');
    }

    public onTap() {
        this.counter--;


        this.animateHeart();

        let mylbl = <Label>this.myLbl.nativeElement;
        this.toggleClassOnView(mylbl, 'message-tapped', 'sdfsdfd');

        let myImg = <Image>this.myImg.nativeElement;
        this.toggleClassOnView(myImg, 'image-tapped', 'sdfsdfsdf');
        

        let lblSquare = <Label>this.lblSquare.nativeElement;
        this.toggleClassOnView(lblSquare, 'lbl-square-tapped', '');


        let myTitle = <Label>this.myTitle.nativeElement;
        this.toggleClassOnView(myTitle, 'title-tapped', '');

        /*
        if (mylbl.className.indexOf('message-tapped') >= 0) {
            mylbl.className = 'message';
        } else {
            mylbl.className += ' message-tapped';
        }*/
    }

    private animateHeart() {
        let myHeartLbl = <Label>this.myHeartImg.nativeElement;

        var x = 0;
        var y = 0;
        var index = 1;

        var cancel = setInterval(()=>{
            
            this.setBackgroundPosition(myHeartLbl, x + ' ' + y);
            x = x - 100;
            index++;
            if (index == 30) {
                clearInterval(cancel);
            }
        }, 20);

        

    }

    private setBackgroundPosition(view: View, posish: string) {
        view.style.backgroundPosition = posish;
    }

    private toggleClassOnView(view: View, className1: string, className2: string) {
        console.log('start toggleClassName:' + view.className);
        var newClassName = view.className.trim();
        if (view.className.indexOf(className1) >= 0) {
            newClassName = view.className.replace(className1, '');
            newClassName = newClassName.trim() + ' ' + className2;
        } else  {
            newClassName = view.className.replace(className2, '');
            newClassName = newClassName.trim() + ' ' + className1;
        } 

        view.className = newClassName;
        console.log('end toggleClassName:' + view.className);
    }
}
var a = 1;