import "./main.css"
import { Todo } from "./todo"
import { getTodos, setTodos } from "./localStorage"
import { renderTodos } from "./dom"

let todoArr = getTodos() || []
if (todoArr.length > 0) {
  const newCurrentId = todoArr[todoArr.length-1]["Todo ID"]
  Todo.currentTodoId = newCurrentId + 1
} else {
  Todo.currentTodoId = 0
}
renderTodos(todoArr, cards)

const formDiv = document.getElementById('form-div')
const cardsDiv = document.getElementById('cards')

// create form elements for creating or updating todo details
const btnDeleteAllTodos = document.createElement('button')
btnDeleteAllTodos.id = 'btn-delete-all-todos'
btnDeleteAllTodos.classList.add('delete')
btnDeleteAllTodos.textContent = 'Delete All Todos'
formDiv.appendChild(btnDeleteAllTodos)

const btnNewTodo = document.createElement('button')
btnNewTodo.id = 'btn-new-todo'
btnNewTodo.classList.add('new')
btnNewTodo.textContent = 'New Todo'
formDiv.appendChild(btnNewTodo)

const formTodo = document.createElement('form')
formTodo.id = 'form-todo'
// formTodo.setAttribute('hidden', true)
formDiv.appendChild(formTodo)

const inputTitle = document.createElement('input')
inputTitle.id = 'input-todo-title'
inputTitle.placeholder = 'Todo title'
formTodo.appendChild(inputTitle)

const inputDescription = document.createElement('input')
inputDescription.id = 'input-todo-description'
inputDescription.placeholder = 'Todo description'
formTodo.appendChild(inputDescription)

const inputDueDate = document.createElement('input')
inputDueDate.id = 'input-todo-due-date'
inputDueDate.placeholder = 'Todo due date'
formTodo.appendChild(inputDueDate)

const inputPriority = document.createElement('input')
inputPriority.id = 'input-todo-priority'
inputPriority.placeholder = 'Todo priority'
formTodo.appendChild(inputPriority)

const inputNotes = document.createElement('input')
inputNotes.id = 'input-todo-notes'
inputNotes.placeholder = 'Todo notes'
formTodo.appendChild(inputNotes)

const btnUpdateTodo = document.createElement('button')
btnUpdateTodo.id = 'btn-update-todo'
btnUpdateTodo.classList.add('edit')
btnUpdateTodo.textContent = 'Update Todo'
btnUpdateTodo.setAttribute('hidden', true)
formTodo.appendChild(btnUpdateTodo)

const btnSaveNewTodo = document.createElement('button')
btnSaveNewTodo.id = 'btn-save-todo'
btnSaveNewTodo.classList.add('save')
btnSaveNewTodo.textContent = 'Save Todo'
formTodo.appendChild(btnSaveNewTodo)

const btnCancel = document.createElement('button')
btnCancel.id = 'btn-cancel-edit'
btnCancel.classList.add('cancel')
btnCancel.textContent = 'Cancel'
formTodo.appendChild(btnCancel)



function resetFormInputs() {
  inputTitle.value = ""
  inputDescription.value = ""
  inputDueDate.value = ""
  inputPriority.value = ""
  inputNotes.value = ""
  delete btnUpdateTodo.dataset.elementId
  btnSaveNewTodo.removeAttribute('hidden')
  btnUpdateTodo.setAttribute('hidden', true)
  const cards = document.querySelectorAll('.card')
  cards.forEach(card=>{
    card.classList.remove('editing')
  })
}


function newTodo() {
  formTodo.toggleAttribute('hidden')
  resetFormInputs()
}

function saveTodoDataToArray(todoArr) {
  const todo = new Todo(
    inputTitle.value, 
    inputDescription.value, 
    inputDueDate.value, 
    inputPriority.value, 
    inputNotes.value
    )
  todoArr.push(todo)
  resetFormInputs()
}


btnNewTodo.addEventListener('click', newTodo)


btnUpdateTodo.addEventListener('click', (event)=>{
  event.preventDefault()
  const elementId = btnUpdateTodo.dataset.elementId
  updateTodoDetails(elementId)
  renderTodos(todoArr, cards)

  setTodos(todoArr) // save all todos
})

btnCancel.addEventListener('click', (event)=>{
  event.preventDefault()
  delete btnUpdateTodo.dataset.elementId
  resetFormInputs()
})


btnSaveNewTodo.addEventListener('click', (event)=>{
  event.preventDefault()
  saveTodoDataToArray(todoArr)
  renderTodos(todoArr, cards)

  setTodos(todoArr) // save all todos
})


btnDeleteAllTodos.addEventListener('click', ()=>{
  const isDelete = confirm('Are you sure you want to delete ALL todos?')
  if (isDelete) {
    todoArr = []
    renderTodos(todoArr, cards)
    setTodos(todoArr)
    Todo.currentTodoId = 0
  }
})


// add edit function to edit button on each todo card
document.addEventListener('click', (event)=>{
  const allBtnEdit = document.querySelectorAll('.edit-todo')
  allBtnEdit.forEach(btnEdit=>{
    const cardId = parseInt(btnEdit.id.split(' ')[1])
    if (event.target.id === btnEdit.id) {
      loadTodoDetails(cardId, todoArr)
      const newCardId = `card ${cardId}`
      const card = document.getElementById(newCardId)
      card.classList.add('editing') 
      formTodo.removeAttribute('hidden')
      btnUpdateTodo.removeAttribute('hidden')
      btnSaveNewTodo.setAttribute('hidden', true)
    }
  })
})


// add delete function to delete button on each todo card
document.addEventListener('click', (event)=>{
  const allBtnDelete = document.querySelectorAll('.delete-todo')
  allBtnDelete.forEach(btnDelete=>{
    const cardId = parseInt(btnDelete.id.split(' ')[1])
    if (event.target.id === btnDelete.id) {
      deleteTodo(cardId, todoArr)
      resetFormInputs()  
    }
  })
})


// load details from selected todo into input fields
function loadTodoDetails(cardId, todoArr) {
  let elementId
  for (let i in todoArr) {
    if (todoArr[i]["Todo ID"] === cardId) {
      elementId = i
      inputTitle.value = todoArr[i]["Title"]
      inputDescription.value = todoArr[i]["Description"]
      inputDueDate.value = todoArr[i]["Due Date"]
      inputPriority.value = todoArr[i]["Priority"]
      inputNotes.value = todoArr[i]["Notes"]
      break
    }
  }
  btnUpdateTodo.dataset.elementId = elementId
}


// update todoArr with updated todo details and rerender
function updateTodoDetails(elementId) {
  todoArr[elementId]["Title"] = inputTitle.value
  todoArr[elementId]["Description"] = inputDescription.value
  todoArr[elementId]["Due Date"] = inputDueDate.value
  todoArr[elementId]["Priority"] = inputPriority.value
  todoArr[elementId]["Notes"] = inputNotes.value
  resetFormInputs()
  renderTodos(todoArr, cards)
  setTodos(todoArr)
}


function deleteTodo(cardId, todoArr) {
  const isDelete = confirm('Are you sure you want to delete this todo?')
  if (!isDelete) return

  for (let i in todoArr) {
    if (todoArr[i]["Todo ID"] === cardId) {
      todoArr.splice(i,1)
      if (!todoArr.length) {
        Todo.currentTodoId = 0
      }
      break
    }
  }

  renderTodos(todoArr, cards)
  setTodos(todoArr)
}
