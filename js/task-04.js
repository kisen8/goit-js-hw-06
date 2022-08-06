let counterValue = 0;

const counter = document.querySelector("#value");

const btnRemove = document.querySelector('[data-action="decrement"]');
const btnAdd = document.querySelector('[data-action="increment"]');

btnRemove.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
  console.log(counterValue);
});

btnAdd.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
  console.log(counterValue);
});
