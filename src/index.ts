interface ToDoItem {
  name: string;
  complete: boolean;
  children?: ToDoItem[];
}

let toDoList: ToDoItem[] = JSON.parse(localStorage.getItem("todoList") ?? "[]");

function markDone(event: MouseEvent) {
  if ((event.target as HTMLElement).tagName !== "INPUT") {
    return;
  }
  if ((event.target as HTMLInputElement).type !== "checkbox") {
    return;
  }

  toDoList[
    parseInt((event.target as HTMLElement).dataset["index"])
  ].complete = !toDoList[
    parseInt((event.target as HTMLElement).dataset["index"])
  ].complete;

  showList();
}
document.onclick = markDone;

function showList() {
  let listContent = toDoList
    .map(
      (toDoItem, index) =>
        `<li class="list-group-item ${
          toDoItem.complete ? "complete" : ""
        }"> <input type="checkbox" ${
          toDoItem.complete ? "checked" : ""
        } data-index="${index}"/>${toDoItem.name}<button class="btn btn-dark btn-sm">+</button></li>`
    )
    .join("");
  document.getElementById("todolist").innerHTML = listContent;
  localStorage.setItem("todoList", JSON.stringify(toDoList));
}

function addToDo() {
  let boxInput = (document.getElementById("newToDo") as HTMLInputElement).value;
  if (boxInput == "") {
    return;
  }
  toDoList.push({ name: boxInput, complete: false });
  showList();
  (document.getElementById("newToDo") as HTMLInputElement).value = "";
}

document.getElementById("addToDo").onclick = addToDo;
showList();

function clearCompleted() {
  toDoList = toDoList.filter(listItem => !listItem.complete);
  showList();
}

document.getElementById("clearCompleted").onclick = clearCompleted;
