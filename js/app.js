
/* --<!==== Loading Spinner Start ====--> */
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
  
  /* --<!==== Loading Spinner  End====--> */

/* --<!==== First Text fade Start ====--> */
gsap.to('.fade-in-text', {
    opacity: 1,
    duration: 6,
    delay: 1,
    ease: 'power2.out'
  });


  // Optional: You can preload the image to ensure smooth animation
  const img = new Image();
  img.src = 'link-to-your-image.jpg';
  
  img.onload = function() {
    const image = document.querySelector('.tree-img img');
    image.style.opacity = '1';
  
    image.addEventListener('animationend', function() {
      this.classList.add('fade-out');
    });
  };
  




/* --<!==== First Text fade End ====--> */



/* --<!==== bg color scroll change Start ====--> */
 gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo( ".wrap", {
      backgroundColor: gsap.getProperty("html", "--dark")
  }, {
      scrollTrigger: {
        speed:1.3,
          trigger: "#about",
          scrub: true,
          end: "bottom bottom",
      },
      backgroundColor: gsap.getProperty("html", "--light")
  });

/* --<!==== bg color scroll change  End ====--> */


/* --<!==== scroll reveal Start ====--> */
ScrollReveal ({
    // reset: true,
    distance: '100px',
    duration: 2000,
    delay:500,
  });
  
  ScrollReveal().reveal('.two-content', { origin: 'top' });
  ScrollReveal().reveal('.about-content', { origin: 'top' });
  ScrollReveal().reveal('.feature-content ', { origin: 'bottom' });
  ScrollReveal().reveal('.science ,.science1, .science2 ', { origin: 'bottom' });
  

  ScrollReveal().reveal('.images', { origin: 'bottom' });
  ScrollReveal().reveal('.c', { origin: 'left' });
  ScrollReveal().reveal('.b', { origin: 'right' });
  ScrollReveal().reveal('.d', { origin: 'top' });
  ScrollReveal().reveal('.well', { origin: 'top' });
  ScrollReveal().reveal('.para1', { origin: 'top' });
  ScrollReveal().reveal('.para2', { origin: 'top' });
  ScrollReveal().reveal('.orange-heading', { origin: 'top' });
  ScrollReveal().reveal('.Athletics-heading', { origin: 'top' });
  ScrollReveal().reveal('.t', { origin: 'top' });
  ScrollReveal().reveal('.f', { origin: 'top' });
  ScrollReveal().reveal('.orange-paras', { origin: 'top' });
  ScrollReveal().reveal('.Athletics-paras', { origin: 'top' });
  ScrollReveal().reveal('.Athletic1', { origin: 'top' });


  ScrollReveal().reveal('.place-content', { origin: 'bottom' });

  /* --<!==== scroll reveal End ====--> */



  /* --<!==== slider hr Start ====--> */


  gsap.registerPlugin(ScrollTrigger);
  let sections = gsap.utils.toArray(".slide");
      
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-sliders",
      pin: ".main",
      pinSpacing: true,
      scrub: 1,
      end: "+=3000",
    }
  });
  




  //////// img zoom////////////////?

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      var element = document.querySelector(".zoom-in");
      var position = element.getBoundingClientRect();
  
      // Checking if the element is in the viewport
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("zoom");
      } else {
        element.classList.remove("zoom");
      }
    });
  });
  


  


/* --<!==== Header fixed Start ====--> */

  $(document).ready(function(){
    $(window).bind('scroll', function() {
      var navHeight = $('.main-header').height();
      if ($(window).scrollTop() > navHeight) {
        $('.nav-bar').addClass('fixed');
        $('.nav-1').addClass('toleft');
       }
      else {
        $('.nav-bar').removeClass('fixed');
        $('.nav-1').removeClass('toleft');
       }
    });
  });
    
/* --<!==== Header fixed End ====--> */



/* --<!==== Arrow Start ====--> */
smoothScroll.init();
/* --<!==== Arrow End ====--> */
  












   
   
 
 