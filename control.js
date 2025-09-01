const myDiv= document.getElementById("myDiv");
const answer= ["C","E","V","A","P"];
const inputs = document.querySelectorAll(".ans");


function focusFirstEmpty() {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].focus();
      return;
    }
  }
}
function refresh(){
  const userInput = Array.from(inputs).map(inp => inp.value.toUpperCase());
      const children = myDiv.children;
  for(let i=0; i<5; i++){
    inputs[i].value = "";
    children[i].style.backgroundColor  = "#F3F3E0"
  }
  focusFirstEmpty();
}
window.addEventListener("DOMContentLoaded", () => {
  focusFirstEmpty();
});


inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "") {
      if (index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
    if (event.key === "Enter" && inputs[4].value !== "") {
    const userInput = Array.from(inputs).map(inp => inp.value.toUpperCase());
      const children = myDiv.children;
    for(let step=0; step <5; step++){
        if(userInput[step]==answer[step]){
            children[step].style.backgroundColor = "green";
            }
        else{
            children[step].style.backgroundColor = "red";

        }
        }
    }
  });
  input.addEventListener("blur", () => {
    setTimeout(focusFirstEmpty, 0);
  });
});
  