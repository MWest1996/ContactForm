document.addEventListener("DOMContentLoaded", function () {
  // Place your code here
});

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let genQuery = document.getElementById("general");
let supQuery = document.getElementById("support");
let message = document.getElementById("question");
let consent = document.getElementById("consent");
let submit = document.getElementById("submit");
let fnameErr = document.getElementById("fnameWarning");
let lnameErr = document.getElementById("lnameWarning");
let emailErr = document.getElementById("emailWarning");
let queryErr = document.getElementById("queryWarning")
let consentErr = document.getElementById("consentWarning");
let messageErr = document.getElementById("messageWarning");

const isChecked = consent.checked

fnameErr.textContent = "";
lnameErr.textContent = "";
emailErr.textContent = "";
queryErr.textContent = "";
consentErr.textContent = "";
messageErr.textContent = "";

let isValid = true;

if (fname === "") {
    fnameErr.textContent = "This field is required";
    isValid = false;
}

if (lname === "") {
    lnameErr.textConent = "This field is required";
    isValid = false;
}

if (email === "" || !email.value.includes("@") || !email.value.includes(".")) {
    emailErr.textConent = "Please enter a valid email address";
    isValid = false;
}

if (!isChecked) {
    consentErr.textContent = "To submit this form, please consent to being contacted";
    isValid = false;
}