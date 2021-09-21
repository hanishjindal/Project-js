let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  let result = document.getElementById("result");
  const xhr = new XMLHttpRequest();
  //   xhr.open("Get", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");
  let params = { name: "test", salary: "123", age: "23" };
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && this.status === 200) {
      result.innerText = this.responseText;
    }
  };
  xhr.send(params);
}
let backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", buttonClickHandler2);

function buttonClickHandler2() {
  let result = document.getElementById("result");
  let list = document.getElementById("list");
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && this.status === 200) {
      let obj = JSON.parse(this.responseText);
      let str = " ";
      let obj2 = obj["data"];
      console.log(obj2);
      for (key in obj2) {
        console.log(key);
        for (key2 in key) {
          str += `<li>${key[key2]}</li>`;
        }
      }
      result.innerHTML = str;
    }
  };
  xhr.send();
}
