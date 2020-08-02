const toggle = document.getElementById('toggle');
const closed = document.getElementById('close');
const opened = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

// Show modal
opened.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

// Hide modal
closed.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);
