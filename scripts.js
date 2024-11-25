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
  