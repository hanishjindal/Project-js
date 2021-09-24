const parametersBox = document.getElementById("parametersBox");
const jsonBox = document.getElementById("jsonBox");
const customParam = document.getElementById("customParam");
const json = document.getElementById("json");
const requestJsonText = document.getElementById("requestJsonText");
const submit = document.getElementById("submit");
const responseJsonText = document.getElementById("responseJsonText");
const addParam = document.getElementById("addParam");
let noOfParams = 0;

parametersBox.style.display = "none";

customParam.addEventListener("click", () => {
  jsonBox.style.display = "none";
  parametersBox.style.display = "block";
});

json.addEventListener("click", () => {
  parametersBox.style.display = "none";
  jsonBox.style.display = "block";
});

addParam.addEventListener("click", () => {
  const params = document.getElementById("params");
  let str = `<div id="parametersBox">
                <div class="row my-2">
                    <label for="parameterKey${
                      noOfParams + 2
                    }" class="col-sm-2 col-form-label">Parameter ${
    noOfParams + 2
  }</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${
                          noOfParams + 2
                        }" placeholder="Enter parameter ${noOfParams + 2} Key">
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="parameterValue${
                          noOfParams + 2
                        }"
                            placeholder="Enter parameter ${
                              noOfParams + 2
                            } Value">
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-primary deleteParam" style="padding:4px 16px 7px 16px;">-</button>
                    </div>
                </div>
            </div>
            `;
  let paramElement = getElementFromString(str);
  params.appendChild(paramElement);
  noOfParams++;
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.parentElement.remove();
    });
  }
});

function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

submit.addEventListener("click", () => {
  const urlField = document.getElementById("urlField").value;
  const requestType = document.querySelector(
    "input[name='requestType']:checked"
  ).value;
  const contentType = document.querySelector(
    "input[name='contentType']:checked"
  ).value;
  responseJsonText.value = "Please Wait....\nFetching Response....";
  if (contentType == "Custom Parameters") {
    data = {};
    for (i = 0; i < noOfParams + 1; i++) {
      let key = document.getElementById("parameterKey" + (i + 1)).value;
      let value = document.getElementById("parameterValue" + (i + 1)).value;
      if (key != undefined) {
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
  } else {
    data = document.getElementById("requestJsonText").value;
  }
  if (urlField != "") {
    if (requestType == "GET") {
      fetch(urlField, {
        method: "GET",
      })
        .then((response) => response.text())
        .then((text) => {
          responseJsonText.value = text;
        });
    } else {
      fetch(urlField, {
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.text())
        .then((text) => {
          responseJsonText.value = text;
        });
    }
  }
});
