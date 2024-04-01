function funct() {
    var email = document.getElementById("Email").value;
    var number = document.getElementById("Number").value;
    var message = document.getElementById("Message").value;
 
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
 
    if (number == "") {
        alert("Phone Number must be filled out");
        return false;
    }

    if (message == "") {
        alert("Message must be filled out");
        return false;
    }
 
    // Add more validation rules as needed
 
    return true;
 }