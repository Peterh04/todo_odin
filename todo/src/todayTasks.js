import deleteTodo from "./delete";
import { todos } from "./todo";


const showTodayProjects =  function showTodayProjects() {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; 

  const todoShowcase = document.querySelector('.todo-showcase');
  todoShowcase.classList.add('todoShowCase');
  const todayTodoShowcaseDiv = document.createElement('div');
  todayTodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');

  const todayPageHeading = document.createElement('h2');
  todayPageHeading.textContent = 'Today';

  const todayPageListDiv = document.createElement('div');
  todayPageListDiv.classList.add('currentPageListDiv');

  // Get today's date
  const today = new Date().toISOString().split('T')[0];

  // Filter todos for today
  const todayTodos = savedTodos.filter((todo) => {
    return todo.taskDueDate === today && todo.isChecked === false;
  });

  if (todayTodos.length === 0) {
    
    const noTodosMessage = document.createElement('p');
    noTodosMessage.textContent = 'No tasks scheduled for today!';
    noTodosMessage.classList.add('noTodosMessage');
    todayPageListDiv.appendChild(noTodosMessage);
  } else {
    

    todayTodos.forEach((todo) => {
      const todayTaskContentDiv = document.createElement('div');
      todayTaskContentDiv.classList.add('currentTaskContentDiv');

      // Checkbox for tasks
      const isCheckedInput = document.createElement('input');
      isCheckedInput.type = 'checkbox';

      isCheckedInput.addEventListener('change', ()=>{

        if(isCheckedInput.checked){
            console.log('on')
            todo.isChecked = true;
            todayTaskContentDiv.classList.add('todoChecked');
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

      

      const todayTaskHeader = document.createElement('h4');
      todayTaskHeader.textContent = todo.taskName;

      const checked_headerDiv = document.createElement('div');
      checked_headerDiv.classList.add('checked_headerDiv');

      checked_headerDiv.appendChild(isCheckedInput);
      checked_headerDiv.appendChild(todayTaskHeader);

      // Description for the tasks
      const todayTaskDescription = document.createElement('p');
      todayTaskDescription.textContent = todo.taskDescription;

      // Due date for the tasks
      const todayTaskDuedate = document.createElement('p');
      const dateObj = new Date(todo.taskDueDate);
      const month = dateObj.toLocaleString('en-us', { month: 'short' });
      const day = dateObj.getDate();

      todayTaskDuedate.textContent = `${month} ${day}`;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      deleteBtn.classList.add('addTaskFormBtn')
      deleteBtn.addEventListener('click', () => {
          deleteTodo(todo)
      })

      todayTaskContentDiv.appendChild(checked_headerDiv);
      todayTaskContentDiv.appendChild(todayTaskDescription);
      todayTaskContentDiv.appendChild(todayTaskDuedate);
      todayTaskContentDiv.appendChild(deleteBtn)
      
      todayPageListDiv.appendChild(todayTaskContentDiv);
      
    });
  }

  todayTodoShowcaseDiv.appendChild(todayPageHeading);
  todayTodoShowcaseDiv.appendChild(todayPageListDiv);

  todoShowcase.appendChild(todayTodoShowcaseDiv);
}


export default showTodayProjects