let string = "";
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let result = document.querySelector(".res");
const backSpace=document.querySelector('.backspace');

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let numEvent = e.target.innerHTML;
    if(numEvent==='x'){
      numEvent='*'
    }
    let res = 0;
    let round = 0;

    try {
      if (numEvent === "=") {
        if (string === "") {
          display.value = " ";
        } else {
          round = Math.round(math.evaluate(string) * 100) / 100;
          res = res + round;
          display.value = `${string.replace('*','x')}`;
          result.classList.remove("smallSize");
          result.innerHTML = "";
          result.innerHTML = `${res}`;
        }
      } else if (numEvent === "C") {
        string = "";
        display.value = " ";
        result.innerHTML = " ";
      }else if(numEvent==='⌫'){
        display.value=display.value.slice(0,-1);
        string=string.slice(0,-1);
        result.innerHTML=string;
        return;
      } else {
        string = string + numEvent;
        result.classList.add("smallSize");
        result.innerHTML = string.replace('*','x');
        display.value = string.replace('*','x');
      }
    } catch (error) {
      alert(error);
      display.classList.add('danger');
      window.location.reload();
    }
  });
});
