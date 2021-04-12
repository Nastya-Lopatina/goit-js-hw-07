
let inputNameEl = document.querySelector('#name-input');
let greetingEl = document.querySelector('#name-output');

inputNameEl.oninput = function () {
    if (inputNameEl.value === '') {
       greetingEl.innerHTML = 'незнакомец';
    } else{
    greetingEl.innerHTML = inputNameEl.value;
    }
}