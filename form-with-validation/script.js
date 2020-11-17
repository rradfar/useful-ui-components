const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.getElementById('error');

form.addEventListener('submit', e => {
  let messages = [];

  if (name.value === '' || name.value == null) {
    messages.push('Name is required');
  }

  if(password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});

