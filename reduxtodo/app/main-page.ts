import redux = require("redux");


const createStore = redux.createStore;

import {Page, Label, ListView, Switch, TextView, StackLayout} from "ui";
import dialogs = require("ui/dialogs");
import {EventData, PropertyChangeData, Observable} from "data/observable";
import {ObservableArray} from "data/observable-array";


const actionTypes = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_COMPLETED",
    CHANGE_TODO: "CHANGE_TODO"
};

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

class TodoItemObs extends Observable {
    constructor(public id: number, public text: string, public completed: boolean, public changeHandler: (pcd: PropertyChangeData)=>void) {
        super();
        var stateCheck = store.getState();
        this.on("propertyChange", changeHandler);
    }
}

/*
class TodoAction {
    public type: string;
    public id: number;
    public text: string;
    public completed: boolean;
    
}*/

var initState = [
    {id:1, text: 'item1', completed: false},
    {id:2, text: 'item1', completed: false},
    {id:4, text: 'item1', completed: false},
    {id:3, text: 'item1', completed: false},
    {id:5, text: 'item1', completed: false},
    {id:6, text: 'item1', completed: false},
    {id:7, text: 'item1', completed: false},
    {id:8, text: 'item1', completed: false},
    {id:9, text: 'item1', completed: false},
    {id:10, text: 'item1', completed: false},
    {id:11, text: 'item1', completed: false},
    {id:12, text: 'item1', completed: false},
    {id:13, text: 'item1', completed: false},
    {id:14, text: 'item1', completed: false},
    {id:15, text: 'item1', completed: false},
    {id:16, text: 'item1', completed: false},
    {id:17, text: 'item1', completed: false}
];

const todos = (state: Array<TodoItem> = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                action.todoItem
            ];
            
	    case actionTypes.TOGGLE_TODO:
            return state.map((todo: TodoItem)=>{
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    id: todo.id,
                    text: todo.text,
                    completed: !todo.completed
                };
            });
        case actionTypes.CHANGE_TODO:
            return state.map((todo: TodoItem)=>{
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    id: todo.id,
                    text: action.text,
                    completed: todo.completed
                };
            });
        default:
            return state;
    }
};



const store = createStore(todos);


class MainPageController extends Observable {
    private page: Page;
    private nextId: number = 999;
    public globalChecked: boolean = false;
    private lvTodos: ListView;
    private slTodos: StackLayout;


    constructor() {
        super();
        this.set("todoText", "");
        this.set("todoItems", [ new TodoItemObs(1,"item-1",false, this.changeHandler) ]);
        
    }  

    public pageLoaded(args: EventData) {
        this.page = <Page>args.object;

        this.page.bindingContext = this;
        
        this.lvTodos = <ListView>this.page.getViewById("lvTodos");
        this.slTodos = <StackLayout>this.page.getViewById("slTodos");

        store.subscribe(() => {
            var todos = <Array<TodoItem>>store.getState();
            //this.set("todoItems",  this.todoItemArrayToTodoItemObsArray(todos));
            
            this.drawAll(todos);
        });
    }
    
    private drawAll(todos: Array<TodoItem>) {
        
        this.slTodos.removeChildren();
        
        for (var i = 0; i < todos.length; i++) {
            var sl = this.drawRow(todos[i]);
            this.slTodos.addChild(sl);
        }
    }
    
    private drawRow(todo: TodoItem): StackLayout {
        var sl = new StackLayout();
        sl.orientation = "horizontal";
        var sw = new Switch();
        sw.checked = todo.completed;
        sw.on("propertyChange", this.changeHandler);
        sw["todoId"] = todo.id;
        var txt = new TextView();
        txt.text = todo.text;
        txt.on("propertyChange", this.changeHandler);
        txt["todoId"] = todo.id;
        sl.addChild(sw);
        sl.addChild(txt);
        return sl;
    }
    
    private todoItemArrayToTodoItemObsArray(todos: Array<TodoItem>): Array<TodoItemObs> {
        var todosObs = todos.map((t)=> new TodoItemObs(t.id, t.text, t.completed, this.changeHandler));
        return todosObs;
    }

    public btnGetState() {
        var stateStr = JSON.stringify(store.getState());
        alert(stateStr);
    }
    
    public btnAddTap() {
        dialogs.prompt({
            title: "Add item",
            message: "Enter your item here",
            okButtonText: "Add",
            cancelButtonText: "Cancel"
            })
        .then(r => {
            if (r.result) {
                var newTodoItem: TodoItem = { id: this.nextId++, text: r.text, completed: false };
                store.dispatch({ type: actionTypes.ADD_TODO, todoItem: newTodoItem });
            }
        });
    }
    
    public changeHandler(pcd: PropertyChangeData) {
        
        var stateCheck = store.getState();
        var todoItemObs = <TodoItemObs>pcd.object;
        
        if (pcd.propertyName == "checked") {
            store.dispatch({ type: actionTypes.TOGGLE_TODO, id: todoItemObs["todoId"] });
        }
        else if (pcd.propertyName == "text") {
            store.dispatch({ type: actionTypes.CHANGE_TODO, id: todoItemObs["todoId"], text: todoItemObs.text });
        }
    }
    
    public updateTodoItems() {
        var self = this;

    }
    
}

var mpc = new MainPageController();
export var pageLoaded = (args) => mpc.pageLoaded(args);
