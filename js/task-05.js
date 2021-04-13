
let inputNameEl = document.getElementById('name-input');
let greetingEl = document.getElementById('name-output');

inputNameEl.oninput = function () {
    if (inputNameEl.value === '') {
       greetingEl.innerHTML = 'незнакомец';
    } else{
    greetingEl.innerHTML = inputNameEl.value;
    }
}