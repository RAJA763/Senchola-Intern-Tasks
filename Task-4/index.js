date = function(){
    const today = new Date();

    const options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    return today.toLocaleDateString("en-US", options);    
}

document.getElementById("get-date").innerHTML = date();

const newItem = document.getElementById("newItem");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (newItem.value === '') {
        alert("Type your work");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = newItem.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10006;";
        li.appendChild(span);
    }
    newItem.value = "";
    saveData();
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();