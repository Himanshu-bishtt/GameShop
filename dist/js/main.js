// Typewriter

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed = typeSpeed / 4;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

//----------- remove topbar --------------//
document.querySelector(".topbar").addEventListener("click", function (e) {
  if (e.target.className === "remove") {
    e.target.parentElement.remove();
  }

  e.preventDefault();
});

// sticky menu background
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("#main-header");
  let topbar = document.querySelector(".topbar");
  // let navbarInner = document.querySelector(".navbarInner");
  if (window.scrollY > 600) {
    navbar.style.opacity = 0.95;
    topbar.style.display = "none";
  } else {
    navbar.style.opacity = 1;

    // topbar.style.display = "block";
  }
});

// Scroll to TOP
var btn = $(".scrollup");
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});

// categoriesSlider
$(document).ready(function () {
  $("#categorySlider").lightSlider({
    autoWidth: true,
    loop: true,
    auto: true,
    controls: false,
    pauseOnHover: true,
    pager: false,
    onSliderLoad: function () {
      $("#categorySlider").removeClass("cS-hidden");
    },
  });
});

// exploreMoreGamesSlider
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: false,
    controls: false,
    pauseOnHover: true,
    // pager: false,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
