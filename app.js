var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var userEmail = document.getElementById("email");
var password = document.getElementById("pass");
var fNameText = document.getElementById("fNametext");
var lNameText = document.getElementById("lNametext");
var userEmailText = document.getElementById("emailtext");
var passwordText = document.getElementById("passtext");

function login(e){
    e.preventDefault();

    if(fName.value.length == 0){
        fName.style.borderBottom = "1px solid red";
        fNameText.innerHTML = "Required";
        fNameText.style.display = "block";
    }else if(lName.value.length == 0){
        lName.style.borderBottom = "1px solid red";
        lNameText.innerHTML = "Required";
        lNameText.style.display = "block";
    }else if(userEmail.value.length == 0){
        userEmail.style.borderBottom = "1px solid red";
        userEmailText.innerHTML = "Required";
        userEmailText.style.display = "block";
    }else if(password.value.length == 0){
        password.style.borderBottom = "1px solid red";
        passwordText.innerHTML = "Required";
        passwordText.style.display = "block";
    }else{
        console.log("done");
    }


}

function inputValidation(ele){
    
    if(ele.value.length > 0){
        ele.style.borderBottom = "1px solid dodgerblue";
        ele.nextSibling.nextSibling.style.display = "none"
    }

}

function eyeValidation(ele){

    if(password.type == "password"){
        password.type = "text";
        ele.className = "fa-regular fa-eye-slash";
    }else{
        password.type = "password";
        ele.className = "fa-regular fa-eye";
    }
    
}