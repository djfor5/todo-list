import { format, formatDistance, formatRelative, subDays } from 'date-fns'


class Todo {
  static currentTodoId = 0
  constructor(title, description, dueDate, priority, notes, project) {
    this["Title"] = title
    this["Description"] = description
    this["Due Date"] = dueDate
    this["Priority"] = priority
    this["Notes"] = notes
    this["Project"] = project
    this["Todo ID"] = Todo.currentTodoId++
    this["Last Modified"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    this["Date Created"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
  }
  updateModified() { this["Last Modified"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss')}
}


export {
  Todo,
}