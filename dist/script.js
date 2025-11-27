document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cta-btn");
  btn.addEventListener("click", () => {
    alert("Merci de votre intérêt ! Découvrez nos services plus en détail.");
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    form.reset();
  });
});