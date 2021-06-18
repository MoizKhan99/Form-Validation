var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");
var success = document.getElementById("success");

// Sign up Functionality ===============================
function onSingup() {
    error.innerHTML = "";
    success.innerHTML = "";
    var getUsersFromStorage = localStorage.getItem("users");
    var users = JSON.parse(getUsersFromStorage)
    if (!users) {
        users = []
    }
    // set a flag
    var isEmailExist = false;
    for (let i = 0; i < users.length; i++) {
        var user = users[i];
        // checking email exist or not
        if (user.email === email.value) {
            // email exist
            isEmailExist = true;
            break;
        }
    }
    if (isEmailExist) {
        error.innerHTML = email.value + " Already exist";
    } else {
        users.push({
            email: email.value,
            password: password.value,
        });
        localStorage.setItem("users", JSON.stringify(users));
        success.innerHTML = "Account create successfully";
    }
    email.value = ""
    password.value = ""
}


// Login Functionality ===============================
function onSignin(){
    error.innerHTML = "";
    success.innerHTML = "";
    var getUsersFromStorage = localStorage.getItem("users");
    var users = JSON.parse(getUsersFromStorage)
    // console.log(users[0].email)
    var userLogin = false;
    for(i = 0; i < users.length; i++){
        if(users[i].email == email.value && users[i].password == password.value){
            userLogin = true;
        }
    }
    if(userLogin === true){
        success.innerHTML = "User Login Successfully";
        email.value = ""
        password.value = ""
    }
    else{
        error.innerHTML = "Incorrect Email Or Password";
    }    
}



// Forget Password Functionality
function forgetPassword(){
    error.innerHTML = "";
    success.innerHTML = "";
    var getUsersFromStorage = localStorage.getItem("users");
    var users = JSON.parse(getUsersFromStorage)
    var emailFound = false
    var userIndex;
    for(i = 0; i < users.length; i++){
        if(users[i].email == email.value){
            emailFound = true
            userIndex = i
            break
        }
    }
    if(emailFound === true){
        var newPassword = prompt("Enter New Password")
        users[userIndex].password = newPassword
        localStorage.setItem("users", JSON.stringify(users));
        success.innerHTML = "Password Updated";
    }
    else{
        error.innerHTML = "Email Not Found";
    }    
}