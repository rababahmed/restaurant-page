(()=>{"use strict";const e=document.querySelector("#content"),t=function(){const t=document.createElement("div");t.classList.add("header"),e.appendChild(t);const n=document.createElement("div");n.classList.add("headerText"),n.textContent="AMERICA'S FAVORITE DONUTS & COFFEE",t.appendChild(n);const d=document.createElement("img");d.src="images/header.png",d.style.position="relative",d.style.top="2vh",d.style.height="auto",d.style.width="100%",d.style.backgroundRepeat="repeat -y",t.appendChild(d);const c=document.createElement("div");c.classList.add("contentBlock"),e.appendChild(c);const a=document.createElement("img");a.classList.add("contentImg"),a.src="images/donut.png",c.appendChild(a);const o=document.createElement("div");o.classList.add("contentText"),o.innerHTML="SOMETHING SWEET FOR EVERY OCCASSION",c.appendChild(o)},n=document.querySelector("#content"),d=document.querySelector("#content"),c=document.querySelector("#content");function a(){for(;c.firstChild;)c.removeChild(c.lastChild)}!function(){const e=document.querySelector("#navHome"),c=document.querySelector("#navMenu"),o=document.querySelector("#navContact");document.querySelector("#content"),e.addEventListener("click",(e=>{a(),t()})),c.addEventListener("click",(e=>{a(),function(){const e=document.createElement("div");e.classList.add("header"),n.appendChild(e);const t=document.createElement("div");t.classList.add("headerText"),t.textContent="MENU",e.appendChild(t);const d=document.createElement("div");d.classList.add("menuBlock"),n.appendChild(d);const c=document.createElement("div");c.classList.add("items"),c.textContent="DONUTS......$5",d.appendChild(c);const a=document.createElement("div");a.classList.add("items"),a.textContent="SHAKES......$5",d.appendChild(a);const o=document.createElement("div");o.classList.add("items"),o.textContent="DONUTS......$5",d.appendChild(o);const s=document.createElement("div");s.classList.add("items"),s.textContent="SHAKES......$5",d.appendChild(s);const i=document.createElement("div");i.classList.add("items"),i.textContent="DONUTS......$5",d.appendChild(i);const l=document.createElement("div");l.classList.add("items"),l.textContent="SHAKES......$5",d.appendChild(l)}()})),o.addEventListener("click",(e=>{a(),function(){const e=document.createElement("div");e.classList.add("header"),d.appendChild(e);const t=document.createElement("div");t.classList.add("headerText"),t.textContent="CONTACT",e.appendChild(t);const n=document.createElement("div");n.classList.add("contactBlock"),d.appendChild(n);const c=document.createElement("div");c.classList.add("contact-map"),c.textContent="ADDRESS: Dunkin' Consumer Care, 130 Royall Street, Canton, MA 02021",n.appendChild(c);const a=document.createElement("div");a.classList.add("contact-contact"),a.textContent="Tel: 800-859-5339, Monday - Friday, 8:30 AM - 5:00 PM EST",n.appendChild(a)}()})),t()}()})();