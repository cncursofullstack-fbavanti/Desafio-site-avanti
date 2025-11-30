// src/js/components/trainingPrograms.js

export function createTrainingCard({ title, description }) {
  const card = document.createElement("div");
  card.classList.add("trainingPrograms-component-card");

  card.innerHTML = `
    <h4>${title}</h4>
    <p>
      ${description}
    </p>
    <div>
      <a class="button-orange-big" href="#">Saiba mais</a>
    </div>
  `;

  return card;
}

export function createTrainingProgramsSection(programs) {
  const section = document.createElement("section");
  section.id = "trainingPrograms";
  section.classList.add("center");

  const heading = document.createElement("h3");
  heading.textContent = "Capacitações";

  const list = document.createElement("div");
  list.id = "trainingPrograms-componentlist";

  programs.forEach((program) => {
    const card = createTrainingCard(program);
    list.appendChild(card);
  });

  section.appendChild(heading);
  section.appendChild(list);

  return section;
}
