document.addEventListener("DOMContentLoaded", function () {
    // Lightbox functionality for images
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector("#lightbox-image");
    const lightboxCaption = document.querySelector("#lightbox-caption");
    const lightboxClose = document.querySelector(".lightbox .close");
  
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt;
      });
    });
  
    lightboxClose.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  
    // Miniature Video Modal functionality
    const thumbnail = document.querySelector(".video-thumbnail");
    const modal = document.querySelector("#avatar-modal");
    const closeModal = modal.querySelector(".close-modal");
    const closeThumbnailBtn = document.querySelector(".close-thumbnail");
  
    // Abrir o modal ao clicar na miniatura
    thumbnail.addEventListener("click", (e) => {
      if (!e.target.classList.contains("close-thumbnail")) {
        modal.style.display = "flex";
      }
    });
  
    // Fechar o modal ao clicar no botão de fechar
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Fechar a miniatura
    closeThumbnailBtn.addEventListener("click", () => {
      thumbnail.style.display = "none";
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    function checkVisibility() {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    }
  
    // Chama a função ao carregar a página
    checkVisibility();
  
    // Chama a função ao rolar a página
    window.addEventListener('scroll', checkVisibility);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".rotating-images video");
  
    function handleScroll() {
      videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Adiciona ou remove a classe fade-out dependendo da posição do vídeo
        if (rect.top < 0 || rect.bottom > windowHeight) {
          video.classList.add("fade-out");
        } else {
          video.classList.remove("fade-out");
        }
      });
    }
  
    // Executa ao rolar a página
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Garante que seja chamado ao carregar a página
  });
  
  