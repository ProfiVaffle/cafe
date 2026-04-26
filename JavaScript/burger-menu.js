/**
 * Burger Menu Toggle
 * Управляет відкриванням/закриванням мобільного меню
 */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    if (!hamburger || !nav) {
        console.error('Hamburger or nav element not found');
        return;
    }
    
    /**
     * Відкриває/закриває меню при кліці на гамбургер
     */
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    /**
     * Закриває меню при кліці на посилання в навігації
     */
    const navLinks = nav.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    /**
     * Закриває меню при кліці за межами
     */
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickInsideHamburger && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
    
    /**
     * Закриває меню при зміні розміру вікна (для переходу з мобільної на планшет/десктоп)
     */
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});
