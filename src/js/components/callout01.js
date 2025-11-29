// src/js/components/callout01.js

export function createCallout01() {
  const section = document.createElement("section");
  section.id = "Callout-01";

  section.innerHTML = `
    <div class="center">
      <h3>
        Somos uma escola de <strong>tecnologia</strong>, <strong>inovação</strong> e <strong>liderança</strong> que conecta educação de 
        <strong>excelência</strong> com o ecossistema de <strong>ciência</strong> e <strong>tecnologia</strong>, oferecendo soluções 
        educacionais integradas para capacitar pessoas e empresas a resolver problemas complexos e <strong>liderar</strong> a 
        <strong>transformação</strong> no mercado.
      </h3>
    </div>
  `;

  return section;
}
