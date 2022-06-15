const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phonenumber = document.getElementById("phonenumber")
const password = document.getElementById("password")
const password1 = document.getElementById("password1")


form.addEventListener('submit', (event) => {

    event.preventDefault();
    validate();

})

// EMAIL
function isemail(emailval) {
    var atsymbol = emailval.indexOf("@");
    if (atsymbol < 1) { return false }

    var dotsymbol = emailval.lastIndexOf(".");
    if (dotsymbol <= atsymbol + 3) { return false }
    if (dotsymbol === emailval.length - 1) { return false }
    return true;
}

// PASSWORD
function passwordcheck(passwordval) {
    
     var regex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{7,}$/

    var pass = passwordval.value;

    if (regex.test(pass)) {
        return true;

    }

    else {
        return false;
    }

}



function seterrormsg(input, errormsg) {
    const fieldpadding = input.parentElement;
    fieldpadding.className = "field-padding error"
    const error = fieldpadding.querySelector('small')
    error.innerText = errormsg;

}

function setsuccessmsg(input) {
    const fieldpadding = input.parentElement;
    fieldpadding.className = "field-padding success"
}


function validate() {
    // var submitbtn=submitbtn.value.trim()
    var usernameval = username.value.trim()
    var emailval = email.value.trim()
    var phonenumberval = phonenumber.value.trim()
    var passwordval = password.value.trim()
    var passwordval1 = password1.value.trim()


    // CHECKING USERNAME
    if (usernameval === "") { seterrormsg(username, "username cannot be blank") }
    else if (usernameval.length <= 3) { seterrormsg(username, "username cannot be less than 3 characters") }
    else { setsuccessmsg(username) }


    // CHECKING EMAIL
    if (emailval === "") { seterrormsg(email, "Email cannot be blank") }
    else if (!isemail(emailval)) { seterrormsg(email, "Not a Valid Email") }
    else { setsuccessmsg(email) }



    // CHECKING PHONENUMBER
    if (phonenumberval === "") { seterrormsg(phonenumber, "Phonenumber cannot be blank") }
    else if ((phonenumberval.length != 10)) { seterrormsg(phonenumber, "Not a Valid Phonenumber") }
    else { setsuccessmsg(phonenumber) }


    // CHECKING PASSWORD
    if (passwordval === "") { seterrormsg(password, "Password cannot be blank") }
    else if ((passwordval.length <= 6)) { seterrormsg(password, "Weak Password - Minimum Length should be 7") }
    else if (passwordcheck(passwordval)) { seterrormsg(password, "Please include numbers, capital alphabets and special characters") }

    else { setsuccessmsg(password) }


    // CHECKING PASSWORD1
    if (passwordval === "") { seterrormsg(password1, "Password cannot be blank") }
    else if (passwordval === passwordval1) { setsuccessmsg(password1) }
    else { seterrormsg(password1, "Please fill the correct password.") }

}