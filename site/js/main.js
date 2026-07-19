  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

(function() {
  var form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('EMAIL').value.trim();
    var errorEl = document.getElementById('form-error');
    if (!email || !email.includes('@')) {
      errorEl.classList.add('is-visible');
      return;
    }
    errorEl.classList.remove('is-visible');
    fetch('https://a9a9560a.sibforms.com/serve/MUIFALECXTvk2uVS0cTUozZeLIowc78JK5jVvD9FeWpv-h_3UCM1LSrw9jfqru3aQjBjP4-ccu3Sx5ceZkqX0oJOiO88aWjFBLdc-ZMJI25ajkE9M3msilnksWvf4_7iA74OSMlnn7uw73cS_Zgqmzg0tFInQVC8k21f4zq62SGkBDN347wlv6cStka_X8gkqxJf0whJKrDnExCejQ==', { method: 'POST', body: new FormData(form), mode: 'no-cors', keepalive: true });
    window.location.href = 'thank-you.html';
  });
})();
