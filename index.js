button.addEventListener("click", validateForm);

let errors = [];
const error = document.getElementById("errors");
const geregistreerd = document.getElementById("geregistreerd");
const betalingswijze = document.getElementById("betalingswijze");

error.style.display = "none";
geregistreerd.style.display = "none";
betalingswijze.style.display = "none";

function validateForm() {

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
    const betaling = document.getElementById("betaling");
    
    checkEmptyField();

    if (gebruikersnaam.value.trim() != "") {
        validateUsername();
    };

    if (wachtwoord.value.trim() != "") {
        validatePassword();
    };

    if (herhaalWachtwoord.value.trim() != "") {
        validatePassword2();
    };

    if (email.value.trim() != "") {
        validateEmail(email);
    };

    validatePayment();

    if (postcode.value.trim() != "") {
        checkPC(postcode);
    };

    if (errors.length > 0) {
        document.getElementById("errors").style.display= "block";
        error.innerHTML = "<h4>Yikes, errors...</h4>" + errors.join("<br>");
    } else {
        document.getElementById("errors").style.display= "none";
        geregistreerd.style.display = "block";
        betalingswijze.style.display = "block";
    };
}

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

    landValue = land.value;
    if(landValue == 0) {
        errors.push("Het veld land is vereist!");
    };

    provincieValue = provincie.value;
    if (provincieValue == 0) {
        errors.push("Het veld provincie is vereist!");
    };

    if (postcode.value.trim() === "") {
        errors.push("Het veld postcode is vereist!");
    };

    if(algemeneVoorwaarden.checked == true) {   
        return true;  
    } else {
        errors.push("Je moet de algemene voorwaarden accepteren!");
        return false;
    };
}

function validateEmail(emailadres) {
    //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    //https://www.google.com/search?q=js+validate+email+address ==> grepper
    //https://www.w3schools.blog/email-validation-javascript-js
    //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (emailadres.value.match(validRegex)) {
      return true;
    } else {
      errors.push("E-mailadres is niet correct!");
      return false;
    }
}

function validatePassword() {
    //https://www.w3resource.com/javascript/form/password-validation.php
    var password=  /^[A-Za-z]\w{7,14}$/;

    if (wachtwoord.value.match(password)) { 
        return true;
    } else { 
        errors.push("Het wachtwoord is te kort!");
        return false;
    };
}

function validatePassword2() {

    if (wachtwoord.value === herhaalWachtwoord.value) {
        return true;
    } else {
        errors.push("De wachtwoorden zijn niet gelijk!");
        return false;
    };
}

function validateUsername() {
    //https://www.w3resource.com/javascript/form/password-validation.php
    var username =  /^[A-Za-z]\w{1,14}$/;

    if (gebruikersnaam.value.match(username)) { 
        return true;
    } else { 
        errors.push("De gebruikersnaam is te kort of bevat een punt/koppelteken als eerste character!");
        return false;
    };
}

function validatePayment() {
    //https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript

    if(bankingApp.checked == true) {   
        betaling.innerHTML = "Je betalingswijze is " + bankingApp.value + ".";   
    };

    if(overschrijving.checked == true) {   
        betaling.innerHTML = "Je betalingswijze is " + overschrijving.value + ".";   
    };

    if(visaCard.checked == true) {   
        betaling.innerHTML = "Je betalingswijze is " + visaCard.value + ".";   
    };

    if(paypal.checked == true) {   
        betaling.innerHTML = "Je betalingswijze is " + paypal.value + ".";   
    };
}

function checkPC(veld) {
    //https://stackoverflow.com/questions/17898523/regular-expression-for-dutch-zip-postal-code

    var regex = /^[1-9][0-9]{3}/i;

    if (veld.value.match(regex)) {
        return true;
      } else {
        errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
        return false;
      }
}
