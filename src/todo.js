const todoform = document.querySelector('.js_todoForm');
const todoInput = todoform.querySelector('input');
const todoList = document.querySelector('.js_todoList');
const TODO_LS = 'todo';

let _todoList = [];

function deleteTodo(event) {
  const delBtn = event.target;
  const li = delBtn.parentNode;

  function filterBy(_v) {
    return _v.id !== parseInt(li.id, 10);
  }

  _todoList = _todoList.filter(filterBy);
  todoList.removeChild(li);
  saveTodo();
}

function paintTodo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  delBtn.innerHTML = '❌';
  delBtn.addEventListener('click', deleteTodo);
  span.innerHTML = text;

  const id = Number(new Date().getMilliseconds() * (_todoList.length + 1));

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = id;

  todoList.appendChild(li);

  const obj = {
    text: text,
    id: id,
  };
  _todoList.push(obj);
  saveTodo();
}

function handleInputTodo(event) {
  event.preventDefault();
  const text = todoInput.value;
  todoInput.value = '';
  paintTodo(text);
}

function saveTodo() {
  localStorage.setItem(TODO_LS, JSON.stringify(_todoList));
}

function loadTodo() {
  const todos = localStorage.getItem(TODO_LS);
  if (todos !== null) {
    const text = JSON.parse(todos);
    text.forEach(_todo => {
      paintTodo(_todo.text);
    });
  }
}

function init() {
  loadTodo();
  todoform.addEventListener('submit', handleInputTodo);
}

init();
