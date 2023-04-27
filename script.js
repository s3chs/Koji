const tl = gsap.timeline();

tl.to('.welcome-txt-jap, .welcome-txt-eng', 1.3, {
  y: '0',
  delay: 1,
  ease: 'power3.inOut',
});

tl.to('.website-container', 0, {
  display: 'block',
});

tl.to('.overlay-black', 1.5, {
  y: '-100%',
  ease: 'power3.inOut',
});

tl.to('body', 0, {
  overflowY: 'auto',
});

tl.to('.hero-text span', 0.8, {
  y: '0',
  ease: 'power3.inOut',
  stagger: 0.1,
}, '-=0.7');

tl.to('.hero-text p', 0.8, {
  y: '0',
  ease: 'power3.inOut',
}, '-=0.7');

tl.to('.hero-bottom-infos', 0.7, {
  opacity: 1,
  ease: 'power3.inOut',
  bottom: '4vh',
  stagger: 0.1,
}, '-=0.4');

tl.to('.bar-name-container span', 0.8, {
  opacity: 1,
  ease: 'power3.inOut',
  y: 0,
}, '-=0.65');

tl.to('.navigation-container p', 0.4, {
  opacity: 1,
  ease: 'power3.inOut',
  y: 0,
  stagger: 0.1,
}, '-=0.6');

tl.to('.website-container', {
  height: 'auto',
  overflow: 'auto',
  oncomplete: () => {
    var home = document.querySelector('.website-container').offsetTop;
    var about = document.querySelector('.about-section').offsetTop;
    var menu = document.querySelector('.cocktails-section').offsetTop;
    var contact = document.querySelector('.contact-section').offsetTop;
    var navHome = document.querySelector('.nav-el-home');
    var navAbout = document.querySelector('.nav-el-about');
    var navMenu = document.querySelector('.nav-el-menu');
    var navContact = document.querySelector('.nav-el-contact');

    navHome.addEventListener('click', () => {
      window.scrollTo({top: home, behavior: 'smooth'});
    });
    navAbout.addEventListener('click', () => {
      window.scrollTo({top: about, behavior: 'smooth'});
    });
    navMenu.addEventListener('click', () => {
      window.scrollTo({top: menu, behavior: 'smooth'});
    });
    navContact.addEventListener('click', () => {
      window.scrollTo({top: contact, behavior: 'smooth'});
    });
  },
});
