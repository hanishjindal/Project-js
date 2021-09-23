console.log("Hi");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      content.innerText = data;
    });
}

getData();
