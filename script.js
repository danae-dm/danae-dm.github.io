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

