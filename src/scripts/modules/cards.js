var titleArray = ["No paperwork.", "No hassle.", "No queues."];
var textPost = 0;
var textInterval = 0;

let cardsSelection = document.querySelectorAll(".Cards__img");
let cardsSelectionArray = Array.from(cardsSelection);
let cardShowing = document.querySelector("#cardShowing");
let prevCardIcon = document.querySelector("#prev-icon");
let nextCardIcon = document.querySelector("#next-icon");
let typemachineTitle = document.querySelector("#typemachine-title");

if (cardShowing) {
  cardShowing.setAttribute("src", cardsSelectionArray[0].getAttribute("src"));

  nextCardIcon.addEventListener("click", () => {
    let indexVar;
    cardsSelectionArray.forEach((card, index) => {
      if (card.getAttribute("src") == cardShowing.getAttribute("src")) {
        indexVar = index;
      }
    });
    if (indexVar < cardsSelectionArray.length - 1) {
      cardShowing.style.opacity = "0";
      setTimeout(() => {
        cardShowing.style.opacity = "1";
        cardShowing.setAttribute(
          "src",
          cardsSelectionArray[indexVar + 1].getAttribute("src")
        );
      }, 450);
    }
  });

  nextCardIcon.addEventListener("click", () => {
    let indexVar;
    cardsSelectionArray.forEach((card, index) => {
      if (card.getAttribute("src") == cardShowing.getAttribute("src")) {
        indexVar = index;
      }
    });
    if (indexVar == cardsSelectionArray.length - 1) {
      cardShowing.style.opacity = "0";
      setTimeout(() => {
        cardShowing.style.opacity = "1";
        cardShowing.setAttribute(
          "src",
          cardsSelectionArray[0].getAttribute("src")
        );
      }, 450);
    }
  });

  prevCardIcon.addEventListener("click", () => {
    let indexVar;
    cardsSelectionArray.forEach((card, index) => {
      if (card.getAttribute("src") == cardShowing.getAttribute("src")) {
        indexVar = index;
      }
    });
    if (indexVar > 0) {
      cardShowing.style.opacity = "0";
      setTimeout(() => {
        cardShowing.style.opacity = "1";
        cardShowing.setAttribute(
          "src",
          cardsSelectionArray[indexVar - 1].getAttribute("src")
        );
      }, 300);
    }
  });

  prevCardIcon.addEventListener("click", () => {
    let indexVar;
    cardsSelectionArray.forEach((card, index) => {
      if (card.getAttribute("src") == cardShowing.getAttribute("src")) {
        indexVar = index;
      }
    });
    if (indexVar == 0) {
      cardShowing.style.opacity = "0";
      setTimeout(() => {
        cardShowing.style.opacity = "1";
        cardShowing.setAttribute(
          "src",
          cardsSelectionArray[3].getAttribute("src")
        );
      }, 300);
    }
  });

  cardsSelectionArray.forEach((card) => {
    card.addEventListener("click", (e) => {
      cardShowing.style.opacity = "0";
      let srcCardClick = e.target.getAttribute("src");
      setTimeout(() => {
        cardShowing.setAttribute("src", srcCardClick);
        cardShowing.style.opacity = "1";
      }, 300);
    });
  });

  const typewriter = (index) => {
    typemachineTitle.innerHTML = "";
    typemachineTitle.innerHTML =
      titleArray[index].substring(0, textPost) + "<span>\u25ae</span>";
    if (textPost++ != titleArray[index].length) {
      setTimeout(() => {
        typewriter(index);
        if (textPost > titleArray[index].length) {
          typewriterLoop();
        }
      }, 120);
    }
  };

  const typewriterLoop = () => {
    if (textInterval < titleArray.length - 1) {
      textPost = 0;
      textInterval++;
      setTimeout(() => {
        typewriter(textInterval);
      }, 1700);
    } else {
      textPost = 0;
      textInterval = 0;
      setTimeout(() => {
        typewriter(textInterval);
      }, 1700);
    }
  };

  window.addEventListener("load", typewriter(0));
}

var urlLocation = window.location.href;
var pagenameNode = document.querySelectorAll(".pagename");
var pagenameList = [...pagenameNode];
// console.log(urlLocation);
pagenameList.forEach((item) => {
  // console.log(item.textContent.replace(" ", "").toLowerCase());
  if (
    urlLocation
      .toLowerCase()
      .includes(item.textContent.replace(" ", "").toLowerCase())
  ) {
    item.classList.add("selected");
  }
});
