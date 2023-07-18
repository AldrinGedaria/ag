let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//hamburgermenu on mobile
menu.addEventListener("click", function (){
	navbar.classList.toggle("active");
});

window.onscroll = () => {
	navbar.classList.remove("active");
};

//removing right click
window.addEventListener('contextmenu',(e) =>{
	e.preventDefault();
	console.log("right clicked");
});

//cursor design
var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

//footer image animation
var image = document.getElementsByClassName("hero-img-parallax");
      new simpleParallax(image, {
        scale: 1.4
      });

//for preloader animation
setTimeout(() => {
    const box = document.getElementById('container');
    box.style.display = 'none';
  }, 8000);

//prevent scrollling temporarily
document.body.setAttribute('style','overflow:hidden;');

  setTimeout(function(){
    document.body.setAttribute('style','overflow:visible;');
}, 7500);

//intro animation
  gsap.to(".text-wrapper > div", 1, {
    x: "500",
    ease: Expo.easeInOut,
    stagger: 0.1,
  });

  gsap.to(".text-wrapper", 3, {
    y: -500,
    scale: 2,
    rotate: -90,
    ease: Expo.easeInOut,
    delay: 1.5,
  });

  gsap.to(".text", 1, {
    opacity: 1,
    ease: Expo.easeInOut,
    delay: 3,
  });

  gsap.to(".text-wrapper > div", 4, {
    x: "-4000",
    ease: Expo.easeInOut,
    delay: 3.5,
    stagger: 0.05,
  });

  gsap.to(".text-container", 2, {
    bottom: "-150%",
    ease: Expo.easeInOut,
    delay: 6.5,
  });


//smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      lenis.scrollTo(this.getAttribute('href'))
    });
  });
  
//refresh on top
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
document.body.scrollTop = 0; // For Safari
