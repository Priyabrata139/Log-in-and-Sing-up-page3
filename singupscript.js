let form = document.getElementById("form");

let name = document.getElementById("name");
let noname = document.getElementById("noname");

let email = document.getElementById("email");
let nomail = document.getElementById("nomail");
let alreadyexsistmailid = document.getElementById("alreadyexsistmailid");

let password = document.getElementById("password");
let nopassword = document.getElementById("nopassword");
// let wrongpassword=document.getElementById("wrongpassword");

let hidden="hidden";
let invalidinfo="invalid-info";
form.addEventListener("submit", (e) => 
{
    e.preventDefault();
   console.log("yes");  
   noname.classList.add(hidden);
   nomail.classList.add(hidden);
   nopassword.classList.add(hidden);
   name.classList.remove(invalidinfo);
   email.classList.remove(invalidinfo);
   password.classList.remove(invalidinfo);
   name.classList.add("valid-info");
   email.classList.add("valid-info");
   password.classList.add("valid-info");
   alreadyexsistmailid.classList.add(hidden);
   let flag=false;
   if(name.value === ""){
    console.log("blank");
    noname.classList.remove(hidden);
    name.classList.remove("valid-info");
    name.classList.add(invalidinfo);
    flag=true;
   }
//    else{
//     noname.classList.add(hidden);
//    }
   if (email.value==="") {
    nomail.classList.remove("hidden");
    email.classList.remove("valid-info");
    email.classList.add(invalidinfo);
    flag=true;

   }   

   if (password.value==="") {
    nopassword.classList.remove(hidden);
    password.classList.remove("valid-info");
    password.classList.add(invalidinfo);
    flag=true;

   }
   if(flag){
    console.log("return");
    return;
   }
 
   console.log("not return");
   
   if (localStorage.getItem(email.value)===null) { console.log("yesss");
      localStorage.setItem(email.value,JSON.stringify({
         name: name.value,
         password: password.value
      }));
     console.log("yesss");
     location.href = "./website.html";
   }
   else{
      alreadyexsistmailid.classList.remove(hidden);
      email.classList.remove("valid-info");
      email.classList.add(invalidinfo);
   }
   
})