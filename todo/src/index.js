// Imports
import displayInboxTodos from "./inbox";
import listProjects from "./ListProject";
import projectModal from "./projectModal";
import "./style.css";
import showTodayProjects from "./todayTasks";
import { todos } from "./todo";
import todoModal from "./todoModal";
import showUpcomingTasks from "./upComingTasks";

// Utility Functions
const clearContent = () => {
    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.innerHTML = '';
};

const clearListProjectDivContent = () => {
    const listProjectDiv = document.querySelector('.listProjectDiv');
    listProjectDiv.innerHTML = '';
};

// Page Loaders
const loadAddTask = () => {
    clearContent();
    todoModal();
};

const loadAddProjects = () => {
    clearContent();
    projectModal();
};

const loadListProjects = () => {
    listProjects();
};

const hideListProject = () => {
    clearContent();
};

const loadCurrentPage = () => {
    clearContent();
    displayInboxTodos();
};

const loadTodayPage = () => {
    clearContent();
    showTodayProjects();
};

const loadUpcomingPage = () => {
    clearContent();
    showUpcomingTasks();
};

const loadSearchPage = () => {
    clearContent();
};

const loadFilterPage = () => {
    clearContent();
};

// Helper Functions
const removeClickedStyle = () => {
    const optionBtns = document.querySelectorAll('.optionBtn');
    const projectsBtnDiv = document.querySelector('.projectsBtnDiv');
    optionBtns.forEach(btn => {
        btn.classList.remove('clickedOptionBtn');
    });
    projectsBtnDiv.classList.remove('clickedOptionBtn');
};

// Event Listeners Setup
function setUpEventListeners() {
    document.querySelector('.addTasksBtn').addEventListener('click', loadAddTask);
    document.querySelector('.addProjectBtn').addEventListener('click', loadAddProjects);

    const toggleProjectsBtn = document.querySelector('.toggleProjectsBtn');
    const listProjectDiv = document.querySelector('.listProjectDiv');

    toggleProjectsBtn.addEventListener('click', () => {
        if (listProjectDiv.classList.contains('visible')) {
            listProjectDiv.classList.remove('visible');
            listProjectDiv.classList.add('invisible');
        } else {
            listProjectDiv.classList.remove('invisible');
            listProjectDiv.classList.add('visible');
            listProjectDiv.innerHTML = '';
            loadListProjects();
        }
    });

    document.querySelector('.inboxBtn').addEventListener('click', () => {
        removeClickedStyle();
        document.querySelector('.inboxBtn').classList.add('clickedOptionBtn');
        loadCurrentPage();
    });

    document.querySelector('.todayBtn').addEventListener('click', () => {
        removeClickedStyle();
        document.querySelector('.todayBtn').classList.add('clickedOptionBtn');
        loadTodayPage();
    });

    document.querySelector('.upcomingBtn').addEventListener('click', () => {
        removeClickedStyle();
        document.querySelector('.upcomingBtn').classList.add('clickedOptionBtn');
        loadUpcomingPage();
    });

    document.querySelector('.projectsBtnDiv').addEventListener('click', () => {
        removeClickedStyle();
        document.querySelector('.projectsBtnDiv').classList.add('clickedOptionBtn');
    });

    document.querySelector('.searchBtn').addEventListener('click', () => {
        removeClickedStyle();
        document.querySelector('.searchBtn').classList.add('clickedOptionBtn');
        loadSearchPage();
    });

    document.querySelector('.filterBtn').addEventListener('click', () => {
        removeClickedStyle();
        document.querySelector('.filterBtn').classList.add('clickedOptionBtn');
        loadFilterPage();
    });
}


const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
// Display Saved Todos
function showInitialSavedTodos() {
    const todoShowcase = document.querySelector('.todo-showcase');
    todoShowcase.classList.add('todoShowCase');

    const TodoShowcaseDiv = document.createElement('div');
    TodoShowcaseDiv.classList.add('currentTodoShowcaseDiv');

    const PageHeading = document.createElement('h2');
    PageHeading.textContent = 'All tasks';

    const PageListDiv = document.createElement('div');
    PageListDiv.classList.add('currentPageListDiv');

    // Display individual tasks
    savedTodos.forEach(todo => {
        const TaskContentDiv = document.createElement('div');
        TaskContentDiv.classList.add('currentTaskContentDiv');

        const isCheckedInput = document.createElement('input');
        isCheckedInput.type = 'checkbox';

        
        const TaskHeader = document.createElement('h4');
        TaskHeader.textContent = todo.taskName;

        const checkedHeaderDiv = document.createElement('div');
        checkedHeaderDiv.classList.add('checked_headerDiv');

        checkedHeaderDiv.appendChild(isCheckedInput)
        checkedHeaderDiv.appendChild(TaskHeader)

        const TaskDescription = document.createElement('p');
        TaskDescription.textContent = todo.taskDescription;

        const TaskDueDate = document.createElement('p');
        const dateObj = new Date(todo.taskDueDate);
        const month = dateObj.toLocaleString('en-us', { month: 'short' });
        const day = dateObj.getDate();
        TaskDueDate.textContent = `${month} ${day}`;


        TaskContentDiv.appendChild(checkedHeaderDiv);
        TaskContentDiv.appendChild(TaskDescription);
        TaskContentDiv.appendChild(TaskDueDate);

        PageListDiv.appendChild(TaskContentDiv);
    });

    TodoShowcaseDiv.appendChild(PageHeading);
    TodoShowcaseDiv.appendChild(PageListDiv);
    todoShowcase.appendChild(TodoShowcaseDiv);
}

// Initialize App
function init() {
    setUpEventListeners();
    showInitialSavedTodos();


    
}

init();
