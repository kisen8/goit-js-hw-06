// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("All fields must be filled!!!");
//   }

//   const userInfo = { email: email.value, password: password.value };
//   console.log(userInfo);
//   event.currentTarget.reset();
// }
const form = document.querySelector(".login-form");
form.addEventListener("submit", onSub);

function onSub(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("What is this???)");
  }

  const user = {
    mail: email.value,
    pass: password.value,
  };
  console.log(user);
  e.currentTarget.reset();
}
