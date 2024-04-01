function funct() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
 
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
 
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
 
    if (number == "") {
        alert("Contact number must be filled out");
        return false;
    }
 
    // Add more validation rules as needed
 
    return true;
 }