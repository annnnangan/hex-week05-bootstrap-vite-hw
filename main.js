import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

const adminViewStatusCollapse = document.querySelector("#collapseAdminStatus");
const collapseIcon = document.querySelector(
  ".collapseAdminStatus-btn .material-symbols-outlined"
);

adminViewStatusCollapse.addEventListener("show.bs.collapse", (event) => {
  collapseIcon.innerText = "keyboard_arrow_up";
});

adminViewStatusCollapse.addEventListener("hide.bs.collapse", (event) => {
  collapseIcon.innerText = "keyboard_arrow_down";
});
