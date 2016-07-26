var addbtn = document.getElementsByClassName("todo__button")[0];
var task = document.getElementsByClassName("todo__input")[0];
var todoList = document.getElementsByClassName("todoList")[0];
var todoList_deleted = document.getElementsByClassName("todoList_deleted")[0];
var toDoArray = new Array();

function ToDo() {
    var id = ToDo.count;
    this.id = id;
    ToDo.count++;
    this.todo__item = document.createElement('li');
    this.todo__item.setAttribute('class', 'todoList__item');

    this.todo__item.appendChild(document.createElement('input'));
    this.checkbox_done = this.todo__item.children[0];
    this.checkbox_done.setAttribute('type', 'checkbox');
    this.checkbox_done.setAttribute('class', 'item__done');

    this.todo__item.appendChild(document.createElement('span'));
    this.item__text = this.todo__item.children[1];
    this.item__text.setAttribute('class', 'item__text');
    this.item__text.innerHTML = task.value;

    this.todo__item.appendChild(document.createElement('input'));
    this.checkbox_delete = this.todo__item.children[2];
    this.checkbox_delete.setAttribute('type', 'checkbox');
    this.checkbox_delete.setAttribute('class', 'item__delete');

    this.checkbox_done.onclick = function () {
        if(this.checked) {
            todoList_deleted.appendChild(this.parentNode);
            this.setAttribute('disabled', 'false');
        }
    }

    this.checkbox_delete.onclick = function () {
        if(this.checked) {
            this.parentNode.remove();
        }
    }
    toDoArray.push(this);
    console.log(toDoArray);
    return this;
}

ToDo.count = 0;

addbtn.onclick = function () {
    var ListItem = new ToDo();
    todoList.appendChild(ListItem.todo__item);
    console.log(ListItem.id);
};