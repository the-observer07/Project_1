function checkForWinner(chicken) {
  // document.querySelector(".row-")
  for (r = 6; r >= 1; r--) {
    const selectedFilled = document.querySelectorAll(`.row-${r}.filled`);
    const selectedRed = document.querySelectorAll(`.row-${r}.red`);
    const selectedYellow = document.querySelectorAll(`.row-${r}.yellow`);
    const scoringArray = [];
    const scoringArrayRed = [];
    const scoringArrayYellow = [];
    // selectedFilled.forEach((chicken) => scoringArray.push(chicken.innerText));
    // console.log(scoringArray);
    selectedRed.forEach((chicken) => scoringArrayRed.push(chicken.innerText));
    // console.log(scoringArrayRed);
    selectedYellow.forEach((chicken) =>
      scoringArrayYellow.push(chicken.innerText)
    );
    // console.log(scoringArrayYellow);

    // check horizontal

    if (scoringArrayRed.length >= 4) {
      deltas = scoringArrayRed.map((v, i, a) => v - (a[i - 1] || a[0]));

      // console.log(deltas);

      const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
      // console.log(sum);

      if (sum == "3") {
        alert("Player 1 won!");
        location.reload();
      }
      // math this shit //if total subtracted numbers in between = 3, red wins
      // const subtract = (accumulator, number) => accumulator + number;
      // console.log(scoringArray.reduce(subtract) == "3");

      // if equal or greater than 4, i'll need to check the class if red or yellow
    }

    if (scoringArrayYellow.length >= 4) {
      deltas = scoringArrayYellow.map((v, i, a) => v - (a[i - 1] || a[0]));

      // console.log(deltas);

      const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
      // console.log(sum);

      if (sum == "3") {
        alert("Player 2 won!");
        location.reload();
        //math this shit //if total subtracted math in between = 4, yellow wins
      }
    }
  }

  // check vertical

  for (c = 7; c >= 1; c--) {
    const selectedRedVertical = document.querySelectorAll(`.col-${c}.red`);
    const selectedYellowVertical = document.querySelectorAll(
      `.col-${c}.yellow`
    );
    const scoringArrayRedVertical = [];
    const scoringArrayYellowVertical = [];
    // console.log(selectedRedVertical);
    selectedRedVertical.forEach((chicken) =>
      scoringArrayRedVertical.push(chicken.innerText)
    );
    selectedYellowVertical.forEach((chicken) =>
      scoringArrayYellowVertical.push(chicken.innerText)
    );
    // console.log(scoringArrayRedVertical);

    if (scoringArrayRedVertical.length >= 4) {
      deltas = scoringArrayRedVertical.map((v, i, a) => v - (a[i - 1] || a[0]));

      // console.log(deltas);

      const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
      // console.log(sum);

      if (sum == "30") {
        alert("Player 1 won!");
        location.reload();
      }
    }
    // math this shit //if total subtracted numbers in between = 3, red wins
    // const subtract = (accumulator, number) => accumulator + number;
    // console.log(scoringArray.reduce(subtract) == "3");

    // if equal or greater than 4, i'll need to check the class if red or yellow

    if (scoringArrayYellowVertical.length >= 4) {
      deltas = scoringArrayYellowVertical.map(
        (v, i, a) => v - (a[i - 1] || a[0])
      );

      // console.log(deltas);

      const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
      // console.log(sum);

      if (sum == "30") {
        alert("Player 2 won!");
        location.reload();
      }
      // math this shit //if total subtracted numbers in between = 3, red wins
      // const subtract = (accumulator, number) => accumulator + number;
      // console.log(scoringArray.reduce(subtract) == "3");

      // if equal or greater than 4, i'll need to check the class if red or yellow
    }
    // console.log(selectedRedVertical);
    // if total sum of subtracted values = 30, either side wins
  }

  // Check Diagonals positive

  const selectedRedDiag = document.querySelectorAll(`.diagp.red`);
  const selectedYellowDiag = document.querySelectorAll(`.diagp.yellow`);
  // console.log(selectedRedDiag);
  const scoringArrayDiagRed = [];
  const scoringArrayDiagYellow = [];
  selectedRedDiag.forEach((chicken) =>
    scoringArrayDiagRed.push(chicken.innerText)
  );
  selectedYellowDiag.forEach((chicken) =>
    scoringArrayDiagYellow.push(chicken.innerText)
  );
  // console.log(scoringArrayDiagYellow);

  if (scoringArrayDiagRed.length >= 4) {
    deltas = scoringArrayDiagRed.map((v, i, a) => v - (a[i - 1] || a[0]));

    // console.log(deltas);

    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    // console.log(sum);

    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();

      //math this shit //if total subtracted math in between = 4, yellow wins
    }

    if (scoringArrayDiagYellow.length >= 4) {
      deltas = scoringArrayDiagYellow.map((v, i, a) => v - (a[i - 1] || a[0]));

      // console.log(deltas);

      const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
      // console.log(sum);

      if (sum == "27") {
        alert("Player 2 won!");
        location.reload();

        //math this shit //if total subtracted math in between = 4, yellow wins
      }
    }
  }

  // Check Diagonals neg

  // function check

  const selectedRedDiagN = document.querySelectorAll(`.diagn.red`);
  const selectedYellowDiagN = document.querySelectorAll(`.diagn.yellow`);
  // console.log(selectedRedDiagN);
  const scoringArrayDiagNRed = [];
  const scoringArrayDiagNYellow = [];
  selectedRedDiagN.forEach((chicken) =>
    scoringArrayDiagNRed.push(chicken.innerText)
  );
  selectedYellowDiagN.forEach((chicken) =>
    scoringArrayDiagNYellow.push(chicken.innerText)
  );
  console.log(scoringArrayDiagNRed);

  if (scoringArrayDiagNRed.length >= 4) {
    deltas = scoringArrayDiagNRed.map((v, i, a) => v - (a[i - 1] || a[0]));

    console.log(deltas);

    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);

    if (sum == "33") {
      alert("Player 1 won!");
      location.reload();

      // startConfetti();

      //   //math this shit //if total subtracted math in between = 4, yellow wins
    }
  }
  if (scoringArrayDiagNYellow.length >= 4) {
    deltas = scoringArrayDiagNYellow.map((v, i, a) => v - (a[i - 1] || a[0]));

    // console.log(deltas);

    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    // console.log(sum);

    if (sum == "33") {
      alert("Player 2 won!");
      location.reload();

      // startConfetti();

      //     //math this shit //if total subtracted math in between = 4, yellow wins
    }
  }
}

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
      allCells[i].style.backgroundColor = "#F56D6D";
      // allCells[i].style.opacity = "0.8";

      return allCells[i]; //
    } else if (
      allCells[i].innerText[1] == selectedEmpty &&
      document.querySelector("#currentPlayer").innerText == "Player 2"
    ) {
      allCells[i].style.backgroundColor = "#FFFE90";
      // allCells[i].style.opacity = "0.8";

      return allCells[i];
    }
  }
};

const actionOut = () => {
  const leftEmpty = document.querySelectorAll(".empty");
  for (let i = 0; i < leftEmpty.length; i++) {
    leftEmpty[i].style.backgroundColor = "aquamarine";
    leftEmpty[i].style.opacity = "1";
  }
};

const clicked = (chicken) => {
  // const chicken = e.target;
  const selectedEmpty = chicken.currentTarget.innerText; //checks the inner text
  // console.log(selectedEmpty); // console.log the inner text
  const allCells = document.querySelectorAll(".empty"); // selecting all with class .empty and displaying as an array
  // console.log(allCells); // displaying const allCells

  // const mouseTrigger = MouseEvent("click");
  // console.log(mouseTrigger);

  for (let i = allCells.length - 1; i >= 0; i--) {
    // checking the cells from bottom up
    // console.log(i);
    if (
      allCells[i].innerText[1] == selectedEmpty && // checking the cells from bottom up to see if they match selectedEmpty
      document.querySelector("#currentPlayer").innerText == "Player 1" // additional requirement to check which player it is and assign color related to player
    ) {
      allCells[i].classList.add("filled");
      allCells[i].classList.add("red");
      allCells[i].classList.remove("empty");
      allCells[i].style.backgroundColor = "red";
      allCells[i].style.opacity = "1";
      checkForWinner();
      // alert("It's Player 2's turn!");
      if (document.querySelector("#currentPlayer").innerText == "Player 1") {
        document.querySelector("#currentPlayer").innerText = "Player 2";
      } else {
        document.querySelector("#currentPlayer").innerText = "Player 1";
      }

      // const applyColor = (allCells[i].style.backgroundColor = "red");
      // setTimeout(applyColor, 2000);
      return allCells[i]; //
    } else if (
      allCells[i].innerText[1] == selectedEmpty &&
      document.querySelector("#currentPlayer").innerText == "Player 2"
    ) {
      allCells[i].style.backgroundColor = "yellow";
      allCells[i].style.opacity = "1";
      allCells[i].classList.add("filled");
      allCells[i].classList.add("yellow");
      allCells[i].classList.remove("empty");
      checkForWinner();
      // alert("It's Player 1's turn!");
      if (document.querySelector("#currentPlayer").innerText == "Player 1") {
        document.querySelector("#currentPlayer").innerText = "Player 2";
      } else {
        document.querySelector("#currentPlayer").innerText = "Player 1";
      }
      // console.log(allCells[i]);
      return allCells[i];
    }
  }
};
// const changePlayer = (e) => {
//   if (document.querySelector("#currentPlayer").innerText == "Player 1") {
//     document.querySelector("#currentPlayer").innerText = "Player 2";
//   } else {
//     document.querySelector("#currentPlayer").innerText = "Player 1";
//   }
//   return changePlayer;
// };

// document.querySelector("#submitBtn").addEventListener("click", changePlayer);

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

////////////// ------------ Check Table

/// meant to get a true or false... yup got true/false
// function checkYellow() {
//   const colorChecker = document.querySelectorAll(".yellow");
//   colorChecker.forEach((chicken) => console.log(chicken.innerText));
//   // console.log(colorChecker);
//   // document.query;
// }

// function checkLines(a, b, c, d) {
//   const colorChecker = document.querySelectorAll(".filled");
//   // console.log(colorChecker);
//   // console.log(a != colorChecker && a == b && a == c && a == d);
//   colorChecker.forEach((chicken) => chicken.style.backgroundColor);
//   return a != colorChecker && a == b && a == c && a == d;
// }

// function checkForWinner(chicken) {
//   const row = document.querySelectorAll(`.row-${r}.style.backgroundColor`);
//   const col = document.querySelecctorAll(`.col-${c}.style.backgroundColor`);
//   for (let r = 0; r < 4; r++)
//     for (let c = 0; c < 8; c++)
//       if (
//         checkLines(
//           chicken[r][c],
//           chicken[r + 1][c],
//           chicken[r + 2][c],
//           chicken[r + 3][c]
//         )
//       )
//         // console.log(checkLines);
//         return chicken[r][c];
// }

// function checkForWinner(chicken) {
//   // document.querySelector(".row-")
//   for (r = 6; r >= 1; r--) {
//     const selectedFilled = document.querySelectorAll(`.row-${r}.filled`);
//     const selectedRed = document.querySelectorAll(`.row-${r}.red`);
//     const selectedYellow = document.querySelectorAll(`.row-${r}.yellow`);
//     const scoringArray = [];
//     const scoringArrayRed = [];
//     const scoringArrayYellow = [];
//     // selectedFilled.forEach((chicken) => scoringArray.push(chicken.innerText));
//     // console.log(scoringArray);
//     selectedRed.forEach((chicken) => scoringArrayRed.push(chicken.innerText));
//     // console.log(scoringArrayRed);
//     selectedYellow.forEach((chicken) =>
//       scoringArrayYellow.push(chicken.innerText)
//     );
//     // console.log(scoringArrayYellow);

//     // check horizontal

//     if (scoringArrayRed.length >= 4) {
//       deltas = scoringArrayRed.map((v, i, a) => v - (a[i - 1] || a[0]));

//       // console.log(deltas);

//       const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//       // console.log(sum);

//       if (sum == "3") {
//         alert("Player 1 won!");
//       }
//       // math this shit //if total subtracted numbers in between = 3, red wins
//       // const subtract = (accumulator, number) => accumulator + number;
//       // console.log(scoringArray.reduce(subtract) == "3");

//       // if equal or greater than 4, i'll need to check the class if red or yellow
//     }

//     if (scoringArrayYellow.length >= 4) {
//       deltas = scoringArrayYellow.map((v, i, a) => v - (a[i - 1] || a[0]));

//       // console.log(deltas);

//       const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//       // console.log(sum);

//       if (sum == "3") {
//         alert("Player 2 won!");
//         //math this shit //if total subtracted math in between = 4, yellow wins
//       }
//     }
//   }

//   // check vertical

//   for (c = 7; c >= 1; c--) {
//     const selectedRedVertical = document.querySelectorAll(`.col-${c}.red`);
//     const selectedYellowVertical = document.querySelectorAll(
//       `.col-${c}.yellow`
//     );
//     const scoringArrayRedVertical = [];
//     const scoringArrayYellowVertical = [];
//     // console.log(selectedRedVertical);
//     selectedRedVertical.forEach((chicken) =>
//       scoringArrayRedVertical.push(chicken.innerText)
//     );
//     selectedYellowVertical.forEach((chicken) =>
//       scoringArrayYellowVertical.push(chicken.innerText)
//     );
//     // console.log(scoringArrayRedVertical);

//     if (scoringArrayRedVertical.length >= 4) {
//       deltas = scoringArrayRedVertical.map((v, i, a) => v - (a[i - 1] || a[0]));

//       // console.log(deltas);

//       const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//       // console.log(sum);

//       if (sum == "30") {
//         alert("Player 1 won!");
//       }
//     }
//     // math this shit //if total subtracted numbers in between = 3, red wins
//     // const subtract = (accumulator, number) => accumulator + number;
//     // console.log(scoringArray.reduce(subtract) == "3");

//     // if equal or greater than 4, i'll need to check the class if red or yellow

//     if (scoringArrayYellowVertical.length >= 4) {
//       deltas = scoringArrayYellowVertical.map(
//         (v, i, a) => v - (a[i - 1] || a[0])
//       );

//       // console.log(deltas);

//       const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//       // console.log(sum);

//       if (sum == "30") {
//         alert("Player 2 won!");
//       }
//       // math this shit //if total subtracted numbers in between = 3, red wins
//       // const subtract = (accumulator, number) => accumulator + number;
//       // console.log(scoringArray.reduce(subtract) == "3");

//       // if equal or greater than 4, i'll need to check the class if red or yellow
//     }
//     // console.log(selectedRedVertical);
//     // if total sum of subtracted values = 30, either side wins
//   }

//   // Check Diagonals positive

//   const selectedRedDiag = document.querySelectorAll(`.diagp.red`);
//   const selectedYellowDiag = document.querySelectorAll(`.diagp.yellow`);
//   // console.log(selectedRedDiag);
//   const scoringArrayDiagRed = [];
//   const scoringArrayDiagYellow = [];
//   selectedRedDiag.forEach((chicken) =>
//     scoringArrayDiagRed.push(chicken.innerText)
//   );
//   selectedYellowDiag.forEach((chicken) =>
//     scoringArrayDiagYellow.push(chicken.innerText)
//   );
//   // console.log(scoringArrayDiagYellow);

//   if (scoringArrayDiagRed.length >= 4) {
//     deltas = scoringArrayDiagRed.map((v, i, a) => v - (a[i - 1] || a[0]));

//     // console.log(deltas);

//     const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//     // console.log(sum);

//     if (sum == "27") {
//       alert("Player 1 won!");
//       //math this shit //if total subtracted math in between = 4, yellow wins
//     }

//     if (scoringArrayDiagYellow.length >= 4) {
//       deltas = scoringArrayDiagYellow.map((v, i, a) => v - (a[i - 1] || a[0]));

//       // console.log(deltas);

//       const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//       // console.log(sum);

//       if (sum == "27") {
//         alert("Player 2 won!");
//         //math this shit //if total subtracted math in between = 4, yellow wins
//       }
//     }
//   }

//   // Check Diagonals neg

//   // function check

//   const selectedRedDiagN = document.querySelectorAll(`.diagn.red`);
//   const selectedYellowDiagN = document.querySelectorAll(`.diagn.yellow`);
//   // console.log(selectedRedDiagN);
//   const scoringArrayDiagNRed = [];
//   const scoringArrayDiagNYellow = [];
//   selectedRedDiagN.forEach((chicken) =>
//     scoringArrayDiagNRed.push(chicken.innerText)
//   );
//   selectedYellowDiagN.forEach((chicken) =>
//     scoringArrayDiagNYellow.push(chicken.innerText)
//   );
//   console.log(scoringArrayDiagNRed);

//   if (scoringArrayDiagNRed.length >= 4) {
//     deltas = scoringArrayDiagNRed.map((v, i, a) => v - (a[i - 1] || a[0]));

//     console.log(deltas);

//     const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//     console.log(sum);

//     if (sum == "33") {
//       alert("Player 1 won!");
//       //   //math this shit //if total subtracted math in between = 4, yellow wins
//     }
//   }
//   if (scoringArrayDiagNYellow.length >= 4) {
//     deltas = scoringArrayDiagNYellow.map((v, i, a) => v - (a[i - 1] || a[0]));

//     // console.log(deltas);

//     const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
//     // console.log(sum);

//     if ((sum = "33")) {
//       alert("Player 2 won!");
//       //     //math this shit //if total subtracted math in between = 4, yellow wins
//     }
//   }
// }
//     // if total sum of subtracted values = 11 || -11 , either side wins
// const checkTable = (e) => {
//   document.querySelector(".filled");
// };

///////////// ---------- player change

///////////// ---------- check for winner
// document.querySelector("#submitBtn").addEventListener("click", checkForWinner);

// const actionOut = (chicken) => {
//   const selectedCell = chicken.currentTarget;
//   selectedCell.style.backgroundColor = "aquamarine";
// };

// upon click, i need to change bkgd-clr to player color and remove class empty/ add class filled ---------- this is where i left off

/// Line 94 - clicking checks if it's player 1 or 2s turn, inputs the color into the lowest empty cell.

const slotCell = document.querySelectorAll(".row-0");

// console.log(gameSlot);
slotCell.forEach((slot) => slot.addEventListener("mouseenter", actionIn)); //highlight cell when mousing over

// can display image on mouseenter

slotCell.forEach((slot) => slot.addEventListener("mouseleave", actionOut)); //remove highlighted cell when leaving cell

// hide on mouseleave

slotCell.forEach((chicken) => chicken.addEventListener("click", clicked));

// const clickCount = 0

// function countClicks(){
//   let clickLimit = 1;
//   if (clickCount >= clickLimit) {
//     alert
//   }
// }
// document.querySelector("#board-ext").addEventListener("click", clicked);
//// ------------- for each causing repetition issue...

// .removeEventListener("click", clicked)
// );
// {
//   chicken.disabled = true
// };
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
