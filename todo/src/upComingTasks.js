import deleteTodo from "./delete";
import { todos } from "./todo";
const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; 


const showUpcomingTasks =  function showUpcomingTasks() {
  const todoShowcase = document.querySelector('.todo-showcase');
  todoShowcase.classList.add('todoShowCase');
  const upcomingTodoShowcaseDiv = document.createElement('div');
  upcomingTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');

  const upcomingPageHeading = document.createElement('h2');
  upcomingPageHeading.textContent = 'Upcoming';

  const upcomingPageListDiv = document.createElement('div');
  upcomingPageListDiv.classList.add('currentPageListDiv');

  // Get today's date
  const today = new Date().toISOString().split('T')[0];

  // Filter upcoming todos
  const upcomingTodos = savedTodos.filter((todo) => {
    return todo.taskDueDate > today && todo.isChecked === false;
  });

  if (upcomingTodos.length === 0) {
  
    const noTodosMessage = document.createElement('p');
    noTodosMessage.textContent = 'No upcoming tasks!';
    noTodosMessage.classList.add('noTodosMessage'); 
    upcomingPageListDiv.appendChild(noTodosMessage);
  } else {
    // Render upcoming tasks
    upcomingTodos.forEach((todo) => {
      const upcomingTaskContentDiv = document.createElement('div');
      upcomingTaskContentDiv.classList.add('currentTaskContentDiv');

      // Checkbox for tasks
      const isCheckedInput = document.createElement('input');
      isCheckedInput.type = 'checkbox';

      isCheckedInput.addEventListener('change', ()=>{

        if(isCheckedInput.checked){
            console.log('on')
            todo.isChecked = true;
            upcomingTaskContentDiv.classList.add('todoChecked');
            localStorage.setItem('todos', JSON.stringify(savedTodos));
            location.reload()
            console.log(localStorage);
            
        }else{
            
            console.log('off');
            todo.isChecked = false;
            TaskContentDiv.classList.remove('todoChecked');
            localStorage.setItem('todos', JSON.stringify(savedTodos));
            location.reload()
            console.log(localStorage);
            
            
            
            
        }
    
   })

      const upcomingTaskHeader = document.createElement('h4');
      upcomingTaskHeader.textContent = todo.taskName;

      const checked_headerDiv = document.createElement('div');
      checked_headerDiv.classList.add('checked_headerDiv');

      checked_headerDiv.appendChild(isCheckedInput);
      checked_headerDiv.appendChild(upcomingTaskHeader);

      // Description for the tasks
      const upcomingTaskDescription = document.createElement('p');
      upcomingTaskDescription.textContent = todo.taskDescription;

      // Due date for the tasks
      const upcomingTaskDuedate = document.createElement('p');
      const dateObj = new Date(todo.taskDueDate);
      const month = dateObj.toLocaleString('en-us', { month: 'short' });
      const day = dateObj.getDate();

      upcomingTaskDuedate.textContent = `${month} ${day}`;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      deleteBtn.classList.add('addTaskFormBtn')
      deleteBtn.addEventListener('click', () => {
          deleteTodo(todo)
      })
      
      
      upcomingTaskContentDiv.appendChild(checked_headerDiv);
      upcomingTaskContentDiv.appendChild(upcomingTaskDescription);
      upcomingTaskContentDiv.appendChild(upcomingTaskDuedate);
      upcomingTaskContentDiv.appendChild(deleteBtn);

      upcomingPageListDiv.appendChild(upcomingTaskContentDiv);
    });
  }

  upcomingTodoShowcaseDiv.appendChild(upcomingPageHeading);
  upcomingTodoShowcaseDiv.appendChild(upcomingPageListDiv);

  todoShowcase.appendChild(upcomingTodoShowcaseDiv);
}

export default showUpcomingTasks