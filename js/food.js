
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.food-item');
    items.forEach(item => {
      const top = item.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        item.classList.add('visible');
      }
    });
  });