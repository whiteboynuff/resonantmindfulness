  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

(function() {
  var form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    var email = document.getElementById('EMAIL').value.trim();
    var errorEl = document.getElementById('form-error');
    if (!email || !email.includes('@')) {
      e.preventDefault();
      errorEl.classList.add('is-visible');
      return;
    }
    errorEl.classList.remove('is-visible');
    var frame = document.querySelector('iframe[name="brevo-frame"]');
    if (frame) frame._submitted = true;
  });
})();
