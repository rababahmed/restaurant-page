const content = document.querySelector("#content");

function loadMenu() {
  // header container
  const menuHeader = document.createElement("div");
  menuHeader.classList.add("header");
  content.appendChild(menuHeader);

  // header text
  const menuTitle = document.createElement("div");
  menuTitle.classList.add("headerText");
  menuTitle.textContent = "MENU";
  menuHeader.appendChild(menuTitle);

  // menu block
  const menuBlock = document.createElement("div");
  menuBlock.classList.add("menuBlock");
  content.appendChild(menuBlock);

  // menu items
  const item1 = document.createElement("div");
  item1.classList.add("items");
  item1.textContent = "DONUTS......$5";
  menuBlock.appendChild(item1);

  const item2 = document.createElement("div");
  item2.classList.add("items");
  item2.textContent = "SHAKES......$5";
  menuBlock.appendChild(item2);

  const item3 = document.createElement("div");
  item3.classList.add("items");
  item3.textContent = "DONUTS......$5";
  menuBlock.appendChild(item3);

  const item4 = document.createElement("div");
  item4.classList.add("items");
  item4.textContent = "SHAKES......$5";
  menuBlock.appendChild(item4);

  const item5 = document.createElement("div");
  item5.classList.add("items");
  item5.textContent = "DONUTS......$5";
  menuBlock.appendChild(item5);

  const item6 = document.createElement("div");
  item6.classList.add("items");
  item6.textContent = "SHAKES......$5";
  menuBlock.appendChild(item6);
}

export default loadMenu;
