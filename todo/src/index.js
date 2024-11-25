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


function setUpEventListeners(){
    document.querySelector('.addTasksBtn').addEventListener('click', loadAddTask)
}


function init(){
    setUpEventListeners();
}


init()