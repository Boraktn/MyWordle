const myDiv= document.getElementById("myDiv");
const answer= ["C","E","V","A","P"];
const inputs = document.querySelectorAll(".ans");

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
    if (event.key === "Enter" && i) {
    const userInput = Array.from(inputs).map(inp => inp.value.toUpperCase());
      const children = myDiv.children;
    for(let step=0; step <5; step++){
        console.log("nicce");
        if(userInput[step]==answer[step]){
                    console.log("4");

            children[step].style.backgroundColor = "green";
            }
        else{
            children[step].style.backgroundColor = "red";

        }
        }
    }
  });
});
  