const intro = document.querySelector(".intro");
const spacer = document.querySelector(".intro-spacer");

function updatePin() {
  const y = window.scrollY;
  const h = window.innerHeight;

  // BEFORE scrolling: intro is normal
  if (y === 0) {
    intro.style.position = "relative";
    spacer.style.display = "none";
    return;
  }

  // DURING first viewport scroll: pin intro
  if (y > 0 && y < h) {
    intro.style.position = "fixed";
    intro.style.top = "0";
    intro.style.left = "0";
    intro.style.width = "100%";
    spacer.style.display = "block";
    return;
  }

  // AFTER first viewport: release intro
  intro.style.position = "relative";
  spacer.style.display = "none";
}

window.addEventListener("scroll", updatePin);
window.addEventListener("load", updatePin);

const menuButton = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.side-nav');

if (menuButton && sideNav) {
  menuButton.addEventListener('click', () => {
    sideNav.classList.toggle('open');
  });
}

window.addEventListener("scroll", () => {
  document.querySelector(".scroll-indicator")?.style.setProperty(
    "opacity",
    Math.max(0, 1 - window.scrollY / 200)
  );
});

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.setup-page figure img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});


