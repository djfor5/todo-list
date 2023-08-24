import { format } from "date-fns";

function renderProjects(projectArr, contentContainer) {
  // remove all contents from container
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // render each project in a card
  for (let i = 0, arrLength = projectArr.length; i < arrLength; i++) {
    const projectCard = document.createElement("div");
    projectCard.id = `card-project ${projectArr[i]["Project ID"]}`;
    const projectDetails = document.createElement("div");
    const projectBtns = document.createElement("div");
    projectDetails.classList.add("card-project-details");
    projectBtns.classList.add("card-project-buttons");
    projectCard.classList.add("card-project");
    const keys = Object.keys(projectArr[i]);
    keys.forEach((key) => {
      const spanKey = document.createElement("span");
      spanKey.textContent = `${key}: `;
      const spanValue = document.createElement("span");
      spanValue.textContent = projectArr[i][key];
      projectDetails.appendChild(spanKey);
      projectDetails.appendChild(spanValue);
      const today = format(new Date(), "yyyy-MM-dd HH:mm:ss");
      if (key === "Project Due Date") {
        spanValue.style.fontWeight = "bold";
        if (projectArr[i][key] < today) {
          spanValue.style.color = "red";
        } else {
          spanValue.style.color = "green";
        }
      }
    });
    const btnSelectProject = document.createElement("button");
    btnSelectProject.textContent = "Select";
    btnSelectProject.classList.add("select");
    btnSelectProject.classList.add("select-project");
    btnSelectProject.id = `select-project ${projectArr[i]["Project ID"]}`;
    const btnEditProject = document.createElement("button");
    btnEditProject.textContent = "Edit";
    btnEditProject.classList.add("edit");
    btnEditProject.classList.add("edit-project");
    btnEditProject.id = `edit-project ${projectArr[i]["Project ID"]}`;
    const btnDeleteProject = document.createElement("button");
    btnDeleteProject.textContent = "Delete";
    btnDeleteProject.classList.add("delete");
    btnDeleteProject.classList.add("delete-project");
    btnDeleteProject.id = `delete-project ${projectArr[i]["Project ID"]}`;
    projectBtns.appendChild(btnSelectProject);
    projectBtns.appendChild(btnEditProject);
    projectBtns.appendChild(btnDeleteProject);
    projectCard.appendChild(projectDetails);
    projectCard.appendChild(projectBtns);
    contentContainer.appendChild(projectCard);
  }
}

function renderTodos(todoArr, contentContainer) {
  // remove all contents from container
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // render each todo in a card
  for (let i = 0, arrLength = todoArr.length; i < arrLength; i++) {
    const todoCard = document.createElement("div");
    todoCard.id = `card-todo ${todoArr[i]["Todo ID"]}`;
    const todoDetails = document.createElement("div");
    const todoBtns = document.createElement("div");
    todoDetails.classList.add("card-todo-details");
    todoBtns.classList.add("card-todo-buttons");
    todoCard.classList.add("card-todo");
    const keys = Object.keys(todoArr[i]);
    keys.forEach((key) => {
      const spanKey = document.createElement("span");
      spanKey.textContent = `${key}: `;
      const spanValue = document.createElement("span");
      spanValue.textContent = todoArr[i][key];
      todoDetails.appendChild(spanKey);
      todoDetails.appendChild(spanValue);
      const today = format(new Date(), "yyyy-MM-dd HH:mm:ss");
      if (key === "Due Date") {
        spanValue.style.fontWeight = "bold";
        if (todoArr[i][key] < today) {
          spanValue.style.color = "red";
        } else {
          spanValue.style.color = "green";
        }
      }
    });
    const btnEditTodo = document.createElement("button");
    btnEditTodo.textContent = "Edit";
    btnEditTodo.classList.add("edit");
    btnEditTodo.classList.add("edit-todo");
    btnEditTodo.id = `edit ${todoArr[i]["Todo ID"]}`;
    const btnDeleteTodo = document.createElement("button");
    btnDeleteTodo.textContent = "Delete";
    btnDeleteTodo.classList.add("delete");
    btnDeleteTodo.classList.add("delete-todo");
    btnDeleteTodo.id = `delete ${todoArr[i]["Todo ID"]}`;
    todoBtns.appendChild(btnEditTodo);
    todoBtns.appendChild(btnDeleteTodo);
    todoCard.appendChild(todoDetails);
    todoCard.appendChild(todoBtns);
    contentContainer.appendChild(todoCard);
  }
}

export {
  renderProjects,
  renderTodos,
};
