import { todos } from "./todo"
const savedTodos = JSON.parse(localStorage.getItem('todos'));


export default function showTodayProjects(){



    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.classList.add('todoShowCase');
    const todayTodoShowcaseDiv = document.createElement('div');
    todayTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');
  
  
    const todayPageHeading = document.createElement('h2');
    todayPageHeading.textContent = 'Today';
  
    const todayPageListDiv = document.createElement('div');
    todayPageListDiv.classList.add('currentPageListDiv');
  
    //individual div with individual curretTask contents;  
    const today = new Date().toISOString().split('T')[0];
    const todayTodos = savedTodos.filter((todo)=>{
    console.log(todo);
      
    return todo.taskDueDate === today;
   })


    todayTodos.forEach((todo)=>{
      const todayTaskContentDiv = document.createElement('div');
      todayTaskContentDiv.classList.add('currentTaskContentDiv');
  
      //checkbox for tasks
      const isCheckedInput = document.createElement('input');
      isCheckedInput.type = 'checkbox';
  
      const todayTaskHeader = document.createElement('h4');
      todayTaskHeader.textContent = todo.taskName;
  
      const checked_headerDiv = document.createElement('div');
      checked_headerDiv.classList.add('checked_headerDiv');
  
  
      checked_headerDiv.appendChild(isCheckedInput);
      checked_headerDiv.appendChild(todayTaskHeader);
  
      //description for the tasks
      const todayTaskDescription = document.createElement('p');
      todayTaskDescription.textContent = todo.taskDescription;

      
  
      //dueDate for the tasks
      const todayTaskDuedate = document.createElement('p');
      const dateObj = new Date(todo.taskDueDate);
      const month = dateObj.toLocaleString('en-us', {month: 'short'});
      const day =  dateObj.getDate();
  
      todayTaskDuedate.textContent = `${month} ${day}`;
  
  
      todayTaskContentDiv.appendChild(checked_headerDiv);
      todayTaskContentDiv.appendChild(todayTaskDescription);
      todayTaskContentDiv.appendChild(todayTaskDuedate);
  
      todayPageListDiv.appendChild(todayTaskContentDiv);
  
  
    })
  
  
  
    todayTodoShowcaseDiv.appendChild(todayPageHeading);
    todayTodoShowcaseDiv.appendChild(todayPageListDiv);
    
  
    todoShowcase.appendChild(todayTodoShowcaseDiv);
  

}