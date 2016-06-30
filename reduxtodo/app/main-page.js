var redux = require("redux");
var createStore = redux.createStore;
var ui_1 = require("ui");
var dialogs = require("ui/dialogs");
var observable_1 = require("data/observable");
var actionTypes = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_COMPLETED",
    CHANGE_TODO: "CHANGE_TODO"
};
var TodoItemObs = (function (_super) {
    __extends(TodoItemObs, _super);
    function TodoItemObs(id, text, completed, changeHandler) {
        _super.call(this);
        this.id = id;
        this.text = text;
        this.completed = completed;
        this.changeHandler = changeHandler;
        var stateCheck = store.getState();
        this.on("propertyChange", changeHandler);
    }
    return TodoItemObs;
})(observable_1.Observable);
/*
class TodoAction {
    public type: string;
    public id: number;
    public text: string;
    public completed: boolean;
    
}*/
var initState = [
    { id: 1, text: 'item1', completed: false },
    { id: 2, text: 'item1', completed: false },
    { id: 4, text: 'item1', completed: false },
    { id: 3, text: 'item1', completed: false },
    { id: 5, text: 'item1', completed: false },
    { id: 6, text: 'item1', completed: false },
    { id: 7, text: 'item1', completed: false },
    { id: 8, text: 'item1', completed: false },
    { id: 9, text: 'item1', completed: false },
    { id: 10, text: 'item1', completed: false },
    { id: 11, text: 'item1', completed: false },
    { id: 12, text: 'item1', completed: false },
    { id: 13, text: 'item1', completed: false },
    { id: 14, text: 'item1', completed: false },
    { id: 15, text: 'item1', completed: false },
    { id: 16, text: 'item1', completed: false },
    { id: 17, text: 'item1', completed: false }
];
var todos = function (state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return state.concat([
                action.todoItem
            ]);
        case actionTypes.TOGGLE_TODO:
            return state.map(function (todo) {
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
            return state.map(function (todo) {
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
var store = createStore(todos);
var MainPageController = (function (_super) {
    __extends(MainPageController, _super);
    function MainPageController() {
        _super.call(this);
        this.nextId = 999;
        this.globalChecked = false;
        this.set("todoText", "");
        this.set("todoItems", [new TodoItemObs(1, "item-1", false, this.changeHandler)]);
    }
    MainPageController.prototype.pageLoaded = function (args) {
        var _this = this;
        this.page = args.object;
        this.page.bindingContext = this;
        this.lvTodos = this.page.getViewById("lvTodos");
        this.slTodos = this.page.getViewById("slTodos");
        store.subscribe(function () {
            var todos = store.getState();
            //this.set("todoItems",  this.todoItemArrayToTodoItemObsArray(todos));
            _this.drawAll(todos);
        });
    };
    MainPageController.prototype.drawAll = function (todos) {
        this.slTodos.removeChildren();
        for (var i = 0; i < todos.length; i++) {
            var sl = this.drawRow(todos[i]);
            this.slTodos.addChild(sl);
        }
    };
    MainPageController.prototype.drawRow = function (todo) {
        var sl = new ui_1.StackLayout();
        sl.orientation = "horizontal";
        var sw = new ui_1.Switch();
        sw.checked = todo.completed;
        sw.on("propertyChange", this.changeHandler);
        sw["todoId"] = todo.id;
        var txt = new ui_1.TextView();
        txt.text = todo.text;
        txt.on("propertyChange", this.changeHandler);
        txt["todoId"] = todo.id;
        sl.addChild(sw);
        sl.addChild(txt);
        return sl;
    };
    MainPageController.prototype.todoItemArrayToTodoItemObsArray = function (todos) {
        var _this = this;
        var todosObs = todos.map(function (t) { return new TodoItemObs(t.id, t.text, t.completed, _this.changeHandler); });
        return todosObs;
    };
    MainPageController.prototype.btnGetState = function () {
        var stateStr = JSON.stringify(store.getState());
        alert(stateStr);
    };
    MainPageController.prototype.btnAddTap = function () {
        var _this = this;
        dialogs.prompt({
            title: "Add item",
            message: "Enter your item here",
            okButtonText: "Add",
            cancelButtonText: "Cancel"
        })
            .then(function (r) {
            if (r.result) {
                var newTodoItem = { id: _this.nextId++, text: r.text, completed: false };
                store.dispatch({ type: actionTypes.ADD_TODO, todoItem: newTodoItem });
            }
        });
    };
    MainPageController.prototype.changeHandler = function (pcd) {
        var stateCheck = store.getState();
        var todoItemObs = pcd.object;
        if (pcd.propertyName == "checked") {
            store.dispatch({ type: actionTypes.TOGGLE_TODO, id: todoItemObs["todoId"] });
        }
        else if (pcd.propertyName == "text") {
            store.dispatch({ type: actionTypes.CHANGE_TODO, id: todoItemObs["todoId"], text: todoItemObs.text });
        }
    };
    MainPageController.prototype.updateTodoItems = function () {
        var self = this;
    };
    return MainPageController;
})(observable_1.Observable);
var mpc = new MainPageController();
exports.pageLoaded = function (args) { return mpc.pageLoaded(args); };
