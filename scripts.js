// Esercizio 1

const nameInput = document.getElementById("nameInput");
const savedName = document.getElementById("savedName");
const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");

// refresh localStorage
function refresh() {
  const localStorageName = localStorage.getItem("username");
  if (localStorageName) {
    savedName.innerText = localStorageName;
  } else {
    savedName.innerText = "";
  }
}

// saveBtn
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("username", name);
    refresh();
  } else {
    alert("Inserisci un nome valido");
  }
});

// rmvBtn
removeBtn.addEventListener("click", () => {
  localStorage.removeItem("username");
  refresh();
});

// Esercizio 2

const counterId = document.getElementById("counter");

let count = sessionStorage.getItem("counter");

if (!count) {
  count = 0;
} else {
  count = parseInt(count);
}

counterId.innerText = count;

function updateCounter() {
  count++;
  sessionStorage.setItem("counter", count);
  counterId.innerText = count;
}

setInterval(updateCounter, 1000);