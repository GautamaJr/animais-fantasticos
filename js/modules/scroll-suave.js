// EFEITO DE SCROLL SUAVE NO MENU
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      black: "start",
    });

    // forma alternativa
    //   const top = section.offsetTop;
    //   window.scrollTo({
    //     top: top,
    //     behavior: "smooth",
    //   });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
