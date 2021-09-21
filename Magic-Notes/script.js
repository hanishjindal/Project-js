let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", addNote);
showNotes();
function addNote(e) {
  let myNote = document.getElementById("floatingTextarea");
  let myTitle = document.getElementById("title");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: myTitle.value,
    text: myNote.value,
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  myNote.value = "";
  myTitle.value = "";
  showNotes();
}

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `
      <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${index + 1}- ${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button href="#" onclick="deleteNote(${index})"; class="btn btn-primary">Delete Note</button>
                </div>
            </div>
      `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No note added yet 🤨...`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let searchTxt = document.getElementById("searchTxt");
let search = document.getElementById("search");

search.addEventListener("click", function () {
  searchTxt.value = "";
  searchNote();
});

searchTxt.addEventListener("input", searchNote);

function searchNote() {
  let inputVal = searchTxt.value.toLowerCase();
  let notesCard = document.getElementsByClassName("noteCard");
  Array.from(notesCard).forEach(function (element) {
    let cardTitle = element
      .getElementsByTagName("h5")[0]
      .innerText.toLowerCase();
    let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    if (cardTxt.includes(inputVal) || cardTitle.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
