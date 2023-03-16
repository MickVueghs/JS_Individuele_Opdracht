const voornaam = document.getElementById("voornaam");
const naam = document.getElementById("naam");
const gebruikersnaam = document.getElementById("gebruikersnaam");
const email = document.getElementById("email");
const wachtwoord = document.getElementById("wachtwoord");
const herhaalWachtwoord = document.getElementById("herhaalWachtwoord");
const adres = document.getElementById("adres");
const land = document.getElementById("land");
const provincie = document.getElementById("provincie");
const postcode = document.getElementById("postcode");
const nieuwsbrief = document.getElementById("nieuwsbrief");
const algemeneVoorwaarden = document.getElementById("algemeneVoorwaarden");
const bankingApp = document.getElementById("bankingApp");
const overschrijving = document.getElementById("overschrijving");
const visaCard = document.getElementById("visaCard");
const paypal = document.getElementById("paypal");
const button = document.getElementById("button");
const error = document.getElementById("errors");
var errors = [];

button.addEventListener("click", validateForm);

function validateForm() {
    function checkEmptyField() {
        if (voornaam.value.trim() === "") {
            errors.push("Het veld voornaam is vereist!");
        };
        if (naam.value.trim() === "") {
            errors.push("Het veld naam is vereist!");
        };
        if (gebruikersnaam.value.trim() === "") {
            errors.push("Het veld gebruikersnaam is vereist!");
        };

        if (email.value.trim() === "") {
            errors.push("Het veld email is vereist!");
        };

        if (wachtwoord.value.trim() === "") {
            errors.push("Het veld wachtwoord is vereist!");
        };
        
        if (herhaalWachtwoord.value.trim() === "") {
            errors.push("Het veld herhaal wachtwoord is vereist!");
        };

        if (adres.value.trim() === "") {
            errors.push("Het veld adres is vereist!");
        };

        provincieValue = provincie.value;
        if (provincieValue == 0) {
            errors.push("Het veld provincie is vereist!");
        };

        if (postcode.value.trim() === "") {
            errors.push("Het veld postcode is vereist!");
        };
        
        if (errors.length > 0) {
            document.getElementById("errors").style.display= "block";
            error.innerHTML = "<h4>Yikes, errors...</h4>" + errors.join("<br>");
        };
    }
    checkEmptyField();

    function validateEmail(emailadres) {
        //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
        //https://www.google.com/search?q=js+validate+email+address ==> grepper
        //https://www.w3schools.blog/email-validation-javascript-js
        //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
        emailadres = email;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (emailadres.value.match(validRegex)) {
      
          alert("Valid email address!");
          return true;
        } else {
          alert("Invalid email address!");
          errors.push("E-mailadres is niet correct!");
          return false;
      
        }
      }
      validateEmail(emailadres);

    function validatePassword() {
    }
    validatePassword();
}