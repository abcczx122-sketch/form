let login=document.querySelector(".btnlogin")
let btnRegister=document.querySelector(".btnRegister") 
let wrapper=document.querySelector(".wrapper")
let btn=document.querySelector(".btn")
let btns=document.querySelector(".btns")
btnRegister.addEventListener("click",function(){
    wrapper.classList.add("active")
})
login.addEventListener("click",function(){
    wrapper.classList.remove("active")
})

// -------------------------------//
let email=document.getElementById("email")
let password=document.getElementById("password")
let UserName=document.getElementById("UserName")
let emails=document.getElementById("emails")
let passwords=document.getElementById("passwords")
let froms=document.getElementById("froms")

function showerror(input, massege){

    let formcontrol = input.parentElement;

    formcontrol.className = "input-box error"

    let span = formcontrol.querySelector(".span")

    span.innerHTML = massege;

}
function showSucces(input){
     let formcontrol = input.parentElement;
        formcontrol.className = "input-box "
   let span = formcontrol.querySelector(".span")

    span.innerHTML = "";
}

form.addEventListener("submit", function(e){

    e.preventDefault()

    if(email.value.trim() === ""){

        showerror(email, "Email is required")
    }else if(!/@/.test(email.value)){
    showerror(email,"Email must contain @")
    } else{
        showSucces(email)
    }
    
    if(password.value.trim() === ""){

        showerror(password, "password is required")
    } else if(password.value.length < 8 || !/[!@#$]/.test(password.value)){
         showerror(password, "Password must be at least 8 characters and contain ! @ # $")
    }
    else {
        showSucces(password)
    }
})
froms.addEventListener("submit",function(e){
    e.preventDefault();
      if(UserName.value.trim() === ""){

        showerror(UserName, " User Name is required")
    }else if(!/[A-Z a-z]/.test(UserName.value)){
showerror(UserName,"User Name must contain English letters")
    }
    else{
        showSucces(UserName)
    }
       if(emails.value.trim() === ""){

        showerror(emails, " email Name is required")
    
    }else if(!/@/.test(emails.value)){
    showerror(emails,"Email must contain @")
     } else{
        showSucces(emails)
    }
       if(passwords.value.trim() === ""){

        showerror(passwords, " password Name is required")
    }else if(passwords.value.length < 8 || !/[!@#$]/.test(password.value)){
         showerror(passwords, "Password must be at least 8 characters and contain ! @ # $")
    }
    else{
        showSucces(passwords)
    }
})



