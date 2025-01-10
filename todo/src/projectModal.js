import createProject from "./addProject";
import "./projectModal.css";


const showProjectModal = function showProjectModal(){
    const todoShowCase = document.querySelector('.todo-showcase');
    
    const addProjectModal = document.createElement('div');
    addProjectModal.classList.add('addProjectModal')

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('modlHeaderDiv');

    const modalHeader = document.createElement('h3');
    modalHeader.textContent = 'Add project';

    headerDiv.appendChild(modalHeader);

    const addProjectForm = document.createElement('form');
    addProjectForm.classList.add('addProjectForm')

    //projectName Label
    const projectNameLabel = document.createElement('label');
    projectNameLabel.textContent = 'Name'
    
    const projectNameLabelAttributes = {
        id : 'projectNameLabel',
        for : 'projectNameInput'
    }

    for(let key in projectNameLabelAttributes){
        projectNameLabel.setAttribute(key, projectNameLabelAttributes[key])
    };

    //projectName Input
    const projectNameInput  = document.createElement('input');
    projectNameInput.classList.add('projectNameInput')
    
    const projectNameInputAttributes = {
        id : 'projectNameInput',
        type : 'text',
        required : true,
        autocomplete : 'off'
    }

    for(let key in projectNameInputAttributes){
        projectNameInput.setAttribute(key, projectNameInputAttributes[key]);
    };

    //cancel Btn and add Btn div

    let hideprojectModal = () =>{
        addProjectModal.style.visibility = 'hidden';
    };

    const projectModalActionDiv = document.createElement('div');
    projectModalActionDiv.classList.add('projectModalActionDiv')

    const projectCancelBtn = document.createElement('button');
    const projectAddBtn = document.createElement('button');

    projectCancelBtn.textContent = 'Cancel';
    projectCancelBtn.classList.add('projectCancelBtn');

    projectCancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        hideprojectModal();
    })

    projectAddBtn.textContent = 'Add';
    projectAddBtn.classList.add('projectAddBtn');

    projectAddBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        createProject();
        hideprojectModal();
    })

    projectModalActionDiv.appendChild(projectCancelBtn);
    projectModalActionDiv.appendChild(projectAddBtn);



    addProjectForm.appendChild(projectNameLabel);
    addProjectForm.appendChild(projectNameInput);
    addProjectForm.appendChild(projectModalActionDiv);
    
    addProjectModal.appendChild(headerDiv);
    addProjectModal.appendChild(addProjectForm)

    todoShowCase.appendChild(addProjectModal);
}


export default showProjectModal