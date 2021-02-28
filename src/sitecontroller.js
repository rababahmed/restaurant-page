import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector("#content");

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

function siteController() {
  const navHome = document.querySelector("#navHome");
  const navMenu = document.querySelector("#navMenu");
  const navContact = document.querySelector("#navContact");
  const content = document.querySelector("#content");

  navHome.addEventListener("click", (e) => {
    clearContent();
    loadHome();
  });
  navMenu.addEventListener("click", (e) => {
    clearContent();
    loadMenu();
  });
  navContact.addEventListener("click", (e) => {
    clearContent();
    loadContact();
  });

  loadContact();
}

export default siteController;
