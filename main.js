// CURSOR
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateCursorRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

document.querySelectorAll('a, button, .valor-card, .actividade-card').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorRing.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorRing.classList.remove('hover');
  });
});

// NAVBAR SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// SCROLL REVEAL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal, .stat-item, .valor-card').forEach((el) => observer.observe(el));

// COUNTER ANIMATION
function animateCounter(el, target, isYear) {
  if (isYear) {
    el.textContent = target;
    return;
  }
  const duration = 2000;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const statObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        const nums = e.target.querySelectorAll('.stat-num[data-target]');
        nums.forEach((n) => {
          const t = parseInt(n.dataset.target, 10);
          const isYear = t > 100;
          animateCounter(n, t, isYear);
        });
        statObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('#stats').forEach((el) => statObs.observe(el));

// FORMULÁRIO (TOAST)
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// VALOR CARDS DELAY
document.querySelectorAll('.valor-card').forEach((card, i) => {
  card.style.transitionDelay = i * 0.08 + 's';
});

// MOBILE NAV TOGGLE
const navToggle = document.getElementById('navToggle');

if (navToggle && navbar) {
  navToggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  // fecha ao clicar num link
  document.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => {
      if (navbar.classList.contains('menu-open')) {
        navbar.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
  });

  // fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('menu-open')) {
      navbar.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });
}
