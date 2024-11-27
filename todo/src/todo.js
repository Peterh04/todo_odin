const todos = [

]

export default function todoCreate(){
    
    class todo{
        constructor(taskName, taskDescription, taskDueDate, taskPriority, taskProject){
            this.taskName = taskName;
            this.taskDescription = taskDescription;
            this.taskDueDate = taskDueDate;
            this.taskPriority = taskPriority,
            this.taskProject = taskProject
            this.todoId = `todo_${Date.now()}`,
            this.isChecked = false;
            
        }

    }

    const todoNameInput = document.querySelector('.todoNameInput');

    const todoDescriptioninput = document.querySelector('.todoDescriptioninput');
    
    const dueDateInput = document.querySelector('.dueDateInput');

    const prioritiesDropdown = document.querySelector('.prioritiesDropdown');

    const projectDropdown = document.querySelector('.projectDropdown');

    todos.push(new todo(todoNameInput.value,todoDescriptioninput.value,dueDateInput.value, prioritiesDropdown.value, projectDropdown.value));


    console.log(todos)

}

export { todos }