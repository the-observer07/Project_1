// addEventListener(){
//     const =
// }

const player1 = "p1"; // red
const player2 = "p2"; // yellow

const actionIn = (chicken) => {
  const selectedCell = chicken.currentTarget;

  //

  if (document.querySelector("#currentPlayer").innerText == "Player 1") {
    // console.log("Player 1");
    selectedCell.style.backgroundColor = "red";
  } else {
    selectedCell.style.backgroundColor = "yellow";
  }
};

const changePlayer = (e) => {
  if (document.querySelector("#currentPlayer").innerText == "Player 1") {
    document.querySelector("#currentPlayer").innerText = "Player 2";
  } else {
    document.querySelector("#currentPlayer").innerText = "Player 1";
  }
};

document.querySelector("#submitBtn").addEventListener("click", changePlayer);

const actionOut = (chicken) => {
  const selectedCell = chicken.currentTarget;
  selectedCell.style.backgroundColor = "aquamarine";
};

// const playerChipIn = (chicken) => {
//     .addClass('addColor')
// };

// const colorChange = (chicken) => {
//     const colorSwitch = chicken.
// }

const slotCell = document.querySelectorAll(".row-0");
// console.log(gameSlot);
slotCell.forEach((slot) => slot.addEventListener("mouseenter", actionIn));
slotCell.forEach((slot) => slot.addEventListener("mouseleave", actionOut));
// slotCell.addEventListener("click", playerChipIn);
// slotCell.on("mouseenter", "", colorChange);
// slotCell.on("mouseleave");
//find empty cell -- check if cell class = empty
//hover - background color change
//submit button to change player?
//on click to change player?

//addClass - filled
//removeClass - empty // hover unapplied

// if innerText = player1 use button to change to player2
// toggle class for p1 and player2
