//Navbar fixed - back toTop
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top'); // back to top


    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
};

//backtoTop from berdikarier
// Back to top button
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });
//   $('.back-to-top').click(function() {
//     $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//     return false;
//   });

//hamburger //diambil dari id //toggle akan melakukan add dan remove
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//tutup navbar saat klik diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


// darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// memposisikan toggle sesuai mode di localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}