const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const onInputChange = () => {
  spanText.style.fontSize = `${input.value}px`;
  console.log(spanText.style.fontSize);
};

input.addEventListener("input", onInputChange);
