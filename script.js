'use strict';
const container = document.querySelector('.container');
console.log(container);
const grid = document.createElement('div');
grid.classList.add('row');
container.appendChild(grid);
let bgColor = document.getElementById('color');
bgColor.value = '#FFB4B4';
let firstGenderInput = document.getElementById('male');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let countryInput = document.getElementById('country');

function showCard() {
  let gender = document.querySelectorAll('.gender');
  for (let i = 0; i < gender.length; i++) {
    let choseGender = gender[i];
    if (choseGender.checked === true) gender = choseGender.value;
  }

  if (
    nameInput.value.length < 2 ||
    nameInput.value === '' ||
    Number(ageInput.value) < 1
  ) {
    alert('Enter valid name or number');
    reset();
    return;
  }

  const elCard = document.createElement('div');
  grid.appendChild(elCard);
  elCard.classList.add(...['card', 'm-auto', 'col', 'col-4']);
  elCard.style.height = 170 + 'px';
  elCard.innerHTML = `
      <ul class='list-group list-group-flush   '>
        <li class='list-group-item card-name w-75  text-center m-auto d-flex flex-column'>${
          nameInput.value[0].toUpperCase() +
          nameInput.value.slice(1).toLowerCase()
        }</li>
        <li class='list-group-item w-75 card-age text-center m-auto'>${
          ageInput.value
        }</li>
        <li class='list-group-item w-75 card-country text-center m-auto'>${
          countryInput.value
        }</li>
        <li class='list-group-item w-75 card-gender text-center m-auto'>${gender}</li>
      </ul>
      `;

  elCard.style.backgroundColor = bgColor.value;
  reset();
}
function reset() {
  nameInput.value = '';
  ageInput.value = '';
  countryInput.value = '';
  firstGenderInput.checked = true;
  countryInput.value = 'Israel';
  bgColor.value = '#FFB4B4';
}
