import projectModal from "./projectModal";
import "./style.css";
import todoModal from "./todoModal";





const clearContent = () =>{
    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.innerHTML = '';
    
}


let loadAddTask = () =>{
    clearContent();
    todoModal();
}

let loadAddProjects = () =>{
    clearContent();
    projectModal();

}

function setUpEventListeners(){
    document.querySelector('.addTasksBtn').addEventListener('click', loadAddTask);
    document.querySelector('.addProjectBtn').addEventListener('click', loadAddProjects);
}


function init(){
    setUpEventListeners();
}




init()