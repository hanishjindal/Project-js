class Book {
  constructor(title, author, type, price) {
    this.title = title;
    this.author = author;
    this.type = type;
    this.price = price;
  }
}

class Display {
  add(book) {
    let tableBody = document.getElementById("tableBody");
    let uiString = `
                        <tr>
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                            <td>${book.price}</td>
                        </tr>
                        `;
    tableBody.innerHTML += uiString;
  }
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
  validate(book) {
    if (book.title.length > 2 && book.author.length > 2 && book.price > 0) {
      return true;
    } else {
      return false;
    }
  }
  show(msg) {
    document.getElementById("msg").innerHTML = `
      <div class="alert alert-${msg} alert-dismissible fade show" role="alert">
      <strong>${msg.toUpperCase()}</strong> You should check in on some of those fields below.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span onclick="hideMsg()" aria-hidden="true">&times;</span>
      </button>
      </div>
      `;
    setTimeout(() => {
      hideMsg();
    }, 4000);
  }
}

function hideMsg() {
  document.getElementById("msg").innerHTML = "";
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let title = document.getElementById("bookTitle").value.toUpperCase();
  let author = document.getElementById("bookAuthor").value.toUpperCase();
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else {
    type = cooking.value;
  }
  let price = document.getElementById("price").value;

  let book = new Book(title, author, type, price);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success");
  } else {
    display.show("warning");
  }
}
