// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });

    // Loop through all sections to add or remove the 'show-animate' class
    sections.forEach(section => {
        if (section.getAttribute('id') === currentSection) {
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });

    // ... Rest of your code ...

    // animation footer on scroll
    let footer = document.querySelector('');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
