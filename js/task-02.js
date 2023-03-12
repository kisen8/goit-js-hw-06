const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
console.log(list);
const liArray = [];
console.log(liArray);
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  liArray.push(item);
});
console.log(liArray);

list.append(...liArray);
console.log(list);

// вариант 2:..............................................
// const list = document.querySelector("#ingredients");
// const items = ingredients.map((ingr) => {
//   const item = document.createElement("li");
//   item.classList.add("item");
//   item.textContent = ingr;
//   item.style.listStyle = Number(ingr);
//   return item;
// });
// list.append(...items);
