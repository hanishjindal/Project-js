let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

for (const item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText != "=" && buttonText != "<- /C") {
      screen.value += buttonText;
    } else if (buttonText == "<- /C") {
      let str = screen.value;
      screen.value = str.substring(0, str.length - 1);
    } else if (buttonText == "=") {
      screen.value = eval(screen.value);
    }
  });
}

buttons[3].addEventListener("dblclick", () => {
  screen.value = "";
});
