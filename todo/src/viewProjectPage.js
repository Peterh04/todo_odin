import deleteTodo from "./delete";
import listProjects from "./ListProject";
import myProjects from "./projects";


const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
export default function viewProject(projectName) {
    

    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.innerHTML = ''; // Clear previous content
    todoShowcase.classList.add('todoShowCase');

    const todoShowcaseDiv = document.createElement('div');
    todoShowcaseDiv.classList.add('currentTodoShowcaseDiv');

    const pageHeading = document.createElement('h2');
    pageHeading.textContent = projectName;

    const pageListDiv = document.createElement('div');
    pageListDiv.classList.add('currentPageListDiv');

    // Filter todos for the selected project
    const pageTodos = savedTodos.filter((todo) => {
        return todo.taskProject === projectName && todo.isChecked === false;
    });

    if (pageTodos.length === 0) {
        
        const noTodosMessage = document.createElement('p');
        noTodosMessage.textContent = `No tasks found for the "${projectName}" project.`;
        noTodosMessage.classList.add('noTodosMessage');
        pageListDiv.appendChild(noTodosMessage);
    } else {
        // Render todos for the selected project
        pageTodos.forEach((todo) => {
            const pageTaskContentDiv = document.createElement('div');
            pageTaskContentDiv.classList.add('currentTaskContentDiv');

            // Checkbox for tasks
            const isCheckedInput = document.createElement('input');
            isCheckedInput.type = 'checkbox';
            isCheckedInput.checked = todo.isChecked;

            isCheckedInput.addEventListener('change', ()=>{

                if(isCheckedInput.checked){
                    console.log('on')
                    todo.isChecked = true;
                    pageTaskContentDiv.classList.add('todoChecked');
                    localStorage.setItem('todos', JSON.stringify(savedTodos));
                    location.reload()
                    console.log(localStorage);
                    
                }else{
                    
                    console.log('off');
                    todo.isChecked = false;
                    pageTaskContentDiv.classList.remove('todoChecked');
                    localStorage.setItem('todos', JSON.stringify(savedTodos));
                    location.reload()
                    console.log(localStorage);
                    
                    
                    
                    
                }
            
           })

            const pageTaskHeader = document.createElement('h4');
            pageTaskHeader.textContent = todo.taskName;

            const checked_headerDiv = document.createElement('div');
            checked_headerDiv.classList.add('checked_headerDiv');

            checked_headerDiv.appendChild(isCheckedInput);
            checked_headerDiv.appendChild(pageTaskHeader);

            // Description for the tasks
            const pageTaskDescription = document.createElement('p');
            pageTaskDescription.textContent = todo.taskDescription;

            // Due date for the tasks
            const pageTaskDuedate = document.createElement('p');
            const dateObj = new Date(todo.taskDueDate);
            const month = dateObj.toLocaleString('en-us', { month: 'short' });
            const day = dateObj.getDate();

            pageTaskDuedate.textContent = `${month} ${day}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'delete';
            deleteBtn.classList.add('addTaskFormBtn')
            deleteBtn.addEventListener('click', () => {
                deleteTodo(todo)
            })
        
            
            
            pageTaskContentDiv.appendChild(checked_headerDiv);
            pageTaskContentDiv.appendChild(pageTaskDescription);
            pageTaskContentDiv.appendChild(pageTaskDuedate);
            pageTaskContentDiv.appendChild(deleteBtn)

            pageListDiv.appendChild(pageTaskContentDiv);
        });
    }

    todoShowcaseDiv.appendChild(pageHeading);
    todoShowcaseDiv.appendChild(pageListDiv);

    todoShowcase.appendChild(todoShowcaseDiv);
}
