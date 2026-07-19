  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

(function() {
  var form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value.trim();
    var errorEl = document.getElementById('form-error');

    if (!email || !email.includes('@')) {
      errorEl.classList.add('is-visible');
      return;
    }
    errorEl.classList.remove('is-visible');

    // TODO: Replace with Brevo form action POST when live
    setTimeout(function() {
      window.location.href = 'thank-you.html';
    }, 300);
  });
})();
