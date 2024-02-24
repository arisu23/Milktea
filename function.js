function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace these values with your actual username and password
    var correctUsername = "yourUsername";
    var correctPassword = "yourPassword";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'milktea.html';
    } else {
       window.alert('Incorrect username or password.Please try again.');
       clearForm();
    }
}
function clearForm() {
    var form = document.getElementById('login-form');
    var inputs = form.getElementsByTagName('input');
    
    for (var i=0; i <inputs.length; i++){
        inputs[i].value = '';
    }
}