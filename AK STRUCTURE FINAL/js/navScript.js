const hamburger = document.querySelector(".hamburger");
let flag = false;
const navSection = document.querySelector(".nav-section");

const hamclick = (f) => {
  if (f) { 
      navSection.style.display = "flex";
      flag = true;
      hamburger.classList.remove("fa-bars");
      hamburger.classList.add("fa-times");
  } else {
      navSection.style.display = "none";
      flag = false;
      hamburger.classList.remove("fa-times");
      hamburger.classList.add("fa-bars");
  }
};

hamburger.addEventListener("click",() => hamclick(!flag));
