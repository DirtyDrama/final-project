let form1 = document.querySelector("#form1")

form1.onsubmit = function(event) {

    event.preventDefault();

    let nom = document.querySelector("#username");
    if (username.value.length < 8) {

        username.style.border = "1px solid red";

        document.querySelector("#error-Username").innerHTML =
            "Inalid Name";

    } else {
        username.style.border = "1px solid green";



    }
}