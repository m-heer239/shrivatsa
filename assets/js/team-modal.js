document.querySelectorAll('.read-bio').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    this.closest('.bio-modal').style.display = 'none';
  });
});

window.addEventListener('click', function (event) {
  document.querySelectorAll('.bio-modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
