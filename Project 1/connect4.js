// addEventListener(){
//     const =
// }

// const player1 = "p1"; // red
// const player2 = "p2"; // yellow

const actionIn = (chicken) => {
  const selectedEmpty = chicken.currentTarget.innerText; //checks the inner text
  // console.log(selectedEmpty); // console.log the inner text
  const allCells = document.querySelectorAll(".empty"); // selecting all with class .empty and displaying as an array
  // console.log(allCells); // displaying const allCells
  for (let i = allCells.length - 1; i > 0; i--) {
    // checking the cells from bottom up
    // console.log(i);
    if (
      allCells[i].innerText[1] == selectedEmpty && // checking the cells from bottom up to see if they match selectedEmpty
      document.querySelector("#currentPlayer").innerText == "Player 1" // additional requirement to check which player it is and assign color related to player
    ) {
      allCells[i].style.backgroundColor = "red";

      return allCells[i]; //
    } else if (
      allCells[i].innerText[1] == selectedEmpty &&
      document.querySelector("#currentPlayer").innerText == "Player 2"
    ) {
      allCells[i].style.backgroundColor = "yellow";
      return allCells[i];
    }
  }
};

const actionOut = () => {
  const leftEmpty = document.querySelectorAll(".empty");
  for (let i = 0; i < leftEmpty.length; i++) {
    leftEmpty[i].style.backgroundColor = "aquamarine";
  }
};

// const clicked = (e) => {
//   const fillCell = e.target.classList;
//   fillCell.addClass("filled");
// const allCells = document.querySelectorAll(".empty");
// console.log(allCells);
// document.querySelector(".empty").addClass("filled");
// console.log(allCells);
// };

// if (document.querySelector("#currentPlayer").innerText == "Player 1") {
//   // console.log("Player 1");
//   selectedCell.style.backgroundColor = "red";
// } else {
//   selectedCell.style.backgroundColor = "yellow";
// }

/////////////// ----------- Switching Player

const changePlayer = (e) => {
  if (document.querySelector("#currentPlayer").innerText == "Player 1") {
    document.querySelector("#currentPlayer").innerText = "Player 2";
  } else {
    document.querySelector("#currentPlayer").innerText = "Player 1";
  }
};

////////////// ------------ Check Table

const checkTable = (e) => {
  document.querySelector(".filled");
};

document.querySelector("#submitBtn").addEventListener("click", changePlayer);
document.querySelector("#submitBtn").addEventListener("click", checkTable);

// const actionOut = (chicken) => {
//   const selectedCell = chicken.currentTarget;
//   selectedCell.style.backgroundColor = "aquamarine";
// };

// upon click, i need to change bkgd-clr to player color and remove class empty/ add class filled ---------- this is where i left off

const clicked = (chicken) => {
  const selectedEmpty = chicken.currentTarget.innerText; //checks the inner text
  // console.log(selectedEmpty); // console.log the inner text
  const allCells = document.querySelectorAll(".empty"); // selecting all with class .empty and displaying as an array
  // console.log(allCells); // displaying const allCells
  for (let i = allCells.length - 1; i > 0; i--) {
    // checking the cells from bottom up
    // console.log(i);
    if (
      allCells[i].innerText[1] == selectedEmpty && // checking the cells from bottom up to see if they match selectedEmpty
      document.querySelector("#currentPlayer").innerText == "Player 1" // additional requirement to check which player it is and assign color related to player
    ) {
      allCells[i].style.backgroundColor = "red";
      allCells[i].classList.add("filled");
      allCells[i].classList.remove("empty");
      return allCells[i]; //
    } else if (
      allCells[i].innerText[1] == selectedEmpty &&
      document.querySelector("#currentPlayer").innerText == "Player 2"
    ) {
      allCells[i].style.backgroundColor = "yellow";
      allCells[i].classList.add("filled");
      allCells[i].classList.remove("empty");
      // console.log(allCells[i]);
      return allCells[i];
    }
  }
};

const slotCell = document.querySelectorAll(".row-0");
// console.log(gameSlot);
slotCell.forEach((slot) => slot.addEventListener("mouseenter", actionIn)); //highlight cell when mousing over
slotCell.forEach((slot) => slot.addEventListener("mouseleave", actionOut)); //remove highlighted cell when leaving cell
slotCell.forEach((chicken) => chicken.addEventListener("click", clicked));
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
