import { todos } from "./todo";
const savedTodos = JSON.parse(localStorage.getItem('todos'));

export default function showUpcomingTasks() {

  
  

    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.classList.add('todoShowCase');
    const upcomingTodoShowcaseDiv = document.createElement('div');
    upcomingTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');
  
  
    const upcomingPageHeading = document.createElement('h2');
    upcomingPageHeading.textContent = 'Upcoming';
  
    const upcomingPageListDiv = document.createElement('div');
    upcomingPageListDiv.classList.add('currentPageListDiv');
  
    //individual div with individual curretTask contents;  
    const today = new Date().toISOString().split('T')[0];
    const upcomingTodos = savedTodos.filter((todo)=>{
    return todo.taskDueDate > today && todo.isChecked == false;
   })
    upcomingTodos.forEach((todo)=>{
      const upcomingTaskContentDiv = document.createElement('div');
      upcomingTaskContentDiv.classList.add('currentTaskContentDiv');
  
      //checkbox for tasks
      const isCheckedInput = document.createElement('input');
      isCheckedInput.type = 'checkbox';
  
      const upcomingTaskHeader = document.createElement('h4');
      upcomingTaskHeader.textContent = todo.taskName;
  
      const checked_headerDiv = document.createElement('div');
      checked_headerDiv.classList.add('checked_headerDiv');
  
  
      checked_headerDiv.appendChild(isCheckedInput);
      checked_headerDiv.appendChild(upcomingTaskHeader);
  
      //description for the tasks
      const upcomingTaskDescription = document.createElement('p');
      upcomingTaskDescription.textContent = todo.taskDescription;
  
      //dueDate for the tasks
      const upcomingTaskDuedate = document.createElement('p');
      const dateObj = new Date(todo.taskDueDate);
      const month = dateObj.toLocaleString('en-us', {month: 'short'});
      const day =  dateObj.getDate();
  
      upcomingTaskDuedate.textContent = `${month} ${day}`;
  
  
      upcomingTaskContentDiv.appendChild(checked_headerDiv);
      upcomingTaskContentDiv.appendChild(upcomingTaskDescription);
      upcomingTaskContentDiv.appendChild(upcomingTaskDuedate);
  
      upcomingPageListDiv.appendChild(upcomingTaskContentDiv);
  
  
    })
  
  
  
    upcomingTodoShowcaseDiv.appendChild(upcomingPageHeading);
    upcomingTodoShowcaseDiv.appendChild(upcomingPageListDiv);
    
  
    todoShowcase.appendChild(upcomingTodoShowcaseDiv);





   
}