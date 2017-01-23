function formValidate() {
    var userName = document.forms["registration"]["user_name"].value;
    var userEmail = document.forms["registration"]["user_email"].value;
    var userPass = document.forms["registration"]["user_password"].value;
    var userPassAgain = document.forms["registration"]["user_password_again"].value;
    var userTel = document.forms["registration"]["user_tel"].value;
    var userSite = document.forms["registration"]["user_site"].value;

    var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var telRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var siteRegExp = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

    if (userName == null || userName == "") {
        alert("Name field must be filled out");
        return false;
    }

    if (userEmail == null || userEmail == "") {
        alert("Email field must be filled out");
        return false;
    }

    if (emailRegExp.test(userEmail) == false) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (userPass == null || userPass == "") {
        alert("Password field must be filled out");
        return false;
    }

    if (userPassAgain == null || userPassAgain == "") {
        alert("Confirm Password field must be filled out");
        return false;
    }

    if (userPass != userPassAgain) {
        alert("Passwords do not match!");
        return false;
    }

    if (userTel == "" || userTel == null) {
        return true;
    }

    if (telRegExp.test(userTel) == false) {
        alert('The Telephone format is incorrect.');
        return false;
    }

    if (userSite == "" || userSite == null) {
        return true;
    }

    if (siteRegExp.test(userSite) == false) {
        alert('The website format is incorrect.');
        return false;
    }
}