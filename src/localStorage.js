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
  getTodos,
  setTodos,
}