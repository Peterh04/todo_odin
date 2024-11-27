import displayCurrentTodos from "./current";
import listProjects from "./ListProject";
import projectModal from "./projectModal";
import "./style.css";
import showTodayProjects from "./todayTasks";
import todoModal from "./todoModal";
import showUpcomingTasks from "./upComingTasks";







const clearContent = () =>{
    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.innerHTML = '';
    
}

const clearlistProjectDivContent = () => {
    const listProjectDiv =document.querySelector('.listProjectDiv');
    listProjectDiv.innerHTML = '';
}


let loadAddTask = () =>{
    clearContent();
    todoModal();
}

let loadAddProjects = () =>{
    clearContent();
    projectModal();

}

let loadListProjects = () =>{
    listProjects();
}

let hideListProject = () =>{ 
    clearContent();
}

let loadCurrentPage = () =>{
    clearContent();
    displayCurrentTodos();
}

let loadTodayPage = () =>{
    clearContent();
    showTodayProjects();
}

let loadUpcomingPage = () =>{
    clearContent();
    showUpcomingTasks();
}


function setUpEventListeners(){
    document.querySelector('.addTasksBtn').addEventListener('click', loadAddTask);
    document.querySelector('.addProjectBtn').addEventListener('click', loadAddProjects);

    const toggleProjectsBtn =document.querySelector('.toggleProjectsBtn');
    const listProjectDiv = document.querySelector('.listProjectDiv');

    toggleProjectsBtn.addEventListener('click', ()=>{
        if(listProjectDiv.classList.contains('visible')){
           
            listProjectDiv.classList.remove('visible');
            listProjectDiv.classList.add('invisible');
            
        }else{
            listProjectDiv.classList.remove('invisible');
            listProjectDiv.classList.add('visible')
            listProjectDiv.innerHTML = '';
            loadListProjects();
        }
    })

    document.querySelector('.currentBtn').addEventListener('click', loadCurrentPage);
    document.querySelector('.todayBtn').addEventListener('click', loadTodayPage);
    document.querySelector('.upcomingBtn').addEventListener('click', loadUpcomingPage);

    
}


function init(){
    setUpEventListeners();
}




init()