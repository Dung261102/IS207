var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");
const form = document.getElementById("form");
const errorElement =document.getElementById("error");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eye.style.display = "block";
        eyeSlash.style.display = "none";
    } else {
        password.type = "password";
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    }
}

function loginClick(){
    var name = document.querySelector("#user-name");
    login.style.display = "none";
    hello.style.display = "block";
    if(user.value != ''){
        name.innerHTML = user.value;
    }
    else {
        name.innerHTML = 'Tên đăng nhập rỗng';

    }
}

function logoutClick(){
    login.style.display = 'block';
    hello.style.display = 'none';
}


//Event listener
form.addEventListener('submit', (e) =>{
    let message = []
    if(user.value === '' || user.value ==null){
        message.push('Name is required')
    }

    if(message.length >0){
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
    
})