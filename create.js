let form3 = document.querySelector("#form3")
form3.onsubmit = function(event) {


    let Collname = document.querySelector("#coll-name");
    if (Collname.value.length < 5) {

        Collname.style.border = "1px solid red";

        document.querySelector("#error1").innerHTML =
            "Inalid Name";



        return (false);

    } else {
        Collname.style.border = "1px solid green";



    }
    let description = document.querySelector("#description");
    if (description.value.length < 12) {

        description.style.border = "1px solid red";

        document.querySelector("#error2").innerHTML =
            "Inalid Name";



        return (false);

    } else {
        description.style.border = "1px solid green";



    }
    let myname = document.querySelector("#my-name");
    if (myname.value.length < 12) {

        myname.style.border = "1px solid red";

        document.querySelector("#error3").innerHTML =
            "Inalid Name";



        return (false);

    } else {
        myname.style.border = "1px solid green";



    }
}