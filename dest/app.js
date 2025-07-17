"use strict";
let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todoList");
addBtn.addEventListener("click", () => {
    let task = todoInput.value.trim();
    if (!task)
        return;
    // Create list item
    let li = document.createElement("li");
    li.className =
        "list-group-item d-flex justify-content-between align-items-center";
    // Create span to hold the task text
    let taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-sm btn-danger ms-2";
    delBtn.addEventListener("click", () => todoList.removeChild(li));
    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-sm btn-secondary ms-2";
    editBtn.addEventListener("click", () => {
        if (editBtn.textContent === "Edit") {
            // Change to input for editing
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskSpan.textContent || "";
            editInput.className = "form-control form-control-sm";
            li.replaceChild(editInput, taskSpan);
            editBtn.textContent = "Save";
        }
        else {
            // Save edited task
            const newTask = li.querySelector("input").value.trim();
            if (newTask) {
                taskSpan.textContent = newTask;
                li.replaceChild(taskSpan, li.querySelector("input"));
                editBtn.textContent = "Edit";
            }
        }
    });
    // Button group container
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group ms-2";
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(delBtn);
    li.appendChild(taskSpan);
    li.appendChild(btnGroup);
    todoList.appendChild(li);
    todoInput.value = "";
});
