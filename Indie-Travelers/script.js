const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const car = document.getElementById("car");
const address = document.getElementById("address");
const submit = document.getElementById("submit");
const displaySuccess = document.getElementById("displaySuccess");

username.addEventListener("blur", validateUserName);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);
address.addEventListener("blur", validateAddress);
submit.addEventListener("click", formSubmit);

function validateUserName() {
  let reg = /^([a-zA-Z]){3,16}\s([a-zA-Z]){3,16}/;
  let str = username.value;
  if (reg.test(str)) {
    username.classList.remove("is-invalid");
    return true;
  } else {
    username.classList.add("is-invalid");
    return false;
  }
}
function validateEmail() {
  let reg = /^([_\-\.0-9a-zA-Z ]+)@([\.0-9a-zA-Z]+)\.([0-9a-zA-Z]+)$/;
  let str = email.value;
  if (reg.test(str)) {
    email.classList.remove("is-invalid");
    return true;
  } else {
    email.classList.add("is-invalid");
    return false;
  }
}
function validatePhone() {
  let reg = /^([\+0-9\s]){2,4}?[6-9]([0-9]){4}\s?([0-9]){5}$/;
  let str = phone.value;
  if (reg.test(str)) {
    phone.classList.remove("is-invalid");
    return true;
  } else {
    phone.classList.add("is-invalid");
    return false;
  }
}
function validateAddress() {
  let reg = /^([a-zA-Z0-9]){2}/;
  let str = address.value;
  if (reg.test(str)) {
    address.classList.remove("is-invalid");
    return true;
  } else {
    address.classList.add("is-invalid");
    return false;
  }
}
function formSubmit(e) {
  e.preventDefault();
  if (
    validateUserName() &&
    validateEmail() &&
    validatePhone() &&
    validateAddress()
  ) {
    displaySuccess.innerHTML = `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success</strong> Your Travel request have been successfully submitted...😉
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
`;
    console.log("Done");
    username.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    car.value = "Swift Dzire";
  } else {
    displaySuccess.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Wrong Details-</strong> Please check the details entered...🙄
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
      `;
  }
}
