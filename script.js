document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const pills = document.querySelectorAll('.pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((item) => item.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      const input = form.querySelector('input');
      if (!button || !input) return;

      const previous = button.textContent;
      button.textContent = 'Joined';
      button.disabled = true;
      input.value = '';

      setTimeout(() => {
        button.textContent = previous;
        button.disabled = false;
      }, 1800);
    });
  }
});






















































