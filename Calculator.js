let string = "";
let buttons = document.querySelectorAll(".buttons button");
let display = document.querySelector(".display");
let result = document.querySelector(".res");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const numEvent = e.target.innerHTML;
    let res = 0;
    try {
      if (numEvent === "=") {
        if (string === "") {
          display.value = " ";
        }else {
          res = res + math.evaluate(string);
          display.value = `${string}`;
          result.classList.remove('smallSize');
          result.innerHTML="";
          result.innerHTML =`= ${res}`;
        }
      } else if (numEvent === "clear") {
        string = "";
        display.value = " ";
        result.innerHTML = " ";
      } else {
        string = string + numEvent;
        result.classList.add('smallSize');
        result.innerHTML=string;
        display.value = `${string}`;
      }
    } catch (error) {
      console.log(`Code doesn't worked because of: ${error.message}`);
    }
  });
});
