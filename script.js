document.addEventListener("DOMContentLoaded", function () {
  // Place your code here
});

//Form Vars
let form = document.getElementById("form")
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let genQuery = document.getElementById("general");
let supQuery = document.getElementById("support");
let message = document.getElementById("question");
let consent = document.getElementById("consent");
let submit = document.getElementById("submit");

//Error Vars
let fnameErr = document.getElementById("fnameWarning");
let lnameErr = document.getElementById("lnameWarning");
let emailErr = document.getElementById("emailWarning");
let queryErr = document.getElementById("queryWarning")
let consentErr = document.getElementById("consentWarning");
let messageErr = document.getElementById("messageWarning");
let confirmation = document.getElementById("confirmation");

let validateFname = () => {
    let value = fname.value.trim();
    if (value < 1){
        fnameErr.textContent = "Please enter a valid name";
        fnameErr.style.display = "block";
        fname.classList.add('invalid');
        return false
    } else {
        fnameErr.textContent = "";
        fnameErr.style.display = "none";
        fname.classList.remove('invalid')
        return true
    }
}

let validateLname = () => {
    let value = lname.value.trim();
    if (value < 1){
        lnameErr.textContent = "Please enter a valid name";
        lnameErr.style.display = "block";
        lname.classList.add('invalid');
        return false
    } else {
        lnameErr.textContent = "";
        lnameErr.style.display = "none";
        lname.classList.remove('invalid');
        return true
    }
}

let validateEmail = () => {
    let value = email.value.trim();
    if (value < 1) {
        emailErr.textContent = "Please enter a valid email address";
        emailErr.style.display = "block";
        email.classList.add('invalid');
        return false
    } else {
        emailErr.textContent = "";
        emailErr.style.display = "none";
        email.classList.remove('invalid');
        return true
    }
}

let validateConsent = () => {
    // let value = consent.checked();
    if (!consent.checked) {
        consentErr.textContent = "To submit this form, please consent to being contacted";
        consentErr.style.display = "block";
        return false
    } else {
        consentErr.textContent = "";
        consentErr.style.display = "none";
        return true
    }
}

let validateQuery = () => {
    // let value = consent.checked();
    if (!genQuery.checked && !supQuery.checked) {
        queryErr.textContent = "Please select a query type";
        queryErr.style.display = "block";
        return false
    } else {
        queryErr.textContent = "";
        queryErr.style.display = "none";
        return true
    }
}

let validateMessage = () => {
    let value = message.value.trim();
    if (value < 1) {
        messageErr.textContent = "This field is required";
        messageErr.style.display = "block";
        message.classList.add('invalid');
        return false
    } else {
        messageErr.textContent = "";
        messageErr.style.display = "none";
        message.classList.remove('invalid');
        return true
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let fnameValid = validateFname();
    let lnameValid = validateLname();
    let emailValid = validateEmail();
    let consentValid = validateConsent();
    let messageValid = validateMessage();
    let queryValid = validateQuery();

    if (fnameValid && lnameValid && emailValid && consentValid && messageValid && queryValid) {
        alert("Thanks for completing the form. We'll be in touch soon!");
    } 
})