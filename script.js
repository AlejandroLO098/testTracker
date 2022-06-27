"use strict";
window.addEventListener("load", () => {
  const form = document.querySelector("#new-todo-form");
  const input = document.querySelector("#list-item-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_Ele = document.createElement("div");
    task_Ele.classList.add("task");

    const taskContentEle = document.createElement("div");
    taskContentEle.classList.add("task-content");

    task_Ele.appendChild(taskContentEle);

    const taskInputEle = document.createElement("input");
    taskInputEle.classList.add("text");
    taskInputEle.type = "text";
    taskInputEle.value = task;
    taskInputEle.setAttribute("readonly", "readonly");

    taskContentEle.appendChild(taskInputEle);

    const listActionsEle = document.createElement("div");
    listActionsEle.classList.add("actions");

    const editEle = document.createElement("button");
    editEle.classList.add("update");
    editEle.innerText = "Edit";

    const deleteEl = document.createElement("button");
    deleteEl.classList.add("delete");
    deleteEl.innerText = "Delete";

    listActionsEle.appendChild(editEle);
    listActionsEle.appendChild(deleteEl);

    task_Ele.appendChild(listActionsEle);

    listEl.appendChild(task_Ele);

    input.value = "";

    editEle.addEventListener("click", (e) => {
      if (editEle.innerHTML.toLowerCase() == "update") {
        editEle.innerText = "Save";
        taskInputEle.removeAttribute("readonly");
        taskInputEle.focus();
      } else {
        editEle.innerText = "Edit";
        taskInputEle.setAttribute("readonly", "readonly");
      }
    });
    deleteEl.addEventListener("click", (e) => {
      listEl.removeChild(task_Ele);
    });
  });
});
