import myProjects from "./projects";


const  createProject =  function createProject (){
    let myProjects = JSON.parse(localStorage.getItem('projects')) || []
    const projectNameInput = document.querySelector('.projectNameInput');

    

    myProjects.push(projectNameInput.value);

    localStorage.setItem('projects', JSON.stringify(myProjects));
    
    
}

export default createProject