import { todos } from "./todo";
import "./currentPage.css";

export default function displayInboxTodos() {
  const todoShowcase = document.querySelector('.todo-showcase');
  todoShowcase.classList.add('todoShowCase');
  const inboxTodoShowcaseDiv = document.createElement('div');
  inboxTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');

  const inboxPageHeading = document.createElement('h2');
  inboxPageHeading.textContent = 'Inbox';

  const inboxtPageListDiv = document.createElement('div');
  inboxtPageListDiv.classList.add('currentPageListDiv');


  const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; 

  const inboxTodos = savedTodos.filter((todo) => {
    return todo.taskProject === 'inbox';
  });

  if (inboxTodos.length === 0) {
    
    const noTodosMessage = document.createElement('p');
    noTodosMessage.textContent = 'No todos in the inbox. Start by creating one!';
    noTodosMessage.classList.add('noTodosMessage'); // Optional: Add a class for styling
    inboxtPageListDiv.appendChild(noTodosMessage);
  } else {
    // Render todos
    inboxTodos.forEach((todo) => {
      const inboxTaskContentDiv = document.createElement('div');
      inboxTaskContentDiv.classList.add('currentTaskContentDiv');

      // Checkbox for tasks
      const isCheckedInput = document.createElement('input');
      isCheckedInput.type = 'checkbox';

      const inboxTaskHeader = document.createElement('h4');
      inboxTaskHeader.textContent = todo.taskName;

      const checked_headerDiv = document.createElement('div');
      checked_headerDiv.classList.add('checked_headerDiv');

      checked_headerDiv.appendChild(isCheckedInput);
      checked_headerDiv.appendChild(inboxTaskHeader);

      // Description for the tasks
      const inboxTaskDescription = document.createElement('p');
      inboxTaskDescription.textContent = todo.taskDescription;

      // Due date for the tasks
      const inboxTaskDuedate = document.createElement('p');
      const dateObj = new Date(todo.taskDueDate);
      const month = dateObj.toLocaleString('en-us', { month: 'short' });
      const day = dateObj.getDate();

      inboxTaskDuedate.textContent = `${month} ${day}`;

      inboxTaskContentDiv.appendChild(checked_headerDiv);
      inboxTaskContentDiv.appendChild(inboxTaskDescription);
      inboxTaskContentDiv.appendChild(inboxTaskDuedate);

      inboxtPageListDiv.appendChild(inboxTaskContentDiv);
    });
  }

  inboxTodoShowcaseDiv.appendChild(inboxPageHeading);
  inboxTodoShowcaseDiv.appendChild(inboxtPageListDiv);

  todoShowcase.appendChild(inboxTodoShowcaseDiv);
};
