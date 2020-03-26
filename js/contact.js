const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {

  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName;

  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName;

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const emailValue = email.value;

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;

  //Display message depending on input content
  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkInputLength(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  //Check if emailValue is valid
  function validateEmail(email) {
    const regEx = /\S+@+\.\S+/;
    return regEx.test(email);
  }

  if (validateEmail(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.sttyle.display = "block";
  }

  //Check if message contains more than 9 characters
  if (messageValue.length > 9) {
    messageError.style.display = "none";
  } else {
    messageError.style.display ="block";
  }

  // Check if input contains any characters
  function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}


//Dislpay email sent or emailError message

/*if (validateForm === true) {
  console.log("Mail sent");
} else {
  console.log("There was an error. Please check the form.");
}*/
