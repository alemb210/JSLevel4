var tasks;
function initialize() {
    tasks = [];
    groceryList = document.getElementById("list");
    groceryInput = document.getElementById("grocery");
}

function display() {
    emptyList();
    for (let i = 0; i < tasks.length; i++) {
        let item = document.createElement('div');
        groceryList.appendChild(item);
        item.setAttribute('id', "item" + (i + 1));
        item.setAttribute('class', "groceryItem");
        let itemText = document.createElement('div');
        item.appendChild(itemText);
        itemText.setAttribute('id', "item" + (i + 1) + "text");
        itemText.setAttribute('class', "itemText");
        itemText.innerHTML = tasks[i];
        let numBox = document.createElement('div');
        item.append(numBox, item.firstChild);
        numBox.setAttribute('id', "numBox" + (i + 1));
        numBox.setAttribute('class', "numBoxes");
        numBox.innerHTML = (i + 1);
        let buttons = document.createElement('div');
        item.appendChild(buttons);
        buttons.setAttribute('id', "buttonBox" + (i + 1));
        buttons.setAttribute('class', "buttonBoxes");
        createButtons(buttons);
    }
}

function emptyList() {
    while (groceryList.firstChild) {
        groceryList.removeChild(groceryList.firstChild);
    }
}

function addTask() {
    if (checkDupe(groceryInput.value)) {
        return;
    }
    tasks.push(groceryInput.value);
    display();
}

function createButtons(buttonBox) {
    let button1 = document.createElement('button');
    buttonBox.appendChild(button1);
    button1.setAttribute('class', "arrowButtons");
    button1.setAttribute('onclick', "move(this, -1);");
    button1.innerHTML = "Move Up";
    let button2 = document.createElement('button');
    buttonBox.appendChild(button2);
    button2.setAttribute('class', "arrowButtons");
    button2.setAttribute('onclick', "move(this, 1);");
    button2.innerHTML = "Move Down";
    let button3 = document.createElement('button');
    buttonBox.appendChild(button3);
    button3.setAttribute('class', "arrowButtons");
    button3.setAttribute('onclick', "remove(this);");
    button3.innerHTML = "Remove Item";
}

function move(item, diff) {
    let num = item.parentElement.parentElement.id.substring(4) - 1;
    let newNum = num + diff;
    if (newNum < 0 || newNum >= tasks.length) {
        alert("You can't move this item here.")
        return;
    }
    if (diff > 0) {
        tasks.splice(num + 2, 0, tasks[num]);
        tasks.splice(num, 1);
    }
    else {
        tasks.splice(newNum, 0, tasks[num]);
        tasks.splice(num + 1, 1);
    }
    display();
}

function remove(item) {
    let num = item.parentElement.parentElement.id.substring(4) - 1;
    tasks.splice(num, 1);
    display();
}

function checkDupe(itemName) {
    for (let i = 0; i < tasks.length; i++) {
        if (itemName.toLowerCase() === tasks[i]) {
            return true;
        }
    }
    return false;
}