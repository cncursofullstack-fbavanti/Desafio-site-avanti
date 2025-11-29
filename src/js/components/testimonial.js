// src/js/components/testimonial.js

export function createTestimonial() {
  const section = document.createElement("section");

  section.innerHTML = `
    <div class="center">
      <h3>O Avanti vale a pena?</h3>
      <h4>Confira o depoimento de quem estudou com a gente</h4>

      <div class="testimonial-card">
        <a href="#"><img src="" alt="video-testimonial" /></a>
        <blockquote>...minha experiência foi muito positiva...</blockquote>
        <h5 class="author">Vitória Marinho</h5>
        <p class="role">UX Designer</p>
      </div>
    </div>
  `;

  return section;
}
