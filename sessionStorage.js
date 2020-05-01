const input = document.querySelector('#name');
const form = document.querySelector('form');
const submit = document.querySelector('#submitName');
const remove = document.querySelector('#removeName');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

submit.addEventListener('click', () => {
    sessionStorage.setItem('name', input.value);
});

remove.addEventListener('click', () => {
    sessionStorage.removeItem('name');
});

const name = sessionStorage.getItem('name');

const h3 = document.querySelector('#title');

name ? h3.textContent = `Welcome ${name}` : h3.textContent = 'No data to use';
