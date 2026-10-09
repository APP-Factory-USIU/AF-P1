import { addTask, toggleTask, taskSummary } from "./tasks.js";

const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const list = document.querySelector("#task-list");
const summary = document.querySelector("#summary");

let tasks = [
  { id: 1, title: "Open a pull request", completed: false },
  { id: 2, title: "Review a teammate's change", completed: false },
];

function render() {
  summary.textContent = taskSummary(tasks);
  list.replaceChildren();

  for (const task of tasks) {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.textContent = task.title;
    if (task.completed) label.className = "done";

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = task.completed ? "Reopen" : "Complete";
    button.setAttribute("aria-label", `${button.textContent} ${task.title}`);
    button.addEventListener("click", () => {
      tasks = toggleTask(tasks, task.id);
      render();
    });

    item.append(label, button);
    list.append(item);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  tasks = addTask(tasks, titleInput.value);
  titleInput.value = "";
  titleInput.focus();
  render();
});

render();
