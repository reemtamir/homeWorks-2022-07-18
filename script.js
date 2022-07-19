'use script';
const grid = document.createElement('div');
grid.classList.add('row');
document.body.appendChild(grid);

let bgColor = document.getElementById('color');
bgColor.value = '#FFB4B4';
function showCard() {
  let nameInput = document.getElementById('name');
  let nameValue = nameInput.value;
  let ageInput = document.getElementById('age');
  let ageValue = ageInput.value;
  let countryInput = document.getElementById('country');
  let countryValue = countryInput.value;
  let firstGenderInput = document.getElementById('male');
  let gender = document.querySelectorAll('.gender');
  for (let i = 0; i < gender.length; i++) {
    let choseGender = gender[i];
    if (choseGender.checked === true) gender = choseGender.value;
  }

  if (nameValue.length < 2 || nameValue === '' || Number(ageValue) < 1) {
    alert('Enter valid name or number');
    nameInput.value = '';
    ageInput.value = '';
    countryInput.value = '';
    firstGenderInput.checked = true;
    bgColor.value = '#FFB4B4';
    return;
  }

  const elCard = document.createElement('div');
  grid.appendChild(elCard);

  elCard.classList.add(...['card', 'm-auto', 'col', 'col-4']);
  elCard.style.height = 170 + 'px';
  elCard.innerHTML = `
      <ul class='list-group list-group-flush   '>
        <li class='list-group-item card-name w-75  text-center m-auto d-flex flex-column'>${
          nameValue[0].toUpperCase() + nameValue.slice(1).toLowerCase()
        }</li>
        <li class='list-group-item w-75 card-age text-center m-auto'>${ageValue}</li>
        <li class='list-group-item w-75 card-country text-center m-auto'>${countryValue}</li>
        <li class='list-group-item w-75 card-gender text-center m-auto'>${gender}</li>
      </ul>
      `;

  elCard.style.backgroundColor = bgColor.value;
  nameInput.value = '';
  ageInput.value = '';
  countryInput.value = '';
  firstGenderInput.checked = true;
  bgColor.value = '#FFB4B4';
}
