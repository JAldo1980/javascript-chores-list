const choresInput = document.getElementById("chores-input");
let choresOutput = document.getElementById("chores-output");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");

let chores = [];

// Add btn event listener
addBtn.addEventListener("click", function () {
  if (choresInput.value === "") {
    return false;
  }
  if (chores.includes(choresInput.value)) {
    choresInput.value = "";
  } else chores.push(choresInput.value);
  renderChores();
  choresInput.value = "";
});

// render chore items
function renderChores() {
  let html = "";
  chores.forEach(function (chore) {
    html += `
        <p class="chore-style">${chore}</p>
        `;
  });
  choresOutput.innerHTML = html;
}

// delete button - this clears ALL items
deleteBtn.addEventListener("click", function () {
  choresInput.value = "";
  chores.length = 0;
  choresOutput.innerHTML = "";
});

// remove individual chore item

//
