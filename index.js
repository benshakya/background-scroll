const backgroundEl = document.querySelector(".background");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  let scorllValue = window.scrollY;
  backgroundEl.style.opacity = 1 - scorllValue / 900;
  backgroundEl.style.backgroundSize = 150 - scorllValue / 75 + "%";
}
