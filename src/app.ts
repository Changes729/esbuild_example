import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input?.value == "" || input?.value == null) {
    return;
  }

  const newTask: Task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createAt: new Date(),
  };
  tasks.push(newTask);

  addListItem(newTask);
  input.value = "";
});

function addListItem(task: Task): boolean {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", (event) => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
  return true;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const tasksString = localStorage.getItem("tasks");
  if (tasksString == null) return [];
  return JSON.parse(tasksString);
}
