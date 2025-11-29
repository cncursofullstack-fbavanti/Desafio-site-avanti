// src/js/components/footer.js

export function createFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <div class="center">
      <section>
        <h2>Atlântico Avanti</h2>
      </section>

      <section>
        <nav id="footer-backToTop">
          <ul>
            <li><a href="#fullscreen-header">Início</a></li>
          </ul>
        </nav>
        <nav id="footer-socialNetwork">
          <ul>
            <li class="footer-socialNetwork-facebook"><a href="">Facebook</a></li>
            <li class="footer-socialNetwork-linkedin"><a href="">LinkedIn</a></li>
            <li class="footer-socialNetwork-instagram"><a href="">Instagram</a></li>
            <li class="footer-socialNetwork-whatsapp"><a href="">Whatsapp</a></li>
            <li class="footer-socialNetwork-youtube"><a href="">Youtube</a></li>
          </ul>
        </nav>
        <address>
          <p>Ceará</p>
          <p>
            Av. Washington Soares, 909, Lojas 42, 43, 44, E 45<br />
            Edson Queiroz - Fortaleza<br />
            CEP: 60811-341
          </p>
        </address>
      </section>

      <section>
        <div id="footer-privacy">
          <p>
            Política de privacidade e uso de cookies. Clique aqui
            Termo de Consentimento. Clique aqui.
            Requisição de Titular de dados. Clique aqui.
          </p>
        </div>
        <div id="contact">
          <p>
            Entre em contato:
            <a href="mailto:contato@atlanticoavanti.com.br">contato@atlanticoavanti.com.br</a>
            <a href="tel:+55 (85) 99111-1262">(85) 99111-1262</a>
          </p>
        </div>
      </section>
    </div>
  `;

  return footer;
}
