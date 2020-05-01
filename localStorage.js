localStorage.setItem('name', 'John kibaba');
localStorage.setItem('names', 'Wekunda kibaba');

localStorage.removeItem('names');

const name = localStorage.getItem('name');

const h3 = document.querySelector('#title');

name ? h3.textContent = `Welcome ${name}` : h3.textContent = 'No data to use';
