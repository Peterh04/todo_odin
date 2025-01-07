import myPriorities from "./priorities";

import todoCreate from "./todo";
import "./todo.style.css";




export default function todoModal(){
    const todoShowCase = document.querySelector('.todo-showcase');
    const todoModalDiv = document.createElement('div');

    const todoForm = document.createElement('form');
    todoForm.classList.add('todoForm')

    const todoNameInput = document.createElement('input');
    todoNameInput.classList.add('todoNameInput');

    const todoDescriptioninput = document.createElement('input');
    todoDescriptioninput.classList.add('todoDescriptioninput');
   


    const todoNameAttributes = {
        placeholder : 'Task Name',
        type : 'text',
        required : true,
        autocomplete : 'off'
    }


    
    const todoDescriptionAttributes = {
        placeholder : 'description',
        type : 'text',
        required : true,
        autocomplete : 'off'
    }

    for(let key in todoNameAttributes){
        todoNameInput.setAttribute(key, todoNameAttributes[key])
    };

    for(let key in todoDescriptionAttributes){
        todoDescriptioninput.setAttribute(key, todoDescriptionAttributes[key])
    };

    //task-info contains due date and priorities

    const taskInfoContainer = document.createElement('div');
    taskInfoContainer.classList.add('taskInfoContainer');


    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('dueDateInput');
    
    const today = new Date().toISOString().split('T')[0];

    const dueDateInputAttributes = {
        type : 'date',
        required : 'true',
        id : 'datePicker',
        min : today
    }

    for(let key in dueDateInputAttributes){
        dueDateInput.setAttribute(key, dueDateInputAttributes[key])
    };


    const prioritiesDropdown = document.createElement('select');
    prioritiesDropdown.classList.add('prioritiesDropdown');

    const prioritiesDropdownAttributes = {
        id : 'prioritesDropdown',
        required : true,
    };

    for(let key in prioritiesDropdownAttributes){
        prioritiesDropdown.setAttribute(key, prioritiesDropdownAttributes[key])
    };

    for(let key in myPriorities){
        const option = document.createElement('option');
        option.textContent = key;
        prioritiesDropdown.appendChild(option);
    }


    taskInfoContainer.appendChild(dueDateInput);
    taskInfoContainer.appendChild(prioritiesDropdown)



    //project Action div contains priorities dropdown, cancelBtn and addTaskBtn

    const projectActionDiv = document.createElement('div');
    projectActionDiv.classList.add('projectActionDiv');
    const projectActionBtnDiv = document.createElement('div');
    projectActionBtnDiv.classList.add('projectActionBtnDiv')



    const projectDropdown = document.createElement('select');
    projectDropdown.classList.add('projectDropdown');

    const projectDropdownAttributes = {
        id : projectDropdown,
        required : true,
    }

    for(let key in projectDropdownAttributes){
        projectDropdown.setAttribute(key, projectDropdownAttributes[key])
    };

    const InboxOption = document.createElement('option');
    InboxOption.textContent = 'inbox';
    projectDropdown.appendChild(InboxOption);

    let myProjects = JSON.parse(localStorage.getItem('projects'));

    for(let key in myProjects){
        const option = document.createElement('option');
        option.textContent = myProjects[key];
        projectDropdown.appendChild(option);
    }

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancelBtn');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add task';
    addBtn.classList.add('addTaskFormBtn');

    addBtn.setAttribute('type', 'button');
    
    addBtn.addEventListener('click',()=>{
        todoCreate();
        hidetodoModal();
    });

    let hidetodoModal = () =>{
        todoForm.style.visibility = 'hidden';
    };

    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        hidetodoModal();
    })

    projectActionBtnDiv.appendChild(cancelBtn);
    projectActionBtnDiv.appendChild(addBtn);

    
    

    projectActionDiv.appendChild(projectDropdown);
    projectActionDiv.appendChild(projectActionBtnDiv)


    

    todoForm.appendChild(todoNameInput);
    todoForm.appendChild(todoDescriptioninput);
    todoForm.appendChild(taskInfoContainer);
    todoForm.appendChild(projectActionDiv);

    todoModalDiv.appendChild(todoForm);
    todoShowCase.appendChild(todoModalDiv);
}