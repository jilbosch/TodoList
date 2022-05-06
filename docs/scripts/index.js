import { todoList } from "../../todoList.js";



document.getElementById('add-button').addEventListener('click', () => {
    todoList.addTodo(todoInput.value);
    todoInput.value = "";
});

todoList.render();


