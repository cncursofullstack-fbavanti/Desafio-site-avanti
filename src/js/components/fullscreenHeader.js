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
    <div>
      <h2>Escola Atlântico Avanti</h2>
      <p>Somos a escola de tecnologia, inovação e liderança do Instituto Atlântico</p>
    </div>
  `;


  // seção de capacitações (cards)
  const trainingsSection = createTrainingProgramsSection(PROGRAMS_DATA);

  section.appendChild(center);
  section.appendChild(trainingsSection);

  return section;
}
