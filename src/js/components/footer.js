const facebookwhite  = new URL("../../assets/imgs/social/facebook-white.png", import.meta.url).href;
const instagramwhite = new URL("../../assets/imgs/social/instagram-white.png", import.meta.url).href;
const linkedinwhite  = new URL("../../assets/imgs/social/linkedin-white.png", import.meta.url).href;
const youtubewhite    = new URL("../../assets/imgs/social/youtube-white.png", import.meta.url).href;

const marcasvg = new URL("../../assets/imgs/marca.svg", import.meta.url).href;

export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const container = document.createElement("div");
  container.className = "footer__container";

  const topRow = document.createElement("div");
  topRow.className = "footer__top";

  const brand = document.createElement("a");
  brand.className = "footer__brand";
  brand.href = "#top";
  brand.setAttribute("aria-label", "Atlântico Avanti");

  const brandImg = document.createElement("img");
  brandImg.className = "footer__brandImg";
  brandImg.src = marcasvg;       
  brandImg.alt = "Atlântico Avanti";
  brandImg.loading = "lazy";

  brand.appendChild(brandImg);

  const nav = document.createElement("nav");
  nav.className = "footer__nav";
  nav.innerHTML = `<a class="footer__navLink" href="#top">Início</a>`;

  topRow.appendChild(brand);
  topRow.appendChild(nav);

  const content = document.createElement("div");
  content.className = "footer__content";

  const left = document.createElement("div");
  left.className = "footer__left";

  const socials = document.createElement("div");
  socials.className = "footer__socials";
  socials.appendChild(createSocialLink("Facebook", "#", facebookwhite));
  socials.appendChild(createSocialLink("LinkedIn", "#", linkedinwhite));
  socials.appendChild(createSocialLink("Instagram", "#", instagramwhite));
  socials.appendChild(createSocialLink("YouTube", "#", youtubewhite));

  const address = document.createElement("div");
  address.className = "footer__address";
  address.innerHTML = `
    <p class="footer__text">
      Cecred<br/>
      Av. Washington Soares, 909, Lojas 42, 43, 44, E 45<br/>
      Edson Queiroz – Fortaleza<br/>
      CEP: 60811-341
    </p>
  `;

  left.appendChild(socials);
  left.appendChild(address);

  const right = document.createElement("div");
  right.className = "footer__right";

  const institutional = document.createElement("div");
  institutional.className = "footer__block footer__block--institutional";
  institutional.innerHTML = `
    <p class="footer__text">
      Política de privacidade e uso de cookies. <a class="footer__link" href="#">Clique aqui</a><br/>
      Termo de Consentimento. <a class="footer__link" href="#">Clique aqui</a><br/>
      Requisição de Titular de dados. <a class="footer__link" href="#">Clique aqui</a>
    </p>
  `;

  const contact = document.createElement("div");
  contact.className = "footer__block footer__block--contact";
  contact.innerHTML = `
    <p class="footer__text">
      Entre em contato:<br/>
      <a class="footer__link" href="mailto:contato@unicoavanti.com.br">contato@unicoavanti.com.br</a><br/>
      <a class="footer__link" href="tel:+5585991111262">(85) 99111-1262</a>
    </p>
  `;

  right.appendChild(institutional);
  right.appendChild(contact);

  content.appendChild(left);
  content.appendChild(right);

  container.appendChild(topRow);
  container.appendChild(content);
  footer.appendChild(container);

  return footer;
}

function createSocialLink(label, href, imgSrc) {
  const a = document.createElement("a");
  a.className = "footer__socialLink";
  a.href = href;
  a.setAttribute("aria-label", label);

  const img = document.createElement("img");
  img.className = "footer__socialIcon";
  img.src = imgSrc;  
  img.alt = label;
  img.loading = "lazy";

  a.appendChild(img);
  return a;
}
