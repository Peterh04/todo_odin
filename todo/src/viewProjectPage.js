import listProjects from "./ListProject";
import myProjects from "./projects";
import { todos } from "./todo";
const savedTodos = JSON.parse(localStorage.getItem('todos'));



export default function viewProject (projectName){

    console.log("Selected project:", projectName);

    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.innerHTML = ''
    todoShowcase.classList.add('todoShowCase');

    const todoShowcaseDiv = document.createElement('div');
    todoShowcaseDiv.classList.add('currentTodoShowcaseDiv');

    const pageHeading = document.createElement('h2');
    pageHeading.textContent = projectName;

    const pageListDiv = document.createElement('div');
    pageListDiv.classList.add('currentPageListDiv');

    //individual div with individual PageTask contents;
        const pageTodos = savedTodos.filter((todo)=>{
        return todo.taskProject == projectName
    })

    pageTodos.forEach((todo)=>{
        const pageTaskContentDiv = document.createElement('div');
        pageTaskContentDiv.classList.add('currentTaskContentDiv');

        //checkbox for tasks
        const isCheckedInput = document.createElement('input');
        isCheckedInput.type = 'checkbox';

        const pageTaskHeader = document.createElement('h4');
        pageTaskHeader.textContent = todo.taskName;

        const checked_headerDiv = document.createElement('div');
        checked_headerDiv.classList.add('checked_headerDiv');

        checked_headerDiv.appendChild(isCheckedInput);
        checked_headerDiv.appendChild(pageTaskHeader);

        //description for the tasks
        const pageTaskDescription = document.createElement('p');
        pageTaskDescription.textContent = todo.taskDescription;

          //dueDate for the tasks
        const pageTaskDuedate = document.createElement('p');
        const dateObj = new Date(todo.taskDueDate);
        const month = dateObj.toLocaleString('en-us', {month: 'short'});
        const day =  dateObj.getDate();

        pageTaskDuedate.textContent = `${month} ${day}`;

        pageTaskContentDiv.appendChild(checked_headerDiv);
        pageTaskContentDiv.appendChild(pageTaskDescription);
        pageTaskContentDiv.appendChild(pageTaskDuedate);

        pageListDiv.appendChild(pageTaskContentDiv);


    

    })

    todoShowcaseDiv.appendChild(pageHeading);
    todoShowcaseDiv.appendChild(pageListDiv);


    todoShowcase.appendChild(todoShowcaseDiv);
    
    
}