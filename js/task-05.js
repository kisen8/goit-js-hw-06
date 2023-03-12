// const textInput = document.querySelector("#name-input");

// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;

//   if (event.currentTarget.value === "") {
//     output.textContent = "Anonymous";
//   }
// });
const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
  outputText.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    outputText.textContent = "Blablabla";
  }
});
