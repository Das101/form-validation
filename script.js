const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;


function validateForm(){
    //using constrain API
    isValid = form.checkValidity();

    //message for error 
    if (!isValid){
    message.textContent ="Please fill out all fields!"
    message.style.color ='red';
    messageContainer.style.borderColor ='red';
    return;

    }

    //check the password match
    if(password1.value === password2.value){
        passwordsMatch = true;
        password1.style.borderColor ='green';
        password2.style.borderColor ='green';

        }
        else {
        passwordsMatch =false;
        message.textContent ='Make sure Password match';
        message.style.color ='red';
        messageContainer.style.borderColor ='red';
        password1.style.borderColor ='red';
        password2.style.borderColor = 'red';
        return;
    }
    //if form isa valid and passsword match
if(isValid && passwordsMatch){
    message.textContent = 'Successsfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor='green';
}

}
function storeFormData(){
    const user= {
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value,
    };
    //Do something with user data
    console.log(user);
}
    
function processFormdata(e){
    e.preventDefault();

    //valadation form
    validateForm();
    //submit data if form is valid and password match
    if (isValid && passwordsMatch){
        storeFormData();

    }
}
//Event Listener
form.addEventListener('submit',processFormdata);


