var tasks;
function initialize() {
    tasks = [];
    groceryList = document.getElementById("list");
    groceryInput = document.getElementById("grocery");
}

function display() { 
    emptyList();
    for(let i = 0; i < tasks.length; i++) {
        let item = document.createElement('div');
        groceryList.appendChild(item);
        
        /* item.innerHTML = "Item " + (i + 1) + ": " + tasks[i]; */
        item.setAttribute('id', "item" + (i + 1));
        item.setAttribute('class', "groceryItem");
        let itemText = document.createElement('div');
        item.appendChild(itemText);
        itemText.setAttribute('id', "item" + (i + 1) + "text");
        itemText.setAttribute('class', "itemText");
        itemText.innerHTML = "Item " + (i + 1) + ": " + tasks[i];
        let numBox = document.createElement('div');
        item.append(numBox, item.firstChild);
        numBox.setAttribute('id', "numBox" + (i + 1));
        numBox.setAttribute('class', "numBoxes");
        numBox.innerHTML = (i + 1);
        let arrows = document.createElement('div');
        item.appendChild(arrows);
        arrows.setAttribute('id', "arrowBox" + (i + 1));
        arrows.setAttribute('class', "arrowBoxes");
        createArrows(arrows);
    }
}

function emptyList() {
    while(groceryList.firstChild) {
        groceryList.removeChild(groceryList.firstChild);
    }
}

function addTask() { 
    if(tasks.length === 13) { 
        return;
    }
    tasks.push(groceryInput.value);
    display();
}

function createArrows(arrowBox) {
    let button1 = document.createElement('button');
    arrowBox.appendChild(button1);
    button1.setAttribute('class', "arrowButtons");
    button1.setAttribute('onclick', "move(this, -1);")
    button1.innerHTML = "Move Up"
    let button2 = document.createElement('button');
    arrowBox.appendChild(button2);
    button2.setAttribute('class', "arrowButtons");
    button2.setAttribute('onclick', "move(this, -1);")
    button2.innerHTML = "Move Down"
}

function move(item, num) {

}