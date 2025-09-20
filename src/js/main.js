// This file is intentionally left blank.<script>
  const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');
  const items = Array.from(document.querySelectorAll('.carousel-item'));

  // Scroll step size (approx width of one item + gap)
  const scrollStep = 170;

  // Click thumbnails to open video in new tab
  items.forEach(item => {
    item.addEventListener('click', () => {
      const url = item.getAttribute('data-url');
      window.open(url, '_blank');
    });
  });

  // Scroll carousel left
  leftBtn.addEventListener('click', () => {
    if (track.scrollLeft <= 0) {
      track.scrollLeft = track.scrollWidth; // jump to end for infinite feel
    }
    track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  // Scroll carousel right
  rightBtn.addEventListener('click', () => {
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth) {
      track.scrollLeft = 0; // jump to start for infinite feel
    }
    track.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });

  // Optional: Auto scroll every 7 seconds (comment out if not needed)
  // setInterval(() => rightBtn.click(), 7000);
</script>
