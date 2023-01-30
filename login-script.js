const form = document.getElementById("form");
let email = document.getElementById("emailbox");
let password = document.getElementById("password");
// let noName = document.getElementById("no-name");
let noEmail = document.getElementById("nomail");
let noPassword = document.getElementById("nopassword");

let wrongmail= document.getElementById("wrongmail");
let wrongpassword= document.getElementById("wrongpassword");

let hidden="hidden";
let invalidinfo="invalid-info";
let validinfo="valid-info";


form.addEventListener("submit", (e) => {
    e.preventDefault();
    noEmail.classList.add(hidden);
    noPassword.classList.add(hidden);
    wrongmail.classList.add(hidden);
    wrongpassword.classList.add(hidden);
    
    if (password.value==="") {
        noPassword.classList.remove(hidden);
        password.classList.add(invalidinfo);
        // return;
    }
    if (email.value==="") {
        noEmail.classList.remove(hidden);
        email.classList.add(invalidinfo);
    }
    else if(password.value!=""){
        email.classList.remove(invalidinfo);
        email.classList.add(validinfo);
        if (localStorage.getItem(email.value)==null) {
            wrongmail.classList.remove(hidden);
            // noPassword.classList.add(hidden);
            password.classList.remove(invalidinfo);


        }
        else{
            let data=JSON.parse(localStorage.getItem(email.value));
            console.log(data);console.log(password.value);
            if(data.password!=password.value){

                wrongpassword.classList.remove(hidden);
                password.classList.add(invalidinfo);
            }
            else{
                password.classList.remove(invalidinfo);
                password.classList.add(validinfo);
                location.href="website.html";
            }
        }
    }
    else{
        email.classList.remove(invalidinfo);
        email.classList.add(validinfo);
    }
   
    
})