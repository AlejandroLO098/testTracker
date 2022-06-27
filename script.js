window.addEventListener("load", () => {
  const form = document.querySelector("#new-todo-form");
  const input = document.querySelector("#list-item-input");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let task = input.value;

    const task_Ele = document.createElement("div");
    task_Ele.classList.add("task");

    const taskContentEle = document.createElement("div");
    taskContentEle.classList.add("task-content");

    task_Ele.appendChild(taskContentEle);

    const taskInputEle = document.createElement("input");
    taskInputEle.classList.add("txt");
    taskInputEle.type = "text";
    taskInputEle.value = task;
    taskInputEle.setAttribute("readonly", "readonly");

    taskContentEle.appendChild(taskInputEle);

    const listActionsEle = document.createElement("div");
    listActionsEle.classList.add("actions");

    const editEle = document.createElement("button");
    editEle.classList.add("update");
    editEle.innerHTML = "Edit";

    const deleteEl = document.createElement("button");
    deleteEl.classList.add("delete");
    deleteEl.innerText = "Delete";

    listActionsEle.appendChild(editEle);
    listActionsEle.appendChild(deleteEl);

    task_Ele.appendChild(listActionsEle);

    listEl.appendChild(task_Ele);

    input.value = "";

    editEle.addEventListener("click", (e) => {
      console.log(editEle);
      if (editEle.innerHTML.toLowerCase() == "update") {
        console.log("save is active");
        editEle.innerHTML = "Save";
        taskInputEle.removeAttribute("readonly");
        taskInputEle.focus();
      } else {
        console.log("editing");
        editEle.innerHTML = "Edit";
        taskInputEle.setAttribute("readonly", "readonly");
      }
    });
    deleteEl.addEventListener("click", (e) => {
      listEl.removeChild(task_Ele);
    });
  });
});
