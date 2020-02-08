const todoform = document.querySelector('.js_todoForm');
const todoInput = todoform.querySelector('input');
const todoList = document.querySelector('.js_todoList');
const TODO_LS = 'todo';

let _todoList = [];

function paintTodo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  delBtn.innerHTML = '❌';
  span.innerHTML = text;

  const id = Number(new Date().getMilliseconds() * (_todoList.length + 1));

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = id;

  console.log(li);
  todoList.appendChild(li);
}

function handleInputTodo(event) {
  event.preventDefault();
  const text = todoInput.value;
  console.log(todoInput);
  todoInput.value = '';
  paintTodo(text);
}

function loadTodo() {
  const todos = localStorage.getItem(TODO_LS);
  if (todos !== null) {
  }
}

function init() {
  loadTodo();
  todoform.addEventListener('submit', handleInputTodo);
}

init();
