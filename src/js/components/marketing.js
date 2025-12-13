const certitication = new URL(
  "../../assets/imgs/BADGE-CERTIFICACAO-ANUAL-e1544721733152.webp",
  import.meta.url
).href;

const foto = new URL(
  "../../assets/imgs/WhatsApp Image 2023-12-01 at 10_04_46.avif",
  import.meta.url
).href;

const gp1 = new URL("../../assets/imgs/gp1.jpeg", import.meta.url).href;
const gp2 = new URL("../../assets/imgs/gp2.jpeg", import.meta.url).href;
const gp3 = new URL("../../assets/imgs/gp3.jpeg", import.meta.url).href;
const gp4 = new URL("../../assets/imgs/gp4.jpeg", import.meta.url).href;
const gp5 = new URL("../../assets/imgs/gp5.jpg", import.meta.url).href;
const gp6 = new URL("../../assets/imgs/gp6.jpg", import.meta.url).href;

const logoColorida = new URL(
  "../../assets/imgs/atlantico-slogan-colorida-2.png",
  import.meta.url
).href;

export function createMarketing() {
  const section = document.createElement("section");
  section.className = "market";

  const container = document.createElement("div");
  container.className = "market__container";

  const grid = document.createElement("div");
  grid.className = "market__grid";

  // ===== LEFT =====
  const left = document.createElement("div");
  left.className = "market__left";

  const hash = document.createElement("p");
  hash.className = "market__hash";
  hash.textContent = "#escolhaavanti";

  const title = document.createElement("h2");
  title.className = "market__title";
  title.innerHTML = `De mercado a gente<br/>entende!`;

  const desc = document.createElement("p");
  desc.className = "market__desc";
  desc.textContent =
    "O Atlântico, reconhecido como uma das principais empresas de tecnologia para se trabalhar no Brasil, emprega mais de 600 profissionais. Agora, apresenta o Avanti, um programa focado em capacitar talentos da área de TI para estarem à frente no mercado das mais novas tecnologias. Não é apenas um curso, é uma formação desenvolvida por profissionais, para profissionais.";

  const logoWrap = document.createElement("div");
  logoWrap.className = "market__logoWrap";

  const logoImg = document.createElement("img");
  logoImg.className = "market__logoImg";
  logoImg.src = logoColorida;
  logoImg.alt = "Atlântico";
  logoImg.loading = "lazy";

  logoWrap.appendChild(logoImg);

  left.appendChild(hash);
  left.appendChild(title);
  left.appendChild(desc);
  left.appendChild(logoWrap);

  // ===== RIGHT =====
  const right = document.createElement("div");
  right.className = "market__right";

  const media = document.createElement("div");
  media.className = "market__media";

  const badge = document.createElement("img");
  badge.className = "market__badgeImg";
  badge.src = certitication;
  badge.alt = "Certificação";
  badge.loading = "lazy";

  const photo = document.createElement("img");
  photo.className = "market__photo";
  photo.src = foto;
  photo.alt = "Equipe Atlântico";
  photo.loading = "lazy";

  media.appendChild(photo);
  media.appendChild(badge);

  const awards = document.createElement("div");
  awards.className = "market__awards";

  const awardImgs = [gp1, gp2, gp3, gp4, gp5, gp6];
  awardImgs.forEach((src, i) => {
    const img = document.createElement("img");
    img.className = "market__award";
    img.src = src;
    img.alt = `Selo ${i + 1}`;
    img.loading = "lazy";
    awards.appendChild(img);
  });

  right.appendChild(media);
  right.appendChild(awards);

  grid.appendChild(left);
  grid.appendChild(right);

  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
