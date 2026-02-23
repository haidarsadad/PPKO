// navbar effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.style.background = window.scrollY > 50 ? '#000' : 'rgba(0,0,0,.3)';
});

// detail product tabs
function openDetailTab(id, el) {
    document.querySelectorAll('.detail-content').forEach(c => {
        c.classList.remove('active');
    });

    document.querySelectorAll('.detail-tab').forEach(b => {
        b.classList.remove('active');
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }

    el.classList.add('active');
}