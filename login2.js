var submit = document.getElementById("submit");

var username = ["Nanna", "Mathilde", "Nathalie"];

var password = ["ost", "margarita", "spegepølse"];

submit.onclick = function() {
    var pass = document.getElementById('password').value;
    var user = document.getElementById('username').value;

    for (var i = 0; i < username.length; i++) {

        if((user == username[i]) && (pass == password[i])) {
            document.getElementById("loginResult").textContent = "Username and password correct";
            return true;
        }
        else {
            document.getElementById("loginResult").textContent = "Login denied";
        }
    }
}; 
