class Todo {
  static currentTodoId = 0
  constructor(title, description, dueDate, priority, notes) {
    this["Title"] = title
    this["Description"] = description
    this["Due Date"] = dueDate
    this["Priority"] = priority
    this["Notes"] = notes
    this["Todo ID"] = Todo.currentTodoId++
  }
}


export {
  Todo,
}