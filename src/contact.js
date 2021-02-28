const content = document.querySelector("#content");

function loadContact() {
  // contact header
  const contactHeader = document.createElement("div");
  contactHeader.classList.add("header");
  content.appendChild(contactHeader);

  // contact title
  const contactTitle = document.createElement("div");
  contactTitle.classList.add("headerText");
  contactTitle.textContent = "CONTACT";
  contactHeader.appendChild(contactTitle);

  // contact block
  const contactBlock = document.createElement("div");
  contactBlock.classList.add("contactBlock");
  content.appendChild(contactBlock);

  // contact items
  const contact1 = document.createElement("div");
  contact1.classList.add("contact-map");
  contact1.textContent =
    "ADDRESS: Dunkin' Consumer Care, 130 Royall Street, Canton, MA 02021";
  contactBlock.appendChild(contact1);

  const contact2 = document.createElement("div");
  contact2.classList.add("contact-contact");
  contact2.textContent =
    "Tel: 800-859-5339, Monday - Friday, 8:30 AM - 5:00 PM EST";
  contactBlock.appendChild(contact2);
}

export default loadContact;
