const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('change', el => {
    if (el.target.value.length === +inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});