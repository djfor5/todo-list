export default function filterTodosByProject(selectedProjectSet, todoArr) {
  if (!selectedProjectSet.size) return todoArr;

  const todoArrFiltered = [];
  for (let i = 0, todoArrLength = todoArr.length; i < todoArrLength; i++) {
    if (selectedProjectSet.has(todoArr[i].Project)) {
      todoArrFiltered.push(todoArr[i]);
    }
  }
  return todoArrFiltered;
}

// export {
//   filterTodosByProject,
// };
