const modal = document.getElementById('authModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubmit = document.getElementById('modalSubmit');
const modalClose = document.getElementById('modalClose');

const loginBtn = document.querySelector('.buttons .button');
const signupBtn = document.querySelector('.buttons .primary');

loginBtn.addEventListener('click', () => openModal('Login'));
signupBtn.addEventListener('click', () => openModal('Sign Up'));

function openModal(mode) {
    modalTitle.textContent = mode;
    modalSubmit.textContent = mode;
    modal.classList.add('active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`${modalTitle.textContent} submitted (connect this to your backend).`);
    modal.classList.remove('active');
});

document.getElementById('year').textContent = new Date().getFullYear();