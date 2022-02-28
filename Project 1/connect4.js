// addEventListener(){
//     const =
// }

const player1 = "p1"; // red
const player2 = "p2"; // yellow

const action = (chicken) => {
  const selectedCell = chicken.target.classList;
  console.log(selectedCell);
};

// const playerChipIn = (chicken) => {
//     const
.addClass('addColor')
// };

// const colorChange = (chicken) => {
//     const colorSwitch = chicken.
// }

const slotCell = document.getElementById("board-int");
// console.log(gameSlot);
slotCell.addEventListener("mouseover", action);
slotCell.addEventListener("click", playerChipIn);
// slotCell.on("mouseenter", ".row-0", colorChange);
// slotCell.on("mouseleave");
//find empty cell -- check if cell class = empty
//hover - background color change
