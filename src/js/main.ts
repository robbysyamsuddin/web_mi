// ==========================================
// CUSTOM TYPESCRIPT FOR LANDING PAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Active Navbar Highlight on Scroll
    const sections = document.querySelectorAll<HTMLElement>('section, header');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        // Menggunakan window.scrollY sebagai pengganti pageYOffset yang modern & standar TS
        const scrollPosition = window.scrollY; 

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= (sectionTop - 120)) {
                current = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove('active');
            const hrefAttribute = link.getAttribute('href');
            if (hrefAttribute) {
                const href = hrefAttribute.substring(1);
                if (href === current || (current === '' && href === '')) {
                    link.classList.add('active');
                }
            }
        });
    });

    // 2. Smooth Close Navbar Mobile after Click
    const navbarToggler = document.querySelector<HTMLButtonElement>('.navbar-toggler');
    const navbarCollapse = document.querySelector<HTMLDivElement>('.navbar-collapse');
    const navItems = document.querySelectorAll<HTMLElement>('.navbar-nav .nav-link, .navbar-nav .btn-ppdb');

    // Menambahkan pengecekan (Optional Chaining / If) agar TS tahu elemen tersebut ada dan bukan null
    if (navbarToggler && navbarCollapse) {
        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
    }
});