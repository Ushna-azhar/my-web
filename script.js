const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');
const closeBtn = document.getElementById('close-btn');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the active class
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active'); // Remove the active class to close the nav
    });
}