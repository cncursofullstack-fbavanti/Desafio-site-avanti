// src/js/components/callout03.js

export function createCallout03() {
  const section = document.createElement("section");
  section.id = "Callout-03";

  section.innerHTML = `
    <div class="center">
      <h3>Vá além dos requisitos mínimos do mercado.</h3>
      <p>
        Nossos especialistas estão prontos para te ajudar a escolher o melhor caminho para sua carreira e 
        te apoiar a se posicionar como referência e liderança no seu segmento.
      </p>
      <div>
        <a href="#" class="button-orange-big">Entrar em contato</a>
      </div>
    </div>
  `;

  return section;
}
