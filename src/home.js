// selectors
const content = document.querySelector("#content");

// Home elements
function loadHome() {
  // header container
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  content.appendChild(headerDiv);

  // header text
  const headerText = document.createElement("div");
  headerText.classList.add("headerText");
  headerText.textContent = "AMERICA'S FAVORITE DONUTS & COFFEE";
  headerDiv.appendChild(headerText);

  // header image
  const headerImg = document.createElement("img");
  headerImg.src = "/assets/images/header.png";
  headerImg.style.position = "relative";
  headerImg.style.top = "2vh";
  headerImg.style.height = "auto";
  headerImg.style.width = "100%";
  headerImg.style.backgroundRepeat = "repeat -y";
  headerDiv.appendChild(headerImg);

  // content block
  const contentBlock = document.createElement("div");
  contentBlock.classList.add("contentBlock");
  content.appendChild(contentBlock);

  // content image
  const contentImg = document.createElement("img");
  contentImg.classList.add("contentImg");
  contentImg.src = "/assets/images/donut.png";
  contentBlock.appendChild(contentImg);

  // content text
  const contentText = document.createElement("div");
  contentText.classList.add("contentText");
  contentText.innerHTML = "SOMETHING SWEET FOR EVERY OCCASSION";
  contentBlock.appendChild(contentText);
}

export default loadHome;
