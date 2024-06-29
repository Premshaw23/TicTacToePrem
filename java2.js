let game=document.querySelector(".gameOver")
let msg=document.querySelector(".msg")
let start=document.querySelector(".start")
let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let replay=document.querySelector(".replay")
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turnO=true;
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });
  const gameDraw=()=>{
    msg.innerText=`Game was Draw`;
    game.classList.remove("hide");
    start.style.display="none"
    replay.classList.remove("hide")
    disabledBoxes()
  }
const checkWinner=()=>{
    for(let patterns of winPatterns){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val ===pos2Val && pos2Val ===pos3Val){
             showWinner(pos1Val)
            }
        }

    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;
    game.classList.remove("hide");
    disabledBoxes()
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const resetbtn=()=>{
    turnO=true
     game.classList.add("hide")
     enableBoxes()
}
const enableBoxes=()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
start.addEventListener("click",resetbtn)
reset.addEventListener("click",resetbtn)
replay.addEventListener("click",resetbtn)
