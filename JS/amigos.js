
  const slider = document.querySelector('.slider-frame ul');
  const slides = document.querySelectorAll('.slider-frame li');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  // Auto-slide cada 5 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 5000);





