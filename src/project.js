import { format, formatDistance, formatRelative, subDays } from 'date-fns'


class Project {
  static currentProjectId = 0
  constructor(projectTitle, projectDescription, projectDueDate, projectPriority, projectNotes) {
    this["Project Title"] = projectTitle
    this["Project Description"] = projectDescription
    this["Project Due Date"] = projectDueDate
    this["Project Priority"] = projectPriority
    this["Project Notes"] = projectNotes
    this["Project ID"] = Project.currentProjectId++
    this["Project Last Modified"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    this["Project Date Created"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
  }
  updateModified() { this["Project Last Modified"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss') }
}

function addMethodToProject() {
  Project.updateModified = `function() { this["Project Last Modified"] = format(new Date(), 'yyyy-MM-dd HH:mm:ss') }`
}

export {
  Project,
  addMethodToProject,
}