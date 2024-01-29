function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    //adicionando o estado de ativo ao primeiro item
    tabContent[0].classList.add("activo");

    // adicionar ou remover a classe 'activo'
    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove("activo"));
      tabContent[index].classList.add("activo");
    }

    //ao clicar no item da lista, exibir conteudo
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  // EFEITO JS EM PERGUNTAS E RESPOSTAS NA SECTION FAQ
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
