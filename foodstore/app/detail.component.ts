import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as application from 'application';
import { TextView } from 'ui/text-view';
import { Label } from "ui/label";

@Component({
    moduleId: module.id,
    selector: 'detail',
    template: `
        <GridLayout class="detail-container">
            <StackLayout class="detail-stack">
                <Label class="category" text="Vegetable"></Label>
                <Label class="title" text="Celery"></Label>
                <Label class="divider"></Label>
                <Label #desc class="description" textWrap="true" (loaded)="descLoaded($event)" text="sdjf nads adsf ads ad adf adf ds adf adsf adsf adsf adads fasdf adsf asdf adsf asdf asdf ads fadsfadsadfasdf adf adf adsf adsf adfadsf adsf ad fadf asdf adf adsf adsf asdf asdf asdf adsf asdf adsf adf adsf adsf asdf asdf  " ></Label>
            </StackLayout>
        </GridLayout>
    `,
    styleUrls: ['detail.component.css']
})

export class DetailComponent implements OnInit {

    @ViewChild('desc') descRef: ElementRef;

    constructor() { }

    ngOnInit() {
    }


    public descLoaded(args) {
        const tvDesc = <Label>args.object;
        labelLineHeight(tvDesc);
    }
}

declare var NSMutableAttributedString, NSMutableParagraphStyle, NSParagraphStyleAttributeName;

function labelLineHeight(nsLabel) {
    if (application.ios) {
        var label = nsLabel.ios;

        var attributedString;
        if (label.atributedText) {
            attributedString = label.atributedText;
        } else {
            attributedString = NSMutableAttributedString.alloc().initWithString(label.text);
        }

        var paragraphStyle = NSMutableParagraphStyle.alloc().init();
        paragraphStyle.lineSpacing = 10;
        var range = { location: 0, length: label.text.length };
        attributedString.addAttributeValueRange(NSParagraphStyleAttributeName, paragraphStyle, range);
        label.attributedText = attributedString;
    }
    else if (application.android) {
        var label = nsLabel.android;

        //Default spacing is 20% of text size
        //setLineSpacing(add,multiplyby);
        label.setLineSpacing(16, 1);
    }
}