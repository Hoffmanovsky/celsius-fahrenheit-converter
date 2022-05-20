const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

// T(*F) = T(*C) x 1.8 + 32
// T(*C) = (T(*F) - 32) / 1.8

console.log(converter.value);

const swap = () => {
  if (one.textContent == '°C' && two.textContent == '°F') {
    one.textContent = '°F';
    two.textContent = '°C';
    reset();
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
    reset();
  }
};

const reset = () => {
  converter.value = '';
  result.textContent = '';
};

const celsiusToFahrenheit = celsius => {
  let grades;
  celsius = converter.value;
  grades = celsius * 1.8 + 32;
  result.textContent = `${converter.value} °C = ${grades.toFixed(1)} °F`;
};

const fahrenheitToCelsius = fahrenheit => {
  let grades;
  fahrenheit = converter.value;
  grades = (fahrenheit - 32) / 1.8;
  result.textContent = `${converter.value} °F = ${grades.toFixed(1)} °C`;
};

const convertTemp = () => {
  if (converter.value !== '') {
    if (one.textContent === '°C') {
      celsiusToFahrenheit();
    } else {
      fahrenheitToCelsius();
    }
  } else {
    result.textContent = 'Wpisz poprawną liczbę stopni!';
  }
};

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', convertTemp);
resetBtn.addEventListener('click', reset);
