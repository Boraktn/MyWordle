const myDiv= document.getElementById("myDiv");
const answer= ["C","E","V","A","P"];
const inputs = document.querySelectorAll("#div1 .ans");
const inputs2 = document.querySelectorAll("#div2 .ans");
const inputs3 = document.querySelectorAll("#div3 .ans");
const inputs4 = document.querySelectorAll("#div4 .ans");
const inputs5 = document.querySelectorAll("#div5 .ans");
const inputs6 = document.querySelectorAll("#div6 .ans");
const inputList = [inputs, inputs2, inputs3, inputs4, inputs5, inputs6];
let row = 0;


function focusFirstEmpty() {
  for (let i = 0; i < inputList[row].length; i++) {
    if (inputList[row][i].value === "") {
      inputList[row][i].focus();
      return;
    }
  }
}
function refresh(){
  const userInput = Array.from(inputList[row]).map(inp => inp.value.toUpperCase());
      const children = myDiv.children;
  for(let i=0; i<5; i++){
    inputList[row][i].value = "";
    children[i].style.backgroundColor  = "#F3F3E0"
  }
  focusFirstEmpty();
}
window.addEventListener("DOMContentLoaded", () => {
  focusFirstEmpty();
});


inputList[row].forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputList[row].length - 1) {
      inputList[row][index + 1].focus();
    console.log("b");  
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "") {
      if (index > 0) {
        inputList[row][index - 1].focus();
        inputList[row][index - 1].value = "";
      }
    }
    if (event.key === "Enter" && inputList[row][4].value !== "") {
    const userInput = Array.from(inputList[row]).map(inp => inp.value.toUpperCase());
      const children = myDiv.children[row].children;
    for(let step=0; step <5; step++){
        if(userInput[step]==answer[step]){
            children[step].style.backgroundColor = "green";
            }
        else{
            children[step].style.backgroundColor = "red";

        }
        }
        row = row  + 1;
        focusFirstEmpty();
    }
  });
  input.addEventListener("blur", () => {
    setTimeout(focusFirstEmpty, 0);
  });
});
  