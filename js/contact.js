const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {

    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");


    //Display message depending on input content

    if (checkInputLength(firstName)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkInputLength(lastName)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (checkInputLength(email)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }


    //Check if emailValue is valid

    if (validateEmail(email)) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }

    if (checkInputLength(message, 10)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    function validateEmail(email) {
        const value = email.value;
        const regEx = /\S+@\S+\.\S+/;

        return regEx.test(value);
    }


    // Check if input contains any characters

    function checkInputLength(element, minValue = 0) {
        const value = element.value;
        const trimmedValue = value.trim();

        if (trimmedValue.length > minValue) {
            return true;
        } else {
            return false;
        }
    }

    const textContainer = document.querySelector("h1");

    html = "";

    html += `<h1>Contact</h1>
    <p>Form is sent!</p>`

    textContainer.innerHTML = html;

    form.style.display = "none";
}
