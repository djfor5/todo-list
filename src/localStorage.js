function getProjects() {
  const projectArrJSON = localStorage.getItem('projectArr')
  return JSON.parse(projectArrJSON)
}


function setProjects(projectArr) {
  if (projectArr.length) { // prevent saving 'undefined' if no length
    localStorage.setItem('projectArr', JSON.stringify(projectArr))
  } else {
    localStorage.clear()
  }
}


function getTodos() {
  const todoArrJSON = localStorage.getItem('todoArr')
  return JSON.parse(todoArrJSON)
}


function setTodos(todoArr) {
  if (todoArr.length) { // prevent saving 'undefined' if no length
    localStorage.setItem('todoArr', JSON.stringify(todoArr))
  } else {
    localStorage.clear()
  }
}


export {
  getProjects,
  setProjects,
  getTodos,
  setTodos,
}