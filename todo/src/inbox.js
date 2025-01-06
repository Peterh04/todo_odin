import { todos } from "./todo";
import "./currentPage.css";
const savedTodos = JSON.parse(localStorage.getItem('todos'));

export default function displayInboxTodos(){
 


  const todoShowcase = document.querySelector('.todo-showcase');
  todoShowcase.classList.add('todoShowCase');
  const inboxTodoShowcaseDiv = document.createElement('div');
  inboxTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');


  const inboxPageHeading = document.createElement('h2');
  inboxPageHeading.textContent = 'Inbox';

  const inboxtPageListDiv = document.createElement('div');
  inboxtPageListDiv.classList.add('currentPageListDiv');

  //individual div with individual curretTask contents;
  const inboxTodos = savedTodos.filter((todo)=>{
    return todo.taskProject == 'inbox';
   });
   
  inboxTodos.forEach((todo)=>{
    const inboxTaskContentDiv = document.createElement('div');
    inboxTaskContentDiv.classList.add('currentTaskContentDiv');

    //checkbox for tasks
    const isCheckedInput = document.createElement('input');
    isCheckedInput.type = 'checkbox';

    const inboxTaskHeader = document.createElement('h4');
    inboxTaskHeader.textContent = todo.taskName;

    const checked_headerDiv = document.createElement('div');
    checked_headerDiv.classList.add('checked_headerDiv');


    checked_headerDiv.appendChild(isCheckedInput);
    checked_headerDiv.appendChild(inboxTaskHeader);

    //description for the tasks
    const inboxTaskDescription = document.createElement('p');
    inboxTaskDescription.textContent = todo.taskDescription;

    //dueDate for the tasks
    const inboxTaskDuedate = document.createElement('p');
    const dateObj = new Date(todo.taskDueDate);
    const month = dateObj.toLocaleString('en-us', {month: 'short'});
    const day =  dateObj.getDate();

    inboxTaskDuedate.textContent = `${month} ${day}`;


    inboxTaskContentDiv.appendChild(checked_headerDiv);
    inboxTaskContentDiv.appendChild(inboxTaskDescription);
    inboxTaskContentDiv.appendChild(inboxTaskDuedate);

    inboxtPageListDiv.appendChild(inboxTaskContentDiv);


  })



  inboxTodoShowcaseDiv.appendChild(inboxPageHeading);
  inboxTodoShowcaseDiv.appendChild(inboxtPageListDiv);
  

  todoShowcase.appendChild(inboxTodoShowcaseDiv);
};

