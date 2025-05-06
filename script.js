document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggle-theme');

  if (toggleBtn) {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
      toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      if (document.body.classList.contains('light-mode')) {
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
      } else {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});

document.getElementById('btnEmail').addEventListener('click', function() {
  window.location.href = 'mailto:phonktrack@email.com';
});

document.getElementById('btnDiscord').addEventListener('click', function() {
  window.open('https://discord.com/users/alces01', '_blank');
});

document.getElementById('btnInstagram').addEventListener('click', function() {
  window.open('https://instagram.com/alces.jar', '_blank');
});
