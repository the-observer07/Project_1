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

  const selectedRedDiag0 = document.querySelectorAll(`.diagp1.red`);
  const selectedYellowDiag0 = document.querySelectorAll(`.diagp1.yellow`);
  const selectedRedDiag1 = document.querySelectorAll(`.diagp2.red`);
  const selectedYellowDiag1 = document.querySelectorAll(`.diagp2.yellow`);
  const selectedRedDiag2 = document.querySelectorAll(`.diagp3.red`);
  const selectedYellowDiag2 = document.querySelectorAll(`.diagp3.yellow`);
  const selectedRedDiag3 = document.querySelectorAll(`.diagp4.red`);
  const selectedYellowDiag3 = document.querySelectorAll(`.diagp4.yellow`);
  const selectedRedDiag4 = document.querySelectorAll(`.diagp5.red`);
  const selectedYellowDiag4 = document.querySelectorAll(`.diagp5.yellow`);
  const selectedRedDiag5 = document.querySelectorAll(`.diagp6.red`);
  const selectedYellowDiag5 = document.querySelectorAll(`.diagp6.yellow`);

  console.log(selectedYellowDiag0);

  const scoringArrayDiagRed0 = [];
  const scoringArrayDiagYellow0 = [];
  const scoringArrayDiagRed1 = [];
  const scoringArrayDiagYellow1 = [];
  const scoringArrayDiagRed2 = [];
  const scoringArrayDiagYellow2 = [];
  const scoringArrayDiagRed3 = [];
  const scoringArrayDiagYellow3 = [];
  const scoringArrayDiagRed4 = [];
  const scoringArrayDiagYellow4 = [];
  const scoringArrayDiagRed5 = [];
  const scoringArrayDiagYellow5 = [];

  // console.log(scoringArrayDiagYellow0);

  selectedRedDiag0.forEach((chicken) =>
    scoringArrayDiagRed0.push(chicken.innerText)
  );
  selectedYellowDiag0.forEach((chicken) =>
    scoringArrayDiagYellow0.push(chicken.innerText)
  );
  selectedRedDiag1.forEach((chicken) =>
    scoringArrayDiagRed1.push(chicken.innerText)
  );
  selectedYellowDiag1.forEach((chicken) =>
    scoringArrayDiagYellow1.push(chicken.innerText)
  );
  selectedRedDiag2.forEach((chicken) =>
    scoringArrayDiagRed2.push(chicken.innerText)
  );
  selectedYellowDiag2.forEach((chicken) =>
    scoringArrayDiagYellow2.push(chicken.innerText)
  );
  selectedRedDiag3.forEach((chicken) =>
    scoringArrayDiagRed3.push(chicken.innerText)
  );
  selectedYellowDiag3.forEach((chicken) =>
    scoringArrayDiagYellow3.push(chicken.innerText)
  );
  selectedRedDiag4.forEach((chicken) =>
    scoringArrayDiagRed4.push(chicken.innerText)
  );
  selectedYellowDiag4.forEach((chicken) =>
    scoringArrayDiagYellow4.push(chicken.innerText)
  );
  selectedRedDiag5.forEach((chicken) =>
    scoringArrayDiagRed5.push(chicken.innerText)
  );
  selectedYellowDiag5.forEach((chicken) =>
    scoringArrayDiagYellow5.push(chicken.innerText)
  );
  // console.log(scoringArrayDiagYellow);
  // for (let i = 0; i < 6; i++) {
  if (scoringArrayDiagRed0.length >= 4) {
    deltas = scoringArrayDiagRed0.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();
    }
  } else if (scoringArrayDiagRed1.length >= 4) {
    deltas = scoringArrayDiagRed1.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();
    }
  } else if (scoringArrayDiagRed2.length >= 4) {
    deltas = scoringArrayDiagRed2.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();
    }
  } else if (scoringArrayDiagRed3.length >= 4) {
    deltas = scoringArrayDiagRed3.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();
    }
  } else if (scoringArrayDiagRed4.length >= 4) {
    deltas = scoringArrayDiagRed4.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();
    }
  } else if (scoringArrayDiagRed5.length >= 4) {
    deltas = scoringArrayDiagRed5.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 1 won!");
      location.reload();
    }
  }

  //math this shit //if total subtracted math in between = 27, yellow wins

  if (scoringArrayDiagYellow0.length >= 4) {
    deltas = scoringArrayDiagYellow0.map((v, i, a) => v - (a[i - 1] || a[0]));
    // console.log(deltas);

    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    // console.log(sum);

    if (sum == "27") {
      alert("Player 2 won!");
      location.reload();

      //math this shit //if total subtracted math in between = 27, yellow wins
    }
  } else if (scoringArrayDiagYellow1.length >= 4) {
    deltas = scoringArrayDiagYellow1.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 2 won!");
      location.reload();
    }
  } else if (scoringArrayDiagYellow2.length >= 4) {
    deltas = scoringArrayDiagYellow2.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 2 won!");
      location.reload();
    }
  } else if (scoringArrayDiagYellow3.length >= 4) {
    deltas = scoringArrayDiagYellow3.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 2 won!");
      location.reload();
    }
  } else if (scoringArrayDiagYellow4.length >= 4) {
    deltas = scoringArrayDiagYellow4.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 2 won!");
      location.reload();
    }
  } else if (scoringArrayDiagYellow5.length >= 4) {
    deltas = scoringArrayDiagYellow5.map((v, i, a) => v - (a[i - 1] || a[0]));
    const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
    if (sum == "27") {
      alert("Player 2 won!");
      location.reload();
    }
  }
}

// Check Diagonals neg

const selectedRedDiagN0 = document.querySelectorAll(`.diagn1.red`);
const selectedYellowDiagN0 = document.querySelectorAll(`.diagn1.yellow`);
const selectedRedDiagN1 = document.querySelectorAll(`.diagn2.red`);
const selectedYellowDiagN1 = document.querySelectorAll(`.diagn2.yellow`);
const selectedRedDiagN2 = document.querySelectorAll(`.diagn3.red`);
const selectedYellowDiagN2 = document.querySelectorAll(`.diagn3.yellow`);
const selectedRedDiagN3 = document.querySelectorAll(`.diagn4.red`);
const selectedYellowDiagN3 = document.querySelectorAll(`.diagn4.yellow`);
const selectedRedDiagN4 = document.querySelectorAll(`.diagn5.red`);
const selectedYellowDiagN4 = document.querySelectorAll(`.diagn5.yellow`);
const selectedRedDiagN5 = document.querySelectorAll(`.diagn6.red`);
const selectedYellowDiagN5 = document.querySelectorAll(`.diagn6.yellow`);

const scoringArrayDiagNRed0 = [];
const scoringArrayDiagNYellow0 = [];
const scoringArrayDiagNRed1 = [];
const scoringArrayDiagNYellow1 = [];
const scoringArrayDiagNRed2 = [];
const scoringArrayDiagNYellow2 = [];
const scoringArrayDiagNRed3 = [];
const scoringArrayDiagNYellow3 = [];
const scoringArrayDiagNRed4 = [];
const scoringArrayDiagNYellow4 = [];
const scoringArrayDiagNRed5 = [];
const scoringArrayDiagNYellow5 = [];

selectedRedDiagN0.forEach((chicken) =>
  scoringArrayDiagNRed0.push(chicken.innerText)
);
selectedYellowDiagN0.forEach((chicken) =>
  scoringArrayDiagNYellow0.push(chicken.innerText)
);
selectedRedDiagN1.forEach((chicken) =>
  scoringArrayDiagNRed1.push(chicken.innerText)
);
selectedYellowDiagN1.forEach((chicken) =>
  scoringArrayDiagNYellow1.push(chicken.innerText)
);
selectedRedDiagN2.forEach((chicken) =>
  scoringArrayDiagNRed2.push(chicken.innerText)
);
selectedYellowDiagN2.forEach((chicken) =>
  scoringArrayDiagNYellow2.push(chicken.innerText)
);
selectedRedDiagN3.forEach((chicken) =>
  scoringArrayDiagNRed3.push(chicken.innerText)
);
selectedYellowDiagN3.forEach((chicken) =>
  scoringArrayDiagNYellow3.push(chicken.innerText)
);
selectedRedDiagN4.forEach((chicken) =>
  scoringArrayDiagNRed4.push(chicken.innerText)
);
selectedYellowDiagN4.forEach((chicken) =>
  scoringArrayDiagNYellow4.push(chicken.innerText)
);
selectedRedDiagN5.forEach((chicken) =>
  scoringArrayDiagNRed5.push(chicken.innerText)
);
selectedYellowDiagN5.forEach((chicken) =>
  scoringArrayDiagNYellow5.push(chicken.innerText)
);

if (scoringArrayDiagNRed0.length >= 4) {
  deltas = scoringArrayDiagNRed0.map((v, i, a) => v - (a[i - 1] || a[0]));
  console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum == "33") {
    alert("Player 1 won!");
    location.reload();
  }
}
if (scoringArrayDiagNRed1.length >= 4) {
  deltas = scoringArrayDiagNRed1.map((v, i, a) => v - (a[i - 1] || a[0]));
  console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum == "33") {
    alert("Player 1 won!");
    location.reload();
  }
}
if (scoringArrayDiagNRed2.length >= 4) {
  deltas = scoringArrayDiagNRed2.map((v, i, a) => v - (a[i - 1] || a[0]));
  console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum == "33") {
    alert("Player 1 won!");
    location.reload();
  }
}
if (scoringArrayDiagNRed3.length >= 4) {
  deltas = scoringArrayDiagNRed3.map((v, i, a) => v - (a[i - 1] || a[0]));
  console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum == "33") {
    alert("Player 1 won!");
    location.reload();
  }
}
if (scoringArrayDiagNRed4.length >= 4) {
  deltas = scoringArrayDiagNRed4.map((v, i, a) => v - (a[i - 1] || a[0]));
  console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum == "33") {
    alert("Player 1 won!");
    location.reload();
  }
}
if (scoringArrayDiagNRed5.length >= 4) {
  deltas = scoringArrayDiagNRed5.map((v, i, a) => v - (a[i - 1] || a[0]));
  console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum == "33") {
    alert("Player 1 won!");
    location.reload();
  }
}

//   //math this shit //if total subtracted math in between = 33, yellow wins

if (scoringArrayDiagNYellow0.length >= 4) {
  deltas = scoringArrayDiagNYellow0.map((v, i, a) => v - (a[i - 1] || a[0]));
  // console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(sum);
  if (sum == "33") {
    alert("Player 2 won!");
    location.reload();
  }
}
if (scoringArrayDiagNYellow1.length >= 4) {
  deltas = scoringArrayDiagNYellow1.map((v, i, a) => v - (a[i - 1] || a[0]));
  // console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(sum);
  if (sum == "33") {
    alert("Player 2 won!");
    location.reload();
  }
}
if (scoringArrayDiagNYellow2.length >= 4) {
  deltas = scoringArrayDiagNYellow2.map((v, i, a) => v - (a[i - 1] || a[0]));
  // console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(sum);
  if (sum == "33") {
    alert("Player 2 won!");
    location.reload();
  }
}
if (scoringArrayDiagNYellow3.length >= 4) {
  deltas = scoringArrayDiagNYellow3.map((v, i, a) => v - (a[i - 1] || a[0]));
  // console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(sum);
  if (sum == "33") {
    alert("Player 2 won!");
    location.reload();
  }
}
if (scoringArrayDiagNYellow4.length >= 4) {
  deltas = scoringArrayDiagNYellow4.map((v, i, a) => v - (a[i - 1] || a[0]));
  // console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(sum);
  if (sum == "33") {
    alert("Player 2 won!");
    location.reload();
  }
}
if (scoringArrayDiagNYellow5.length >= 4) {
  deltas = scoringArrayDiagNYellow5.map((v, i, a) => v - (a[i - 1] || a[0]));
  // console.log(deltas);
  const sum = deltas.reduce((partialSum, a) => partialSum + a, 0);
  // console.log(sum);
  if (sum == "33") {
    alert("Player 2 won!");
    location.reload();
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
  const selectedEmpty = chicken.currentTarget.innerText; //checks the inner text
  const allCells = document.querySelectorAll(".empty"); // selecting all with class .empty and displaying as an array

  for (let i = allCells.length - 1; i >= 0; i--) {
    // checking the cells from bottom up
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

const slotCell = document.querySelectorAll(".row-0");

// console.log(gameSlot);
slotCell.forEach((slot) => slot.addEventListener("mouseenter", actionIn)); //highlight cell when mousing over

// can display image on mouseenter

slotCell.forEach((slot) => slot.addEventListener("mouseleave", actionOut)); //remove highlighted cell when leaving cell

// hide on mouseleave

slotCell.forEach((chicken) => chicken.addEventListener("click", clicked));
