var urlLocation = window.location.href;
var wlButtonNodeList = document.querySelectorAll("#open-button");
var wlButton = [...wlButtonNodeList];
var mainTag = document.querySelector(".bg-cards");

if (urlLocation.includes("aboutus")) {
  var careerButton = document.querySelector("#career_button");
  careerButton.addEventListener("click", () => {
    window.localStorage.setItem("career", "#form-fields");
    window.location.href = "/careers.html";
  });
}

wlButton.forEach((item) => {
  item.addEventListener("click", () => {
    window.localStorage.setItem("waitlist", "#typemachine-title");
    if (mainTag != null) {
      let waitlistPos = document.querySelector(
        window.localStorage.getItem("waitlist")
      );
      let top = 0;
      do {
        top += waitlistPos.offsetTop;
      } while ((waitlistPos = waitlistPos.offsetParent));
      window.scrollTo(0, top);
      window.localStorage.removeItem("waitlist");
    } else {
      window.location.href = "/index.html";
    }
  });
});

if (window.localStorage.getItem("waitlist")) {
  let waitlistPos = document.querySelector(
    window.localStorage.getItem("waitlist")
  );
  let top = 0;
  do {
    top += waitlistPos.offsetTop;
  } while ((waitlistPos = waitlistPos.offsetParent));
  window.scrollTo(0, top);
  window.localStorage.removeItem("waitlist");
}

if (window.localStorage.getItem("career")) {
  let careerPos = document.querySelector(window.localStorage.getItem("career"));
  let top = 0;
  do {
    top += careerPos.offsetTop;
  } while ((careerPos = careerPos.offsetParent));
  window.scrollTo(0, top);
  window.localStorage.removeItem("career");
}
