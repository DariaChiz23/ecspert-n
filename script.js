const header = document.querySelector('header');
let lastScrollY = window.scrollY;
let isScrolling = false;

function handleScroll() {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            lastScrollY = currentScrollY;
            isScrolling = false;
        }, 100);
    }
}

window.addEventListener('scroll', handleScroll);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
});

document.querySelectorAll('.feature-card').forEach((card) => observer.observe(card));

const consultationBtn = document.querySelector('#consultationBtn');
const modal = document.querySelector('#consultationModal');
const closeBtn = document.querySelector('.close');

if (modal) {
    window.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('close')) {
            modal.classList.remove('modal-open');
            document.body.style.overflow = '';
        }
    });

    consultationBtn?.addEventListener('click', () => {
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
    });
}

const aboutCompanyLink = document.querySelector('.footer-about h3.show-details');
const companyDetails = document.querySelector('.footer .company-details');

if (aboutCompanyLink && companyDetails) {
    aboutCompanyLink.addEventListener('click', () => {
        const isHidden = companyDetails.classList.toggle('hidden');
        aboutCompanyLink.classList.toggle('active', !isHidden);
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('active');
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});