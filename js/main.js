import { initModal } from "./components/modal.js";
import { video } from "./components/features.js";

function loadPartial(id, url, callback) {
   fetch(url)
      .then((res) => res.text())
      .then((html) => {
         document.getElementById(id).innerHTML = html;
         if (callback) callback();
      });
}

document.addEventListener("DOMContentLoaded", () => {
   // Плавный скролл
   Scrollbar.init(document.querySelector(".smooth-scroll-wrapper"), {
      damping: 0.1,
      delegateTo: document,
   });

   // Загрузка и инициализация header и modal
   loadPartial("header", "/partials/header.html");
   loadPartial("hero", "/partials/hero.html");
   loadPartial("features", "/partials/features.html", video);
   loadPartial("modal", "/partials/modal.html", initModal);
});
