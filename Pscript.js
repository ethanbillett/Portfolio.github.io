"use strict";
document.body.classList.add("js");
const menu = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
menu.hidden = false;
function closeMenu() { navigation.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
menu.addEventListener("click", () => { const open = navigation.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape" && navigation.classList.contains("open")) { closeMenu(); menu.focus(); } });
window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);
document.getElementById("year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
 const links = Array.from(navigation.querySelectorAll("a"));
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { links.forEach(link => { const active = link.hash === "#" + entry.target.id; link.classList.toggle("active", active); if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current"); }); } });
 }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
 document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
}
// Keep native form validation and the original FormSubmit POST action.
// A successful delivery must be confirmed by FormSubmit, never a local alert.
