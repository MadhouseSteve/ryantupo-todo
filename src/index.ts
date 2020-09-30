interface ToDoItem {
    name: string;
}

let toDoList: ToDoItem[] = [];

toDoList.push({name:"blah blah"});

toDoList.push({name:"number two!"});

toDoList.push({name:"threeee means cheese"});

function markDone(event: MouseEvent) {
    if ((event.target as HTMLElement).tagName !== "INPUT") {
        return;
    }    
    if ((event.target as HTMLInputElement).type !== "checkbox"){
        return;
    }
    console.log((event.target as HTMLElement).dataset);
}
document.onclick = markDone;

function showList(){
    let listContent = toDoList.map((toDoItem, index) => `<li> <input type="checkbox" data-index="${index}"/>${toDoItem.name}</li>`).join("");
    document.getElementById("todolist").innerHTML = listContent;
}

function addToDo(){
    
    let boxInput = (document.getElementById("newToDo") as HTMLInputElement).value
    if (boxInput == ""){
        return;
    }
    toDoList.push({name:boxInput});
    showList();
    console.log("nadia and lewis sitting in a tree");
    (document.getElementById("newToDo") as HTMLInputElement).value = "";
};
    
document.getElementById("addToDo").onclick = addToDo;
showList();