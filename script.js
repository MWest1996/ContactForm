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
let confirmation = document.getElementById("confirmation")

let validateFname = () => {
    let value = fname.value.trim();
    if (value < 1){
        fnameErr.textContent = "Please enter a valid name";
        fnameErr.style.display = "block";
        fname.style.borderColor = "hsl(0,66%,54%)";
        return false
    } else {
        fnameErr.textContent = "";
        fnameErr.style.display = "none";
        fname.style.borderColor = "black"
        return true
    }
}

let validateLname = () => {
    let value = lname.value.trim();
    if (value < 1){
        lnameErr.textContent = "Please enter a valid name";
        lnameErr.style.display = "block";
        lname.style.borderColor = "hsl(0,66%,54%)";
        return false
    } else {
        lnameErr.textContent = "";
        lnameErr.style.display = "none";
        lname.style.borderColor = "black"
        return true
    }
}

let validateEmail = () => {
    let value = email.value.trim();
    if (value < 1) {
        emailErr.textContent = "Please enter a valid email address";
        emailErr.style.display = "block";
        email.style.borderColor = "hsl(0,66%,54%)"
        return false
    } else {
        emailErr.textContent = "";
        emailErr.style.display = "none";
        email.style.borderColor = "black"
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
        message.style.borderColor = "hsl(0,66%,54%)"
        return false
    } else {
        messageErr.textContent = "";
        messageErr.style.display = "none";
        message.style.borderColor = "black"
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
        alert("Thanks for complete the form. We'll be in touch soon!");
    } 
})
//     fnameErr.textContent = "";
//     lnameErr.textContent = "";
//     emailErr.textContent = "";
//     queryErr.textContent = "";
//     consentErr.textContent = "";
//     messageErr.textContent = "";

//     if (fname.value.trim() === "") {
//         fnameErr.textContent = "This field is required";
//         isValid = false;
//     }

//     if (lname.value.trim() === "") {
//         lnameErr.textConent = "This field is required";
//         isValid = false;
//     }

//     if (email.value.trim() === "" || !email.value.includes("@") || !email.value.includes(".")) {
//         emailErr.textConent = "Please enter a valid email address";
//         isValid = false;
//     }

//     if (!isChecked) {
//         consentErr.textContent = "To submit this form, please consent to being contacted";
//         isValid = false;
//     }

//     if (isValid) {
//         confirmation.textContent = "Message Sent! Thanks for the completing the form. We'll be in touch soon!";
//         form.reset();
//     }
// });