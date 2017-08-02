import * as application from 'application';
declare var NSMutableAttributedString, NSMutableParagraphStyle, NSParagraphStyleAttributeName;


export const labelLineHeight = (nsLabel) => {
    if (application.ios) {
        var label = nsLabel.ios;

        var attributedString;
        if (label.atributedText) {
            attributedString = label.atributedText;
        } else {
            attributedString = NSMutableAttributedString.alloc().initWithString(label.text);
        }

        var paragraphStyle = NSMutableParagraphStyle.alloc().init();
        paragraphStyle.lineSpacing = 8;
        var range = { location: 0, length: label.text.length };
        attributedString.addAttributeValueRange(NSParagraphStyleAttributeName, paragraphStyle, range);
        label.attributedText = attributedString;
    }
    else if (application.android) {
        var label = nsLabel.android;

        //Default spacing is 20% of text size
        //setLineSpacing(add,multiplyby);
        label.setLineSpacing(14, 1);
    }
};