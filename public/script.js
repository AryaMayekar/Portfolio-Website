// public/script.js

window.numberonly = function(input) {
    var num = /[^0-9]/gi;
    input.value = input.value.replace(num, "");

    var number = document.getElementById("number").value;
    var number_text = document.getElementById("verify_number");
    var numlength = number.length;
    let a = 10;

    if (numlength !== a && numlength !== 0) {
        number_text.innerHTML = "Please Enter 10 digit Phone-Number";
        number_text.style.color = "#ff0000";
    } else {
        number_text.innerHTML = "Valid 10 digit Phone-Number";
        number_text.style.color = "#00ff00";
    }

    if (number === "") {
        number_text.innerHTML = "";
    }
}

window.alphabetonly = function(input) {
    var alpha = /[^a-zA-Z]/gi;
    input.value = input.value.replace(alpha, "");
}

window.verifyemail = function() {
    var email = document.getElementById("email").value;
    var text = document.getElementById("verify_email");
    var pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email.match(pattern)) {
        text.innerHTML = "Your Email Address is valid";
        text.style.color = "#00ff00";
    } else {
        text.innerHTML = "Please enter valid Email Address";
        text.style.color = "#ff0000";
    }

    if (email === "") {
        text.innerHTML = "";
    }
}
