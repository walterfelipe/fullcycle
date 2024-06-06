// script.js

document.addEventListener('DOMContentLoaded', function() {
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', function() {
        const todoText = newTodoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            newTodoInput.value = '';
            newTodoInput.focus();
        }
    });

    newTodoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoButton.click();
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(button);
        todoList.appendChild(li);
    }
});
