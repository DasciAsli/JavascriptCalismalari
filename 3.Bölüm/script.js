//UI vars
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const deleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

loadItems();

//call event listeners
eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);
  deleteAll.addEventListener("click", deleteAllItems);
  taskList.addEventListener("click", deleteItem);
}

function loadItems() {
  items = getItemsFromLS();
  items.forEach(function (item) {
    createItem(item);
  });
}

//get Items From LS
function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

//set Item to LS
function setItemToLS(text) {
  items = getItemsFromLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

//delete Item from LS
function deleteItemFromLS(text) {
  items = getItemsFromLS();
  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}

//create item
function createItem(text) {
  //create li
  var li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  //create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  taskList.appendChild(li);
}

//add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
  }
  createItem(input.value);
  setItemToLS(input.value);
  input.value = "";

  e.preventDefault();
}

//delete all items
function deleteAllItems(e) {
  if (confirm("Are you sure?")) {
    var lielements = document.querySelectorAll("li");
    lielements.forEach(function (item) {
      item.remove();
      //delete all items from LS
      localStorage.clear();
    });
  }
  e.preventDefault();
}

//delete an  item
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      //delete item from LS
      deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
  }
  e.preventDefault();
}
