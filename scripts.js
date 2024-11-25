document.addEventListener("DOMContentLoaded", function () {
    // Lightbox functionality
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = lightbox.querySelector("img");
    const lightboxCaption = lightbox.querySelector("p");
    const lightboxClose = lightbox.querySelector(".close");
  
    // Open lightbox
    galleryImages.forEach((img) => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.alt || "Image caption";
      });
    });
  
    // Close lightbox
    lightboxClose.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Close lightbox on background click
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  
    // About Section hover animation (optional)
    const aboutText = document.querySelector(".about-section p");
    if (aboutText) {
      aboutText.addEventListener("mouseenter", () => {
        aboutText.style.color = "#00ff00";
      });
      aboutText.addEventListener("mouseleave", () => {
        aboutText.style.color = "#d1d1d1";
      });
    }
  
    // Modal functionality (if applicable)
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modal = document.querySelector(".modal");
    const modalClose = modal?.querySelector(".close");
  
    modalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });
  
    modalClose?.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  