import myProjects from "./projects";

export default function createProject (){
    const projectNameInput = document.querySelector('.projectNameInput');

    myProjects.push(projectNameInput.value);

    console.log(myProjects)
    
}