// const input = document.querySelector("#font-size-control");
// const spanText = document.querySelector("#text");

// const onInputChange = () => {
//   spanText.style.fontSize = `${input.value}px`;
//   console.log(spanText.style.fontSize);
// };

// input.addEventListener("input", onInputChange);
const scroller = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
scroller.addEventListener("input", onScroll);
function onScroll() {
  text.style.fontSize = `${scroller.value}px`;
}
