const mainTab = document.querySelector(".tab-main");
const overlayTab = document.querySelector(".scroll-container");

const mainTabButton = document.querySelectorAll(
  ".tab-main .tab-container button"
);
const closeOverlayButton = document.querySelector(".close-tab");

mainTabButton.forEach((el) => el.addEventListener("click", openTab));
closeOverlayButton.addEventListener("click", closeTab);

function openTab() {
  mainTab.classList.add("hidden");
  overlayTab.classList.remove("hidden");
}

function closeTab() {
  mainTab.classList.remove("hidden");
  overlayTab.classList.add("hidden");
}