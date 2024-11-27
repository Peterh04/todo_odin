import { todos } from "./todo";
import "./currentPage.css";

export default function displayCurrentTodos(){
 


  const todoShowcase = document.querySelector('.todo-showcase');
  todoShowcase.style.background = 'black'
  const currentTodoShowcaseDiv = document.createElement('div');
  currentTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');


  const currentPageHeading = document.createElement('h2');
  currentPageHeading.textContent = 'Inbox';

  const currentPageListDiv = document.createElement('div');
  currentPageListDiv.classList.add('currentPageListDiv');

  //individual div with individual curretTask contents;
  const currentTodos = todos.filter((todo)=>{
    return todo.taskProject == 'current';
   });
   
  currentTodos.forEach((todo)=>{
    const currentTaskContentDiv = document.createElement('div');
    currentTaskContentDiv.classList.add('currentTaskContentDiv');

    //checkbox for tasks
    const isCheckedInput = document.createElement('input');
    isCheckedInput.type = 'checkbox';

    const currentTaskHeader = document.createElement('h4');
    currentTaskHeader.textContent = todo.taskName;

    const checked_headerDiv = document.createElement('div');
    checked_headerDiv.classList.add('checked_headerDiv');


    checked_headerDiv.appendChild(isCheckedInput);
    checked_headerDiv.appendChild(currentTaskHeader);

    //description for the tasks
    const currentTaskDescription = document.createElement('p');
    currentTaskDescription.textContent = todo.taskDescription;

    //dueDate for the tasks
    const currentTaskDuedate = document.createElement('p');
    const dateObj = new Date(todo.taskDueDate);
    const month = dateObj.toLocaleString('en-us', {month: 'short'});
    const day =  dateObj.getDate();

    currentTaskDuedate.textContent = `${month} ${day}`;


    currentTaskContentDiv.appendChild(checked_headerDiv);
    currentTaskContentDiv.appendChild(currentTaskDescription);
    currentTaskContentDiv.appendChild(currentTaskDuedate);

    currentPageListDiv.appendChild(currentTaskContentDiv);


  })



  currentTodoShowcaseDiv.appendChild(currentPageHeading);
  currentTodoShowcaseDiv.appendChild(currentPageListDiv);
  

  todoShowcase.appendChild(currentTodoShowcaseDiv);
};

