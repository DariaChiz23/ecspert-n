const header = document.querySelector('header');
const consultationBtn = document.getElementById('consultationBtn');
const modal = document.getElementById('consultationModal');
const closeBtn = document.querySelector('.close');
let lastScrollY = window.scrollY;


function handleScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.feature-card').forEach((card) => {
    observer.observe(card);
});

window.addEventListener('scroll', handleScroll);


if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (modal) {
            modal.style.display = "none";
        }
    });
}


if (modal) {
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

if (consultationBtn) {
    consultationBtn.addEventListener('click', () => {
        if (modal) {
            modal.style.display = "block";
        }
    });
}

const aboutCompanyLink = document.querySelector('.footer-about h3.show-details');
const companyDetails = document.querySelector('.footer .company-details');

if (aboutCompanyLink && companyDetails) {
    aboutCompanyLink.addEventListener('click', () => {
        companyDetails.classList.toggle('hidden');
        aboutCompanyLink.classList.toggle('active');
    });
}