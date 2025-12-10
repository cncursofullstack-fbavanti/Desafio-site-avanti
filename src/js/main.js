// src/js/main.js
import { createStickyHeader } from "./components/stickyHeader.js";
import { createFullscreenHeader } from "./components/fullscreenHeader.js";
import { createCallout01 } from "./components/callout01.js";
import { createCallout02 } from "./components/callout02.js";
import { createCallout03 } from "./components/callout03.js";
import { createTestimonial } from "./components/testimonial.js";
import { createMarketing } from "./components/marketing.js";
import { createFooter } from "./components/footer.js";

let initialized = false;

function observeScrollForHeader() {
  const header = document.querySelector('#stickyHeader');
  console.log(header)

  function handleScroll() {
    if (window.scrollY > 80) {
      header.classList.add('BG');
    } else {
      header.classList.remove('BG');
    }
  }

  // Adiciona o listener de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Checa a posição inicial (caso a página já esteja rolada)
  handleScroll();
}

function initApp() {
  const root = document.getElementById("app-root");
  if (!root) return;
  
  root.appendChild(createStickyHeader());
  const header = createFullscreenHeader();
  
  const main = document.createElement("main");

  main.appendChild(createCallout01());
  main.appendChild(createCallout02());
  main.appendChild(createCallout03());
  main.appendChild(createTestimonial());
  main.appendChild(createMarketing());

  const footer = createFooter();

  root.appendChild(header);
  root.appendChild(main);
  root.appendChild(footer);

  // Chama a função quando o DOM estiver pronto
  observeScrollForHeader();
}

document.addEventListener("DOMContentLoaded", initApp);




