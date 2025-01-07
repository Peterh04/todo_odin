export function deleteTodo(todo){
    let savedTodo = JSON.parse(localStorage.getItem('todos'));
  
    const index = savedTodo.findIndex(x => x.taskName == todo.taskName);
    let x = savedTodo.splice(index, 1);
    console.log(savedTodo);
    localStorage.setItem('todos', JSON.stringify(savedTodo))

    location.reload()
  
}