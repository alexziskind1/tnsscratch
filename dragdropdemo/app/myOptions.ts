import viewModule = require("ui/core/view");

export class MyOptions implements viewModule.Options {
        public width: number;
        /**
         * Gets or sets the desired height of the view.
         */
        public height: number;
        /**
         * Gets or sets the minimum width the view may grow to.
         */
        public minWidth: number;
        /**
         * Gets or sets the minimum height the view may grow to.
         */
        public minHeight: number;
        /**
         * Gets or sets the alignment of this view within its parent along the Horizontal axis.
         */
        public horizontalAlignment: string;
        /**
         * Gets or sets the alignment of this view within its parent along the Vertical axis.
         */
        public verticalAlignment: string;
        /**
         * Specifies extra space on the left side of this view.
         */
        public marginLeft: number;

        /**
         * Specifies extra space on the top side of this view.
         */
        public marginTop: number;

        /**
         * Specifies extra space on the right side of this view.
         */
        public marginRight: number;

        /**
         * Specifies extra space on the bottom side of this view.
         */
        public marginBottom: number;
        /**
         * Gets or sets the visibility of this view.
         */
        public visibility: string;
        /**
         * [Deprecated. Please use className instead] Gets or sets the CSS class of this view.
         */
        public cssClass: string;

        /**
         * Gets or sets the CSS class name of this view.
         */
        public className: string;
        /**
         * Gets or sets the id of this view.
         */
        public id: string;
    
}
