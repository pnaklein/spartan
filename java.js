var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";

}


//Testimonial slide show//
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;
  let cardWidth;

  function updateCardWidth() {
      cardWidth = document.querySelector('.cardslider').offsetWidth + 20; // Including gap
      updateSlider();
  }

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
      if (currentIndex < slider.children.length - 3) { // Move to next card if there’s room for 3 cards
          currentIndex++;
      } else {
          currentIndex = 0; // Loop back to the start
      }
      updateSlider();
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = slider.children.length - 3; // Loop back to the last full set of 3 cards
      }
      updateSlider();
  });

  window.addEventListener('resize', updateCardWidth);
  updateCardWidth();  // Initial calculation of card width
  
});


