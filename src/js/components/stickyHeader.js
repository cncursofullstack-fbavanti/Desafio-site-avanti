// src/js/components/callout01.js

export function createStickyHeader() {
  const section = document.createElement("header");
  section.id = "stickyHeader";

  section.innerHTML = `
     <div class="center">
      <h1 id="trademark">Atlântico Avanti</h1>
      <nav>
        <ul>
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
              <li><a href="#">Bootcamp</a></li>
              <li><a href="#">Capacita Brasil</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  `;

  return section;
}
