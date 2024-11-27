import myProjects from "./projects";
import viewProject from "./viewProjectPage";



export default function listProjects(){
    const listProjectDiv = document.querySelector('.listProjectDiv');
    listProjectDiv.innerHTML = '';  
    
    for(let key in myProjects){
        const div = document.createElement('div');
        div.textContent = myProjects[key]

        const nameAttribute = myProjects[key];
        div.dataset.name = nameAttribute
        div.classList.add('listProjectDivBtn');
      
    
        listProjectDiv.appendChild(div);

        div.addEventListener('click', ()=>viewProject(div.dataset.name))
    }

}