document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("new-task-priority");
  const taskUl = document.getElementById("tasks");

  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
