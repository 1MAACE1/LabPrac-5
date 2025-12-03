const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ==== Аккордеон ==== */
document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});


/* ==== Фильтрация галереи ==== */
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    document.querySelectorAll(".gallery img").forEach(img => {
      if (category === "all" || img.dataset.category === category) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});


/* ==== Модальное окно ==== */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;

    // получить ссылку из data-video
    const videoLink = img.getAttribute("data-video");

    if (videoLink) {
      modalVideo.href = videoLink;
      modalVideo.style.display = "block";
    } else {
      modalVideo.style.display = "none";
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
