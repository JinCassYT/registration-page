const form = document.getElementById("form");
const formName = document.getElementById("formName");
const formEmail = document.getElementById("formEmail");
const userName = document.getElementById("userName");
const formPassword = document.getElementById("formPassword");
const formPasswordC = document.getElementById("formPasswordC");

confirmbutton.addEventListener("click", (event) => {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  const formNamevalue = formName.value;
  console.log(formNamevalue);

  const formEmailvalue = formEmail.value;
  console.log(formEmailvalue);

  const userNamevalue = userName.value;
  console.log(userNamevalue);

  const formPasswordvalue = formPassword.value;
  console.log(formPassword);

  const formPasswordCvalue = formPasswordC.value;
  console.log(formPasswordCvalue);
}
