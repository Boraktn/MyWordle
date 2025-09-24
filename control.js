let words= ""
let answer= []
let result= []
fetch("filteredwords.txt")
  .then(res => res.text())
  .then(text => {
      words = text.split("\n")
      .map(w => w.trim())
      .filter(w => w.length > 0);
      const randomWord = words[Math.floor(Math.random() * words.length)];
      answer = randomWord.split("");
        console.log(answer);

  })
    .catch(err => console.error(err));



const myDiv= document.getElementById("myDiv");
const popUp= document.getElementById("popup");
const popUpAnswer=document.getElementById("popupanswer");
const inputs = document.querySelectorAll("#div1 .ans");
const inputs2 = document.querySelectorAll("#div2 .ans");
const inputs3 = document.querySelectorAll("#div3 .ans");
const inputs4 = document.querySelectorAll("#div4 .ans");
const inputs5 = document.querySelectorAll("#div5 .ans");
const inputs6 = document.querySelectorAll("#div6 .ans");
const inputList = [inputs, inputs2, inputs3, inputs4, inputs5, inputs6];
let row = 0;

document.querySelectorAll(".ans input").forEach(input => {
  input.addEventListener("input", () => {
    input.classList.add("animate");

    setTimeout(() => {
      input.classList.remove("animate");
    }, 200);
  });
});
function focusFirstEmpty() {
  for (let i = 0; i < inputList[row].length; i++) {
    if (inputList[row][i].value === "") {
      inputList[row][i].focus();
      return;
    }
  }
}
function refresh(){
  popUp.style.visibility= "hidden"
  /*const userInput = Array.from(inputList[row]).map(inp => inp.value.toUpperCase());*/
      const randomWord = words[Math.floor(Math.random() * words.length)];
      answer = randomWord.split("");
      const children = myDiv.children;
  for(let i=0; i<6; i++){
    for(let r=0; r<5; r++){
    inputList[i][r].value = "";
    children[i].children[r].style.backgroundColor  = "#292929"
    result = [];
    }
  
  }
  row=0;
  focusFirstEmpty();
  console.log(answer);
}
window.addEventListener("DOMContentLoaded", () => {
  focusFirstEmpty();
});


inputList.forEach((rowList, rowIndex) => {
  rowList.forEach((input, index) => {

  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < rowList.length - 1) {
      rowList[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "") {
      if (index > 0) {
        rowList[index - 1].focus();
        rowList[index - 1].value = "";
      }
    }
    if (event.key === "Enter" && rowList[4].value !== "") {
    const userInput = Array.from(rowList).map(inp => inp.value.toUpperCase());
      const children = myDiv.children[row].children;
      result.push([]);
    for(let step=0; step <5; step++){
        if(userInput[step]==answer[step]){
            children[step].style.backgroundColor = "#018913ff";
            result[row].push("🟩");
            }
        else if(answer.includes(userInput[step])){
            children[step].style.backgroundColor = "#898901";
            result[row].push("🟨");            
            }
        else{
            children[step].style.backgroundColor = "#64645e";
            result[row].push("⬜");
        }
        }
        if(row!=5){
        row =  row + 1;
        focusFirstEmpty();
        }
        if(row==5 || result[row - 1].every((val, i) => val === "🟩")){
          popUpAnswer.textContent = answer.join("");
          popUp.style.visibility = "visible";
          console.log(result);
        }
    }
  });
  input.addEventListener("blur", () => {
    setTimeout(focusFirstEmpty, 0);
  });
});
  });

function copyItemsAndLink() {
    const pageLink = window.location.href;
    const items = result.map(row => row.join("")).join("\n")
      const textToCopy = items + "\n" + pageLink;
    navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Kopyalandı:\n" + textToCopy);
  }).catch(err => {
    console.error("Kopyalama başarısız:", err);
  });
}

  