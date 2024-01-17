"use strict";
$(document).ready(() => {

    // move focus to first text box
    $("#first_name").focus();

    $("#datepicker").datepicker({
        minDate: new Date(),
        showButtonPanel: true
    });


    // the handler for the click event of the submit button
    $("#member_form").submit(event => {
        let isValid = true;

        // validate the first name entry
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);

        // validate the phone number with a regular expression
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phone").val().trim();
        if (phone == "") {
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);

        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);

        // validate the password entry
        const password = $("#password").val().trim();
        if (password.length < 8) {
            $("#password").next().text("Must be 8 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        $("#password").val(password);

        // validate the verify entry
        const verify = $("#verify").val().trim();
        if (verify == "") {
            $("#verify").next().text("This field is required.");
            isValid = false;
        } else if (verify !== password) {
            $("#verify").next().text("Must match first password entry.");
            isValid = false;
        } else {
            $("#verify").next().text("");
        }
        $("#verify").val(verify);

        // validate the cardName
        const cardName = $("#cardName").val().trim();
        if (cardName == "") {
            $("#cardName").next().text("This field is required.");
            isValid = false;
        } else {
            $("#cardName").next().text("");
        }
        $("#cardName").val(cardName);

        // validate the card number
        const cardNumberPattern = /^\d{16}$/;
        const cardNumber = $("#cardNumber").val().trim();
        if (cardNumber == "") {
            $("#cardNumber").next().text("This field is required.");
            isValid = false;
        } else if (!cardNumberPattern.test(cardNumber)) {
            $("#cardNumber").next().text("Invalid card number. Please enter a 16-digit number.");
            isValid = false;
        } else {
            $("#cardNumber").next().text("");
        }
        $("#cardNumber").val(cardNumber);

        // validate the expiry date
        const expiryDatePattern = /^\d{2}\/\d{2}$/;
        const expiryDate = $("#expiryDate").val().trim();
        if (expiryDate == "") {
            $("#expiryDate").next().text("This field is required.");
            isValid = false;
        } else if (!expiryDatePattern.test(expiryDate)) {
            $("#expiryDate").next().text("Please enter in MM/YY format.");
            isValid = false;
        } else {
            $("#expiryDate").next().text("");
        }
        $("#expiryDate").val(expiryDate);

        // validate the cvv
        const cvvPattern = /^\d{3}$/;
        const cvv = $("#cvv").val().trim();
        if (cvv == "") {
            $("#cvv").next().text("This field is required.");
            isValid = false;
        } else if (!cvvPattern.test(cvv)) {
            $("#cvv").next().text("Invalid CVV. Please enter a 3-digit number.");
            isValid = false;
        } else {
            $("#cvv").next().text("");
        }
        $("#cvv").val(cvv);


        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();
        }
    });

});