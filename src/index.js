import "./main.css";
import { Project, addMethodToProject } from "./project.js";
import { Todo, addMethodToTodo } from "./todo.js";
import {
  getProjects,
  setProjects,
  getTodos,
  setTodos,
} from "./localStorage.js";
import { renderProjects, renderTodos } from "./dom.js";
import filterTodosByProject from "./miscellaneous.js";

/* eslint-disable no-alert, no-restricted-globals */

addMethodToProject();
addMethodToTodo();

const formProjectDiv = document.getElementById("form-project-div");
const cardsProjectDiv = document.getElementById("cards-project");
const formTodoDiv = document.getElementById("form-todo-div");
const cardsTodoDiv = document.getElementById("cards-todo");

const selectedProjectSet = new Set();

let projectArr = getProjects() || [];
if (projectArr.length > 0) {
  const newCurrentProjectId = projectArr[projectArr.length - 1]["Project ID"];
  Project.currentProjectId = newCurrentProjectId + 1;
} else {
  Project.currentProjectId = 0;
}
renderProjects(projectArr, cardsProjectDiv);

let todoArr = getTodos() || [];
if (todoArr.length > 0) {
  const newCurrentId = todoArr[todoArr.length - 1]["Todo ID"];
  Todo.currentTodoId = newCurrentId + 1;
} else {
  Todo.currentTodoId = 0;
}
renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);

// /
// FORM FOR TODO
// /

// create form elements for creating or updating todo details
const btnDeleteAllTodos = document.createElement("button");
btnDeleteAllTodos.id = "btn-delete-all-todos";
btnDeleteAllTodos.classList.add("delete");
btnDeleteAllTodos.textContent = "Delete All Todos";
formTodoDiv.appendChild(btnDeleteAllTodos);

const btnNewTodo = document.createElement("button");
btnNewTodo.id = "btn-new-todo";
btnNewTodo.classList.add("new");
btnNewTodo.textContent = "New Todo";
formTodoDiv.appendChild(btnNewTodo);

const formTodo = document.createElement("form");
formTodo.id = "form-todo";
// formTodo.setAttribute('hidden', true)
formTodoDiv.appendChild(formTodo);

const inputTitle = document.createElement("input");
inputTitle.id = "input-todo-title";
inputTitle.placeholder = "Todo title*";
formTodo.appendChild(inputTitle);

const inputDescription = document.createElement("input");
inputDescription.id = "input-todo-description";
inputDescription.placeholder = "Todo description";
formTodo.appendChild(inputDescription);

const inputDueDate = document.createElement("input");
inputDueDate.id = "input-todo-due-date";
inputDueDate.type = "date";
// inputDueDate.placeholder = 'Todo due date'
formTodo.appendChild(inputDueDate);

const inputPriority = document.createElement("input");
inputPriority.id = "input-todo-priority";
inputPriority.placeholder = "Todo priority";
formTodo.appendChild(inputPriority);

const inputNotes = document.createElement("input");
inputNotes.id = "input-todo-notes";
inputNotes.placeholder = "Todo notes";
formTodo.appendChild(inputNotes);

const inputTodoProject = document.createElement("input");
inputTodoProject.id = "input-todo-project";
inputTodoProject.placeholder = "Todo project";
formTodo.appendChild(inputTodoProject);

const btnUpdateTodo = document.createElement("button");
btnUpdateTodo.id = "btn-update-todo";
btnUpdateTodo.classList.add("edit");
btnUpdateTodo.textContent = "Update Todo";
btnUpdateTodo.setAttribute("hidden", true);
formTodo.appendChild(btnUpdateTodo);

const btnSaveNewTodo = document.createElement("button");
btnSaveNewTodo.id = "btn-save-todo";
btnSaveNewTodo.classList.add("save");
btnSaveNewTodo.textContent = "Save Todo";
formTodo.appendChild(btnSaveNewTodo);

const btnCancel = document.createElement("button");
btnCancel.id = "btn-cancel-edit";
btnCancel.classList.add("cancel");
btnCancel.textContent = "Cancel";
formTodo.appendChild(btnCancel);

// /
// FORM FOR PROJECT
// /

// create form elements for creating or updating project details
const btnDeleteAllProjects = document.createElement("button");
btnDeleteAllProjects.id = "btn-delete-all-projects";
btnDeleteAllProjects.classList.add("delete");
btnDeleteAllProjects.textContent = "Delete All Projects";
formProjectDiv.appendChild(btnDeleteAllProjects);

const btnNewProject = document.createElement("button");
btnNewProject.id = "btn-new-project";
btnNewProject.classList.add("new");
btnNewProject.textContent = "New Project";
formProjectDiv.appendChild(btnNewProject);

const formProject = document.createElement("form");
formProject.id = "form-project";
formProjectDiv.appendChild(formProject);

const inputProjectTitle = document.createElement("input");
inputProjectTitle.id = "input-project-title";
inputProjectTitle.placeholder = "Project title*";
formProject.appendChild(inputProjectTitle);

const inputProjectDescription = document.createElement("input");
inputProjectDescription.id = "input-project-description";
inputProjectDescription.placeholder = "Project description";
formProject.appendChild(inputProjectDescription);

const inputProjectDueDate = document.createElement("input");
inputProjectDueDate.id = "input-project-due-date";
inputProjectDueDate.type = "date";
formProject.appendChild(inputProjectDueDate);

const inputProjectPriority = document.createElement("input");
inputProjectPriority.id = "input-project-priority";
inputProjectPriority.placeholder = "Project priority";
formProject.appendChild(inputProjectPriority);

const inputProjectNotes = document.createElement("input");
inputProjectNotes.id = "input-project-notes";
inputProjectNotes.placeholder = "Project notes";
formProject.appendChild(inputProjectNotes);

const btnUpdateProject = document.createElement("button");
btnUpdateProject.id = "btn-update-project";
btnUpdateProject.classList.add("edit");
btnUpdateProject.textContent = "Update Project";
btnUpdateProject.setAttribute("hidden", true);
formProject.appendChild(btnUpdateProject);

const btnSaveNewProject = document.createElement("button");
btnSaveNewProject.id = "btn-save-project";
btnSaveNewProject.classList.add("save");
btnSaveNewProject.textContent = "Save Project";
formProject.appendChild(btnSaveNewProject);

const btnCancelProject = document.createElement("button");
btnCancelProject.id = "btn-cancel-edit-project";
btnCancelProject.classList.add("cancel");
btnCancelProject.textContent = "Cancel";
formProject.appendChild(btnCancelProject);

function resetTodoFormInputs() {
  inputTitle.value = "";
  inputDescription.value = "";
  inputDueDate.value = "";
  inputPriority.value = "";
  inputNotes.value = "";
  inputTodoProject.value = "";
  delete btnUpdateTodo.dataset.elementId;
  btnSaveNewTodo.removeAttribute("hidden");
  btnUpdateTodo.setAttribute("hidden", true);
  const cards = document.querySelectorAll(".card-todo");
  cards.forEach((card) => {
    card.classList.remove("editing-todo");
  });
}

function resetProjectFormInputs() {
  inputProjectTitle.value = "";
  inputProjectDescription.value = "";
  inputProjectDueDate.value = "";
  inputProjectPriority.value = "";
  inputProjectNotes.value = "";
  delete btnUpdateProject.dataset.elementProjectId;
  btnSaveNewProject.removeAttribute("hidden");
  btnUpdateProject.setAttribute("hidden", true);
  const projectCards = document.querySelectorAll(".card-project");
  projectCards.forEach((projectCard) => {
    projectCard.classList.remove("editing-project");
  });
}

function newTodo() {
  formTodo.toggleAttribute("hidden");
  resetTodoFormInputs();
}

function newProject() {
  formProject.toggleAttribute("hidden");
  resetProjectFormInputs();
}

function saveTodoDataToArray(todoArrParam) {
  const projects = projectArr.map((project) => project["Project Title"]);
  let todoProject;
  if (projects.includes(inputTodoProject.value)) {
    todoProject = inputTodoProject.value;
  } else {
    todoProject = "Default";
  }
  if (!inputTitle.value) return;
  const todo = new Todo(
    inputTitle.value,
    inputDescription.value,
    inputDueDate.value,
    inputPriority.value,
    inputNotes.value,
    todoProject,
  );
  todoArrParam.push(todo);
  resetTodoFormInputs();
}

function saveProjectDataToArray(projectArrParam) {
  if (!inputProjectTitle.value) return;
  const project = new Project(
    inputProjectTitle.value,
    inputProjectDescription.value,
    inputProjectDueDate.value,
    inputProjectPriority.value,
    inputProjectNotes.value,
  );
  projectArrParam.push(project);
  resetProjectFormInputs();
}

// load details from selected todo into input fields
function loadTodoDetails(cardId, todoArrParam) {
  let elementId;
  for (let i = 0, todoArrParamLength = todoArrParam.length; i < todoArrParamLength; i++) {
    if (todoArrParam[i]["Todo ID"] === cardId) {
      elementId = i;
      inputTitle.value = todoArrParam[i].Title;
      inputDescription.value = todoArrParam[i].Description;
      inputDueDate.value = todoArrParam[i]["Due Date"];
      inputPriority.value = todoArrParam[i].Priority;
      inputNotes.value = todoArrParam[i].Notes;
      inputTodoProject.value = todoArrParam[i].Project;
      break;
    }
  }
  btnUpdateTodo.dataset.elementId = elementId;
}

// load details from selected todo into input fields
function loadProjectDetails(cardProjectId, projectArrParam) {
  let elementProjectId;
  for (let i = 0, projectArrParamLength = projectArrParam.length; i < projectArrParamLength; i++) {
    if (projectArrParam[i]["Project ID"] === cardProjectId) {
      elementProjectId = i;
      inputProjectTitle.value = projectArrParam[i]["Project Title"];
      inputProjectDescription.value = projectArrParam[i]["Project Description"];
      inputProjectDueDate.value = projectArrParam[i]["Project Due Date"];
      inputProjectPriority.value = projectArrParam[i]["Project Priority"];
      inputProjectNotes.value = projectArrParam[i]["Project Notes"];
      break;
    }
  }
  btnUpdateProject.dataset.elementProjectId = elementProjectId;
}

// update todoArr with updated todo details and rerender
function updateTodoDetails(elementId) {
  todoArr[elementId].Title = inputTitle.value;
  todoArr[elementId].Description = inputDescription.value;
  todoArr[elementId]["Due Date"] = inputDueDate.value;
  todoArr[elementId].Priority = inputPriority.value;
  todoArr[elementId].Notes = inputNotes.value;
  const projects = projectArr.map((project) => project["Project Title"]);
  if (projects.includes(inputTodoProject.value)) {
    todoArr[elementId].Project = inputTodoProject.value;
  } else {
    todoArr[elementId].Project = "Default";
  }
  todoArr[elementId].updateModified();
  resetTodoFormInputs();
  renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
  setTodos(todoArr);
}

// update projectArr with updated project details and rerender
function updateProjectDetails(elementProjectId) {
  selectedProjectSet.clear(); // delete(projectArr[elementProjectId]["Project Title"])
  todoArr.forEach((element) => {
    const el = element;
    if (el.Project === projectArr[elementProjectId]["Project Title"]) {
      el.Project = inputProjectTitle.value;
    }
  });
  renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
  resetTodoFormInputs();

  projectArr[elementProjectId]["Project Title"] = inputProjectTitle.value;
  projectArr[elementProjectId]["Project Description"] = inputProjectDescription.value;
  projectArr[elementProjectId]["Project Due Date"] = inputProjectDueDate.value;
  projectArr[elementProjectId]["Project Priority"] = inputProjectPriority.value;
  projectArr[elementProjectId]["Project Notes"] = inputProjectNotes.value;
  projectArr[elementProjectId].updateModified();
  resetProjectFormInputs();
  renderProjects(projectArr, cardsProjectDiv);
  setProjects(projectArr);
}

function deleteTodo(cardId, todoArrParam) {
  const isDelete = confirm("Are you sure you want to delete this todo?");
  if (!isDelete) return;

  for (let i = 0, todoArrParamLength = todoArrParam.length; i < todoArrParamLength; i++) {
    if (todoArrParam[i]["Todo ID"] === cardId) {
      todoArrParam.splice(i, 1);
      if (!todoArrParam.length) {
        Todo.currentTodoId = 0;
      }
      break;
    }
  }

  resetTodoFormInputs();
  renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
  setTodos(todoArr);
}

function deleteProject(cardProjectId, projectArrParam) {
  const isDelete = confirm("Are you sure you want to delete this project?");
  if (!isDelete) return;

  for (let i = 0, projectArrParamLength = projectArrParam.length; i < projectArrParamLength; i++) {
    if (projectArrParam[i]["Project ID"] === cardProjectId) {
      selectedProjectSet.clear(); // delete(projectArrParam[elementProjectId]['Project Title'])
      for (let j = 0, todoArrLength = todoArr.length; j < todoArrLength; j++) {
        if (todoArr[j].Project === projectArr[i]["Project Title"]) {
          todoArr[j].Project = "Default";
        }
      }
      projectArrParam.splice(i, 1);
      if (!projectArrParam.length) {
        Project.currentProjectId = 0;
      }
      break;
    }
  }

  resetProjectFormInputs();
  renderProjects(projectArr, cardsProjectDiv);
  renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
  setProjects(projectArr);
}

btnNewTodo.addEventListener("click", newTodo);

btnNewProject.addEventListener("click", newProject);

btnUpdateTodo.addEventListener("click", (event) => {
  event.preventDefault();
  const { elementId } = btnUpdateTodo.dataset;
  updateTodoDetails(elementId);
  renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);

  setTodos(todoArr); // save all todos
});

btnUpdateProject.addEventListener("click", (event) => {
  event.preventDefault();
  const { elementProjectId } = btnUpdateProject.dataset;
  updateProjectDetails(elementProjectId);
  renderProjects(projectArr, cardsProjectDiv);

  setProjects(projectArr); // save all projects
});

btnCancel.addEventListener("click", (event) => {
  event.preventDefault();
  delete btnUpdateTodo.dataset.elementId;
  resetTodoFormInputs();
});

btnCancelProject.addEventListener("click", (event) => {
  event.preventDefault();
  delete btnUpdateProject.dataset.elementProjectId;
  resetProjectFormInputs();
});

btnSaveNewTodo.addEventListener("click", (event) => {
  event.preventDefault();
  saveTodoDataToArray(todoArr);
  renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);

  setTodos(todoArr); // save all todos
});

btnSaveNewProject.addEventListener("click", (event) => {
  event.preventDefault();
  saveProjectDataToArray(projectArr);
  renderProjects(projectArr, cardsProjectDiv);

  setProjects(projectArr); // save all projects
});

btnDeleteAllTodos.addEventListener("click", () => {
  const isDelete = confirm("Are you sure you want to delete ALL todos?");
  if (isDelete) {
    todoArr = [];
    resetTodoFormInputs();
    renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
    setTodos(todoArr);
    Todo.currentTodoId = 0;
  }
});

btnDeleteAllProjects.addEventListener("click", () => {
  const isDelete = confirm("Are you sure you want to delete ALL projects?");
  if (isDelete) {
    projectArr = [];
    resetProjectFormInputs();
    renderProjects(projectArr, cardsProjectDiv);
    setProjects(projectArr);
    Project.currentProjectId = 0;

    for (let i = 0, todoArrLength = todoArr.length; i < todoArrLength; i++) {
      todoArr[i].Project = "Default";
    }
    renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
  }
});

// add edit function to edit button on each todo card
document.addEventListener("click", (event) => {
  const allBtnEdit = document.querySelectorAll(".edit-todo");
  allBtnEdit.forEach((btnEdit) => {
    const cardId = parseInt(btnEdit.id.split(" ")[1], 10);
    if (event.target.id === btnEdit.id) {
      resetTodoFormInputs();
      loadTodoDetails(cardId, todoArr);
      const newCardId = `card-todo ${cardId}`;
      const cards = document.querySelectorAll(".card-todo");
      cards.forEach((card) => {
        card.classList.remove("editing-todo");
      });
      const card = document.getElementById(newCardId);
      card.classList.add("editing-todo");
      formTodo.removeAttribute("hidden");
      btnUpdateTodo.removeAttribute("hidden");
      btnSaveNewTodo.setAttribute("hidden", true);
    }
  });
});

// add edit function to edit button on each project card
document.addEventListener("click", (event) => {
  const allBtnEditProject = document.querySelectorAll(".edit-project");
  allBtnEditProject.forEach((btnEditProject) => {
    const cardProjectId = parseInt(btnEditProject.id.split(" ")[1], 10);
    if (event.target.id === btnEditProject.id) {
      resetProjectFormInputs();
      loadProjectDetails(cardProjectId, projectArr);
      const newCardProjectId = `card-project ${cardProjectId}`;
      const cardsProject = document.querySelectorAll(".card-project");
      cardsProject.forEach((cardProject) => {
        cardProject.classList.remove("editing-project");
      });
      const cardProject = document.getElementById(newCardProjectId);
      cardProject.classList.add("editing-project");
      formProject.removeAttribute("hidden");
      btnUpdateProject.removeAttribute("hidden");
      btnSaveNewProject.setAttribute("hidden", true);
    }
  });
});

// add delete function to delete button on each todo card
document.addEventListener("click", (event) => {
  const allBtnDelete = document.querySelectorAll(".delete-todo");
  allBtnDelete.forEach((btnDelete) => {
    const cardId = parseInt(btnDelete.id.split(" ")[1], 10);
    if (event.target.id === btnDelete.id) {
      deleteTodo(cardId, todoArr);
      resetTodoFormInputs();
    }
  });
});

// add delete function to delete button on each project card
document.addEventListener("click", (event) => {
  const allBtnDeleteProject = document.querySelectorAll(".delete-project");
  allBtnDeleteProject.forEach((btnDeleteProject) => {
    const cardProjectId = parseInt(btnDeleteProject.id.split(" ")[1], 10);
    if (event.target.id === btnDeleteProject.id) {
      deleteProject(cardProjectId, projectArr);
      resetProjectFormInputs();
    }
  });
});

document.addEventListener("click", (event) => {
  const allBtnSelectProject = document.querySelectorAll(".select-project");
  allBtnSelectProject.forEach((btnSelectProject) => {
    const cardProjectId = parseInt(btnSelectProject.id.split(" ")[1], 10);

    if (event.target.id === btnSelectProject.id) {
      if (!btnSelectProject.getAttribute("class").includes("selected-project")) {
        btnSelectProject.classList.add("selected-project");
        projectArr.forEach((element) => {
          if (element["Project ID"] === cardProjectId) {
            const selectedProjectName = element["Project Title"];
            selectedProjectSet.add(selectedProjectName);
            // console.log(selectedProjectSet);
          }
        });
      } else {
        btnSelectProject.classList.remove("selected-project");
        projectArr.forEach((element) => {
          if (element["Project ID"] === cardProjectId) {
            const selectedProjectName = element["Project Title"];
            selectedProjectSet.delete(selectedProjectName);
            // console.log(selectedProjectSet);
          }
        });
      }
      renderTodos(filterTodosByProject(selectedProjectSet, todoArr), cardsTodoDiv);
    }
  });
});

/* eslint-enable no-alert, no-restricted-globals */
