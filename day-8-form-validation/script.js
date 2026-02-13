let username=document.getElementById("username");
let password=document.getElementById("password");
let form=document.getElementById("login-form");
let message=document.getElementById("message");

form.addEventListener("submit",
    function(event){
        event.preventDefault();
        let userValue=username.value;
        let passValue=password.value;
        if (userValue==="" || passValue==="") {
            message.innerText="*All fields are required*";
            message.style.color="red";
        }
        else if (passValue.length<6) {
            message.innerText="*password must be more than 6 letters*";
            message.style.color="red";
        } else{
            message.innerText="Log in successful";
            message.style.color="green";
            username.value="";
            password.value="";
        }
        console.log(userValue,passValue);
    }
)