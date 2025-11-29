// src/js/components/callout02.js

export function createCallout02() {
  const section = document.createElement("section");
  section.id = "Callout-02";

  section.innerHTML = `
    <div class="center">
      <img src="../src/assets/imgs/video01.png" alt="simulando um vídeo" />
      <div>
        <a href="#" class="button-orange-small">Destaque-se no mercado</a>
        <h3>
          Oferecemos as formações ideais para desenvolver as habilidades
          <strong>mais procuradas pelas grandes empresas!</strong>
        </h3>
        <ul>
          <li>Com muita mão na massa, nossa metodologia de ensino garante que o aluno tenha um aprendizado 360°.</li>
          <li>Faça parte de uma comunidade de profissionais de destaque e com muita troca de experiência.</li>
          <li>Vá além do conhecimento técnico com nossos módulos de soft skills, torne-se um profissional completo.</li>
        </ul>
      </div>
    </div>
  `;

  return section;
}
