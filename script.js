// MENU MOBILE - AÇÃO
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




// SEÇÕES DE ROLAGEM - COR DO NOME
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach ( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // SEÇÕES 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 10);
    // REMOVER O ICONE DE MENU MOBILE
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// SCROLL REVEAL 
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .contato form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sobre-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .sobre-content', {origin: 'right'});

//EFEITO DE DIGITANDO
const typed = new Typed('.multiple-text', {
    strings: ['Transportadora.', 'Lógistica.', 'Confiança.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


   // Função para animar o contador
    function animarContador(element, targetValue, duration) {
      const frameRate = 60; // FPS
      const increment = targetValue / (duration / (1000 / frameRate));
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
          element.textContent = `${Math.floor(currentValue)}+`; // Adiciona o "+" após a contagem
        } else {
          element.textContent = Math.floor(currentValue);
        }
      }, 1000 / frameRate);
    }

    // Observador para ativar a animação ao rolar a página
    const observadorContagem = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const box = entry.target;
            const contadorElement = box.querySelector(".contador-contagem");
            const targetValue = parseInt(box.getAttribute("data-target"), 10);

            if (!box.classList.contains("visivel")) {
              animarContador(contadorElement, targetValue, 2000);
              box.classList.add("visivel");
            }
          }
        });
      },
      { threshold: 0.5 } // Ativa quando 50% do elemento está visível
    );

    // Selecionar todas as boxes e observar
    document.querySelectorAll(".box-contagem").forEach((box) => {
      observadorContagem.observe(box);
    });



    let index = 0; // Índice da imagem atual
    const imagens = document.querySelectorAll('.carousel-images img'); // Seleciona todas as imagens
    const gallery = document.getElementById('gallery'); // Container da galeria
    const carouselContainer = document.getElementById('carousel-container'); // Container do carrossel
    let intervaloImagem; // Variável para armazenar o intervalo da passagem automática das imagens

    // Função para mudar a imagem
    function mudarImagem(direction) {
      index += direction; // Altera o índice

      if (index < 0) index = imagens.length - 1; // Volta para a última imagem
      if (index >= imagens.length) index = 0; // Vai para a primeira imagem

      atualizarCarrossel(); // Atualiza a posição do carrossel
    }

    // Função para atualizar o carrossel
    function atualizarCarrossel() {
      const container = document.querySelector('.carousel-images');
      container.style.transform = `translateX(${-index * 100}%)`; // Muda a posição das imagens
    }

    // Função para passar as imagens automaticamente
    function passarImagemAutomaticamente() {
      intervaloImagem = setInterval(() => {
        mudarImagem(1); // Passa para a próxima imagem
      }, 3000); // Intervalo de 3 segundos (3000ms)
    }

    // Função para parar a passagem automática das imagens
    function pararPassagemAutomatica() {
      clearInterval(intervaloImagem); // Interrompe o intervalo da passagem automática
    }

    // Função para selecionar uma imagem específica
    function selecionarImagem(imagemIndex) {
      index = imagemIndex; // Define o índice da imagem selecionada
      atualizarCarrossel(); // Atualiza a posição do carrossel
      gallery.style.display = "none"; // Oculta a galeria quando selecionar uma imagem
      carouselContainer.style.display = "block"; // Exibe o carrossel
      pararPassagemAutomatica(); // Para a passagem automática quando uma imagem for aberta
    }

    // Função para selecionar todas as imagens e mostrar em uma grade
    function selecionarTodas() {
      // Oculta o carrossel e exibe a galeria
      carouselContainer.style.display = "none";
      gallery.style.display = "grid"; // Exibe a galeria em grid

      // Preenche a galeria com as imagens
      gallery.innerHTML = "";
      for (let i = 0; i < imagens.length; i++) {
        const img = document.createElement("img");
        img.src = imagens[i].src; // Pega a URL da imagem
        img.alt = imagens[i].alt; // Pega o texto alternativo da imagem
        img.onclick = function() {
          selecionarImagem(i); // Chama a função de selecionar imagem ao clicar na imagem da galeria
        };
        gallery.appendChild(img); // Adiciona a imagem à galeria
      }
    }

    // Inicia o carrossel com a primeira imagem
    atualizarCarrossel();
    passarImagemAutomaticamente(); // Chama a função para iniciar a passagem automática