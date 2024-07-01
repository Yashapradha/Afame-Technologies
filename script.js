let input = document.getElementById("inputBox");
// console.log(input);
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log("Button clicked:", e.target.innerHTML);
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
      } catch {
        string = "Error";
      }
      //console.log(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      // console.log(string);
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      // console.log(string);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      // console.log(string);
      input.value = string;
      // console.log(input);
    }
    // console.log(inputBox.value);
  });
});
