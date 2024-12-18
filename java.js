var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";

}

//T//
document.getElementById("pricing-toggle").addEventListener("change", function () {
    const prices = document.querySelectorAll(".price-num");
    const monthlyPrices = [30, 50, 80, 25]; // Monthly prices
    const yearlyPrices = [300, 500, 800, 250]; // Yearly prices (10x monthly prices)

    prices.forEach((price, index) => {
        if (this.checked) {
            price.textContent = `£${yearlyPrices[index]} p/y`;
        } else {
            price.textContent = `£${monthlyPrices[index]} p/m`;
        }
    });
});



//Testimonial slide show//

let slideIndex_1 = 1;
showslides(slideIndex_1);

function plusSlides(n) {
  showslides(slideIndex_1 += n);
}

function currentSlide(n) {
  showslides(slideIndex_1 = n);
}

function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_S");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex_1 = 1}
    if (n < 1) {slideIndex_1 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex_1-1].style.display = "block";
  dots[slideIndex_1-1].className += " active";
}
  
  