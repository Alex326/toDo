var addbtn = document.getElementsByClassName("todo__button")[0];
var task = document.getElementsByClassName("todo__input")[0];
var todoList = document.getElementsByClassName("todoList")[0];
var todoList_deleted = document.getElementsByClassName("todoList_deleted")[0];
var toDoArray = new Array();
/*
var squaredOne = document.createElement('div');
squaredOne.setAttribute('class','squaredOne');
var inputDone = document.createElement('input');
inputDone.setAttribute('type', 'checkbox');
inputDone.setAttribute('value', 'None');
inputDone.setAttribute('id', 'squaredOne');
inputDone.setAttribute('name', 'check');
var squareLabel = document.createElement('label');
squareLabel.setAttribute('for','squaredOne');
*/

function ToDo() {
    var id = ToDo.count;
    this.id = id;
    ToDo.count++;
    this.todo__item = document.createElement('li');
    this.todo__item.setAttribute('class', 'todoList__item');

    this.todo__item.appendChild(document.createElement('span'));
    this.checkbox_done = this.todo__item.children[0];
    this.checkbox_done.setAttribute('class', 'squaredOne item__checkbox');
    this.checkbox_done.appendChild(document.createElement('div'));
    this.checkbox_done.squarenOne = this.checkbox_done.children[0];
    this.checkbox_done.squarenOne.setAttribute('class', 'squaredOne');
    this.checkbox_done.squarenOne.appendChild(document.createElement('input'));
    this.checkbox_done.squarenOne.checkbox = this.checkbox_done.squarenOne.children[0];
    this.checkbox_done.squarenOne.checkbox.setAttribute('type', 'checkbox');
    this.checkbox_done.squarenOne.checkbox.setAttribute('value', 'None');
    this.checkbox_done.squarenOne.checkbox.setAttribute('id', 'squaredOne' + id);
    this.checkbox_done.squarenOne.checkbox.setAttribute('name', 'check');
    this.checkbox_done.squarenOne.appendChild(document.createElement('label'));
    this.checkbox_done.squarenOne.squareLabel = this.checkbox_done.squarenOne.children[1];
    this.checkbox_done.squarenOne.squareLabel.setAttribute('for', 'squaredOne' +id);

    this.todo__item.appendChild(document.createElement('span'));
    this.item__text = this.todo__item.children[1];
    this.item__text.setAttribute('class', 'item__text');
    this.item__text.innerHTML = task.value;

    this.todo__item.appendChild(document.createElement('span'));
    this.checkbox_delete = this.todo__item.children[2];
    this.checkbox_delete.setAttribute('class', 'item__checkbox item__checkbox_delete');
    this.checkbox_delete.appendChild(document.createElement('div'));
    this.checkbox_delete.squarenTwo = this.checkbox_delete.children[0];
    this.checkbox_delete.squarenTwo.setAttribute('class', 'squaredOne');
    this.checkbox_delete.squarenTwo.appendChild(document.createElement('input'));
    this.checkbox_delete.squarenTwo.checkbox2 = this.checkbox_delete.squarenTwo.children[0];
    this.checkbox_delete.squarenTwo.checkbox2.setAttribute('type', 'checkbox');
    this.checkbox_delete.squarenTwo.checkbox2.setAttribute('value', 'None');
    this.checkbox_delete.squarenTwo.checkbox2.setAttribute('id', 'cross' + id);
    this.checkbox_delete.squarenTwo.checkbox2.setAttribute('name', 'check');
    this.checkbox_delete.squarenTwo.appendChild(document.createElement('label'));
    this.checkbox_delete.squarenTwo.squareLabel2 = this.checkbox_delete.squarenTwo.children[1];
    this.checkbox_delete.squarenTwo.squareLabel2.setAttribute('for', 'cross' +id);

    this.checkbox_done.squarenOne.squareLabel.onclick = function () {
        if(this.parentNode.children[0].checked) {
            todoList_deleted.appendChild(this.parentNode.parentNode.parentNode);
            this.setAttribute('disabled', 'false');
        }
    }

    this.checkbox_delete.squarenTwo.squareLabel2.onclick = function () {
        if(this.parentNode.children[0].checked) {
            this.parentNode.parentNode.parentNode.remove();
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