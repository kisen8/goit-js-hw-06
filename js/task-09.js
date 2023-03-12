function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// // const body = document.querySelector("body");
// // const buttonEl = document.querySelector(".change-color");
// // const colorValue = document.querySelector(".color");

// // buttonEl.addEventListener("click", (event) => {
// //   let color = getRandomHexColor();

// //   body.style.backgroundColor = color;
// //   colorValue.textContent = color;

// //   console.log(`Background color is: ${color}`);
// // });
// // -------------------------------------------
// // const body = document.querySelector("body");
// // const btn = document.querySelector(".change-color");
// // const colorValue = document.querySelector(".color");

// // btn.addEventListener("click", onBtn);
// // function onBtn() {
// //   let color = getRandomHexColor();
// //   body.style.backgroundColor = color;
// //   colorValue.textContent = color;
// // }
const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

btn.addEventListener("click", onBtnClick);
function onBtnClick() {
  const fone = getRandomHexColor();
  body.style.backgroundColor = fone;
  colorName.textContent = fone;
}
