const planofundo = new URL(
  "../../assets/imgs/11062b_b0f3aca68e224bf7a012f8432bfadaf1~mv2.avif",
  import.meta.url
).href;

export function createTestimonial() {
  const section = document.createElement("section");
  section.className = "testimonials";

  section.style.backgroundImage = `
    linear-gradient(90deg, rgba(61, 26, 108, 0.95), rgba(143, 46, 58, 0.92)),
    url(${planofundo})
  `;

  const container = document.createElement("div");
  container.className = "testimonials__container";

  const header = document.createElement("div");
  header.className = "testimonials__header";

  const eyebrow = document.createElement("p");
  eyebrow.className = "testimonials__eyebrow";
  eyebrow.textContent = "O Avanti Vale a pena?";

  const title = document.createElement("h2");
  title.className = "testimonials__title";
  title.innerHTML = "Confira os depoimentos de<br/>quem estudou com a gente";

  header.appendChild(eyebrow);
  header.appendChild(title);

  const gridWrap = document.createElement("div");
  gridWrap.className = "testimonials__gridWrap";

  const grid = document.createElement("div");
  grid.className = "testimonials__grid";

  const items = [
    {
      name: "Vitória Marinho",
      role: "UX Designer",
      quote: "“...minha experiência foi muito positiva...”",
      link: "https://youtu.be/OtyM6y7IAos?si=VPNBj9rc-CCN1db3",
    },
    {
      name: "Jefferson",
      role: "Analista de Sistemas",
      quote: "“...no Linkedin apareceram várias propostas de emprego...”",
      link: "https://youtu.be/wKSoOHouXwE?si=IL3nafN6tBxumAAH",
    },
    {
      name: "Hugo Barreto",
      role: "Gerente de Projetos",
      quote: "“...ambiente muito leve, muito organizado, muito colaborativo...”",
      link: "https://youtu.be/WbxNbmU4nzg?si=M_Yw4xtdMyMvTadC",
    },
    {
      name: "Marcelo Figueiral",
      role: "Diretor de Inovação",
      quote: "“...uma metodologia que é excelente, isso já gerou impacto pro meu negócio...”",
      link: "https://youtu.be/UC80q9NYkSk?si=ntRMuI7e3d1WLXTl",
    },
  ];

  items.forEach((item) => grid.appendChild(createTestimonialCard(item)));

  gridWrap.appendChild(grid);

  container.appendChild(header);
  container.appendChild(gridWrap);
  section.appendChild(container);

  return section;
}

function createTestimonialCard({ name, role, quote, link }) {
  const card = document.createElement("article");
  card.className = "tcard";

  const media = document.createElement("div");
  media.className = "tcard__media";

  const embedUrl = toEmbedUrl(link);

  const iframe = document.createElement("iframe");
  iframe.className = "tcard__iframe";
  iframe.src = embedUrl;
  iframe.title = `Depoimento de ${name}`;
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  media.appendChild(iframe);

  const body = document.createElement("div");
  body.className = "tcard__body";

  const q = document.createElement("p");
  q.className = "tcard__quote";
  q.textContent = quote;

  const nm = document.createElement("p");
  nm.className = "tcard__name";
  nm.textContent = name;

  const rl = document.createElement("p");
  rl.className = "tcard__role";
  rl.textContent = role;

  body.appendChild(q);
  body.appendChild(nm);
  body.appendChild(rl);

  card.appendChild(media);
  card.appendChild(body);

  return card;
}

function toEmbedUrl(url) {
  if (!url) return null;

  let id = null;

  if (url.includes("youtu.be/")) {
    id = url.split("youtu.be/")[1].split("?")[0].split("&")[0];
  } else if (url.includes("watch?v=")) {
    id = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtube.com/embed/")) {
    return url.split("?")[0];
  }

  if (!id) return null;

  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
}
