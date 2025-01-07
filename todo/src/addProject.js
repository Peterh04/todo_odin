import myProjects from "./projects";



export default function createProject (){
    let myProjects = JSON.parse(localStorage.getItem('projects')) || []
    const projectNameInput = document.querySelector('.projectNameInput');

    

    myProjects.push(projectNameInput.value);

    localStorage.setItem('projects', JSON.stringify(myProjects));
    console.log(localStorage)
    
}