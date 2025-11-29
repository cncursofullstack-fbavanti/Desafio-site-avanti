// src/js/components/marketing.js

export function createMarketing() {
  const section = document.createElement("section");
  section.id = "marketing";

  section.innerHTML = `
    <div class="center">
      <h3>#escolhaavanti</h3>
      <h4>De mercado a gente entende!</h4>
      <p>
        O Atlântico, reconhecido como uma das principais empresas de tecnologia para se trabalhar no Brasil, 
        emprega mais de 600 profissionais. Agora, apresenta o Avanti, um programa focado em capacitar talentos 
        da área de TI para estarem à frente no mercado das mais novas tecnologias. Não é apenas um curso, é uma 
        formação desenvolvida por profissionais, para profissionais.
      </p>
      <div><img src="" alt="" /></div>
    </div>
  `;

  return section;
}
