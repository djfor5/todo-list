function renderTodos(todoArr, contentContainer) {
  // remove all contents from container
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // render each todo in a card
  for (let i in todoArr) {
    const todoCard = document.createElement('div')
    // todoCard.id = `card ${i}`
    todoCard.id = `card ${todoArr[i]["Todo ID"]}`
    const todoDetails = document.createElement('div')
    const todoBtns = document.createElement('div')
    todoDetails.classList.add('card-details')
    todoBtns.classList.add('card-buttons')
    todoCard.classList.add('card')
    for (let [key, value] of Object.entries(todoArr[i])) {
      const spanKey = document.createElement('span')
      spanKey.textContent = `${key}: `
      const spanValue = document.createElement('span')
      spanValue.textContent = value
      todoDetails.appendChild(spanKey)
      todoDetails.appendChild(spanValue)
    }
    const btnEditTodo = document.createElement('button')
    btnEditTodo.textContent = "Edit"
    btnEditTodo.classList.add('edit')
    btnEditTodo.classList.add('edit-todo')
    btnEditTodo.id = `edit ${todoArr[i]["Todo ID"]}`
    const btnDeleteTodo = document.createElement('button')
    btnDeleteTodo.textContent = "Delete"
    btnDeleteTodo.classList.add('delete')
    btnDeleteTodo.classList.add('delete-todo')
    btnDeleteTodo.id = `delete ${todoArr[i]["Todo ID"]}`
    todoBtns.appendChild(btnEditTodo)
    todoBtns.appendChild(btnDeleteTodo)
    todoCard.appendChild(todoDetails)
    todoCard.appendChild(todoBtns)
    contentContainer.appendChild(todoCard)
  }
}


export {
  renderTodos,
}