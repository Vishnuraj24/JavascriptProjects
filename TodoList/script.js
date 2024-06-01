const input = document.getElementById("colorfulinput");
const todolist = document.getElementById("Todolist");

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addtolist(input.value);
    input.value = "";
  }
});

function addtolist(val) {
  if (val != "") {
    var lielement = document.createElement("li");
    lielement.innerHTML = `${val}`;
    todolist.appendChild(lielement);
    lielement.addEventListener("click", function () {
      this.classList.toggle("done");
    });
  } else {
    alert("Please write something");
  }
}
