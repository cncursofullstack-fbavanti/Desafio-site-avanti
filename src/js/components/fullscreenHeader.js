// src/js/components/fullscreenHeader.js
import { createTrainingProgramsSection } from "./trainingPrograms.js";

const PROGRAMS_DATA = [
  {
    title: "Cientista de Dados",
    description:
      "Cada vez mais empresas dependem de dados para tomar decisões — e o profissional que sabe coletar, analisar e comunicar esses insights está em alta.",
  },
  {
    title: "Desenvolvedor Fullstack",
    description:
      "Aprenda back-end e front-end, boas práticas de código e arquitetura para atuar em projetos completos do início ao fim.",
  },
  {
    title: "Next Gen AI",
    description:
      "Domine conceitos e ferramentas de inteligência artificial para criar soluções inovadoras em diferentes áreas.",
  },
];

export function createFullscreenHeader() {
  const section = document.createElement("section");
  section.id = "fullscreen-header";

  // bloco com título
  const center = document.createElement("div");
  center.classList.add("center");

  center.innerHTML = `
    <header>
      <div>
          <h1>Atlântico Avanti</h1>
          <div class="hamburguer"><span></span></div>
      </div>
      <h2>Escola Atlântico Avanti</h2>
      <p>Somos a escola de tecnologia, inovação e liderança do Instituto Atlântico</p>
    </header>
  `;

  // navegação lateral
  const nav = document.createElement("nav");
  nav.id = "header-navigation";
  nav.classList.add("hide");
  nav.innerHTML = `
    <ul id="header-navigation-main">
      <li>
        <strong>Capacitações</strong>
        <ul>
          <li><a href="#">Cientista de Dados</a></li>
          <li><a href="#">Desenvolvedor Fullstack</a></li>
          <li><a href="#">Designer de Futuros</a></li>
          <li><a href="#">Project Management</a></li>
          <li><a href="#">Cybershield</a></li>
          <li><a href="#">Next Gen AI</a></li>
        </ul>
      </li>
      <li>
        <strong>Soluções Educacionais</strong>
        <ul>
          <li>Bootcamp</li>
          <li>Capacita Brasil</li>
        </ul>
      </li>
    </ul>
    <ul id="header-navigation-socialNetwork">
      <li id="header-navigation-socialNetwork-insta"><a href="#">Instagram</a></li>
      <li id="header-navigation-socialNetwork-linkedin"><a href="#">LinkedIn</a></li>
      <li id="header-navigation-socialNetwork-youtube"><a href="#">Youtube</a></li>
      <li id="header-navigation-socialNetwork-tiktok"><a href="#">Tiktok</a></li>
    </ul>
  `;

  // seção de capacitações (cards)
  const trainingsSection = createTrainingProgramsSection(PROGRAMS_DATA);

  section.appendChild(center);
  section.appendChild(nav);
  section.appendChild(trainingsSection);

  return section;
}
