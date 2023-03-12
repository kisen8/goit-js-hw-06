// let counterValue = 0;

// const counter = document.querySelector("#value");

// const btnRemove = document.querySelector('[data-action="decrement"]');
// const btnAdd = document.querySelector('[data-action="increment"]');

// btnRemove.addEventListener("click", () => {
//   counterValue--;
//   counter.textContent = counterValue;
//   console.log(counterValue);
// });

// btnAdd.addEventListener("click", () => {
//   counterValue++;
//   counter.textContent = counterValue;
//   console.log(counterValue);
// });
let counterValue = 0;
const value = document.querySelector("#value");
const btnPlus = document.querySelector('[data-action="increment"]');
const btnMin = document.querySelector('[data-action="decrement"]');

btnPlus.addEventListener("click", onPlusClick);
btnMin.addEventListener("click", onMinClick);
function onPlusClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
function onMinClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
btnPlus.style.color = "red";
btnPlus.style.backgroundColor = "yellow";
btnPlus.style.borderRadius = "50%";

btnMin.style.color = "red";
btnMin.style.backgroundColor = "yellow";
btnMin.style.borderRadius = "50%";

value.style.fontSize = "30px";
value.style.alignItem = "center";
value.style.color = "blue";
