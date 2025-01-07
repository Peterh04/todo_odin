let todos = [];


export default function todoCreate() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    class todo {
        constructor(taskName, taskDescription, taskDueDate, taskPriority, taskProject) {
            this.taskName = taskName;
            this.taskDescription = taskDescription;
            this.taskDueDate = taskDueDate;
            this.taskPriority = taskPriority;
            this.taskProject = taskProject;
            this.todoId = `todo_${Date.now()}`;
            this.isChecked = false;
        }
    }
    
  
    const todoNameInput = document.querySelector('.todoNameInput');
    const todoDescriptionInput = document.querySelector('.todoDescriptioninput');

    console.log(todoDescriptionInput)
    const dueDateInput = document.querySelector('.dueDateInput');
    const prioritiesDropdown = document.querySelector('.prioritiesDropdown');
    const projectDropdown = document.querySelector('.projectDropdown');
    
    const newTodo = new todo(
        todoNameInput.value,
        todoDescriptionInput.value,
        dueDateInput.value,
        prioritiesDropdown.value,
        projectDropdown.value
    );
    todos.push(newTodo);
    
   
    localStorage.setItem('todos', JSON.stringify(todos));
    
    location.reload()
}

export { todos };
