function filterTodosByProject(selectedProjectSet, todoArr) {
  if (!selectedProjectSet.size) return todoArr

  let todoArrFiltered = []
  for (let i in todoArr) {
    if (selectedProjectSet.has(todoArr[i]["Project"])) {
      todoArrFiltered.push(todoArr[i])
    }
  }
  return todoArrFiltered
}


export {
  filterTodosByProject,
}