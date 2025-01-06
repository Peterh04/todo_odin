let todos = [];

// Ensure that existing todos are loaded from localStorage
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
    
    // Reference input fields
    const todoNameInput = document.querySelector('.todoNameInput');
    const todoDescriptionInput = document.querySelector('.todoDescriptioninput');

    console.log(todoDescriptionInput)
    const dueDateInput = document.querySelector('.dueDateInput');
    const prioritiesDropdown = document.querySelector('.prioritiesDropdown');
    const projectDropdown = document.querySelector('.projectDropdown');
    
    // Create and add the new todo
    const newTodo = new todo(
        todoNameInput.value,
        todoDescriptionInput.value,
        dueDateInput.value,
        prioritiesDropdown.value,
        projectDropdown.value
    );
    todos.push(newTodo);
    
    // Save back to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
    
    location.reload()
}

export { todos };
