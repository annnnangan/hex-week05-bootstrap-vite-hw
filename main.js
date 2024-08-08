import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

//Aside
const pageTitle = document.title.toLowerCase();
const navLinks = document.querySelectorAll("aside .nav-item .nav-link");

navLinks.forEach((item) => {
  if (item.classList.contains(pageTitle)) {
    item.classList.add("active");
    item.classList.add("text-success");
    item.classList.add("border-success");
    item.classList.remove("text-dark");
  } else {
    item.classList.remove("active");
    item.classList.remove("text-success");
    item.classList.remove("border-success");
  }
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("text-success");
      item.classList.remove("border-success");
    });

    item.classList.add("active");
    item.classList.add("text-success");
    item.classList.add("border-success");
    item.classList.remove("text-dark");
  });
});

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
