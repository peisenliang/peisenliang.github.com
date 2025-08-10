// assets/js/main.js

document.querySelectorAll('.cover-container').forEach(cover => {
  cover.addEventListener('click', () => {
    cover.classList.toggle('active');
  });
});

document.addEventListener('click', e => {
  document.querySelectorAll('.cover-container.active').forEach(activeCover => {
    if (!activeCover.contains(e.target)) {
      activeCover.classList.remove('active');
    }
  });
});
