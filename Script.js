console.log('Script loaded');

function closeNavbarDropdown() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show'))
        navbarToggler.click();
}
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', closeNavbarDropdown);
});
