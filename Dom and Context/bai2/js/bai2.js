var username = $("#username");
var password = $("#password");
$("#btn-login").on('click', function() {
    
    //validate
    if (!username.val()) {
        username.focus();
        return alert("!!! Please fill out");
    }
    if (!password.val()) {
        password.focus();
        return alert("!!! Please fill out");
    }
    if (password.val().length < 8) {
        password.focus();
        return alert("!!! Must more 8 letters");
    }

    alert("welcome back " + username.val());
})
console.log(username);