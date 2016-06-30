import redux = require("redux");

const createStore = redux.createStore;

import {Page, Label} from "ui";
import {EventData} from "data/observable";


const actionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT"
};

const counter = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

var sdfdsf: redux.ActionCreator = (state,action)=>{
    
};


const store = createStore(counter);
var lblMessage: Label;

class MainPageController {
    private page: Page;
    //private lblMessage: Label;
    
    
    
    public pageLoaded(args: EventData) {
        this.page = <Page>args.object;
        lblMessage = <Label> this.page.getViewById("lblMessage");

        store.subscribe(this.updateLabel);
        
    }
    
    public tapPlus() {
        store.dispatch({type: actionTypes.INCREMENT});
    }
    
    public tapMinus() {
        store.dispatch({type: actionTypes.INCREMENT});
    }
    
    public updateLabel(message: string) {
        var state = store.getState();
        lblMessage.text = `${state} yay!`;
    }
    
}

var mpc = new MainPageController();
export var pageLoaded = (args) => mpc.pageLoaded(args);
export var tapPlus = () => mpc.tapPlus();
export var tapMinus = () => mpc.tapMinus();