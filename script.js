let username = document.querySelector("#username")
let form2 = document.querySelector("#form2")
let email = document.querySelector("#email")


form2.onsubmit = function(event) {


    let username = document.querySelector("#username");
    if (username.value.length < 8) {

        username.style.border = "1px solid red";

        document.querySelector("#error-Username").innerHTML =
            "Inalid Name";



        return (false);

    } else {
        username.style.border = "1px solid green";



    }



    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.border = "1px solid green";
        document.querySelector("#email-error").innerHTML = "";

    } else {
        email.style.border = "1px solid red";
        document.querySelector("#email-error").innerHTML =
            "email form invalid :example@example.com";
        return (false)

    }
    let emailconfim = document.querySelector("#E-mail")

    if (emailconfim.value != email.value) {
        emailconfim.style.border = "1px solid red";
        document.querySelector("#E-mail-error").innerHTML =
            "email doesn't match";
        return (false);

    } else {
        emailconfim.style.border = "1px solid green";
        document.querySelector("#E-mail-error").innerHTML = "";


    }
    let password = document.querySelector("#password")

    if (password.value.length < 8) {

        password.style.border = "1px solid red";

        document.querySelector("#pass-error").innerHTML =
            "Weak password";



        return (false);

    } else {
        password.style.border = "1px solid green";
        return (true)



    }





}