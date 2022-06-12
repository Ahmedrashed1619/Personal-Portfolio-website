
//....................Selectors...................

let navbar = document.querySelector('.navbar');
// let active = document.querySelector('.active');
// let brand  = document.querySelector('.navbar-brand');
let links = Array.from (document.querySelectorAll('.navbar-nav .nav-item a'));
let collapse = document.querySelector('.navbar-collapse');
let rotation = document.querySelector('.rotate-icon');
let colorShow = document.querySelector('.colors');
let changeColors = Array.from (document.querySelectorAll('.col-12 ul li'));
let defultColor = document.querySelector('.defult');
let myValue ;
let inputs = Array.from(document.querySelectorAll('.form-control'))
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('message');
let alertName = document.getElementById('alertName');
let alertEmail = document.getElementById('alertEmail');
let alertMessage = document.getElementById('alertMessage');
let sendMessage = document.getElementById('sendMessage');
let resetBtn = document.getElementById('reset');
let alertSend = document.getElementById('alertSend');


// add class active to an active link 

// for(let i = 0; i < links.length; i++){
//     links[i].addEventListener('click' , function (){
//         links[i].classList.add('active');
//     })
// }



// var form = document.getElementById('sheetdb-form');
// form.addEventListener('submit', e=> {
//     e.preventDefault();
//     fetch(form.action, {
//         method : "Post",
//         body : new FormData(document.getElementById('sheetdb-form')),
//     }).then(
//         Response => Response.json()
//     )
// });




// change main colorShow...

for(let i = 0; i < changeColors.length; i++){
    changeColors[i].addEventListener('click' , function (){
        // changeColors[i].style.padding = '50px';
        myValue = window.getComputedStyle(changeColors[i] ,null).getPropertyValue('background-color');
        document.documentElement.style.setProperty('--mainColor', `${myValue}`);
    })
}

defultColor.addEventListener('click' , function(){
    myValue = window.getComputedStyle(defultColor ,null).getPropertyValue('background-color');
    document.documentElement.style.setProperty('--mainColor', `${myValue}`);
})


// when scroll event...

window.addEventListener('scroll',function(){
    if(this.scrollY > 30)
    {
        navbar.classList.add('sticky');
        collapse.classList.add('bg-trans');
    }
    else
    {
        navbar.classList.remove('sticky');
        collapse.classList.remove('bg-trans');
    }
})


// rotation location colors container.... 

let right = colorShow.style.right = '-265px';

rotation.addEventListener('click', function(e){
    e.preventDefault();
    right =! right;
    if(right)
    {
        colorShow.style.right = '0px';
    }
    else
    {
        colorShow.style.right = '-265px';
    }
})


// Auto typing...

// let typed = new typed('.typing' , {
//     Strings : ["Developer" , "Designer" , "Freelancer"],
//     typeSpeed : 100,
//     backSpeed : 60,
//     loop : true
// });


// when user press on send message button...

if(sendMessage){
    sendMessage.addEventListener('click' , sendValidMessage);
}

function sendValidMessage(){
    if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
    {
        alertSend.innerHTML = ('The message was sent Successfully');
        alertSend.classList.replace('d-none','d-block');
        alertSend.classList.add('text-success');
        alertSend.classList.remove('text-danger');
        resetForm();
    }
    else if (isInputEmpty())
    {
        alertSend.innerHTML = ('all fields are important.. You should fill them correctly');
        alertSend.classList.replace('d-none','d-block');
        alertSend.classList.add('text-danger');
        alertSend.classList.remove('text-success');
        resetForm();
    }
    else if(validUserName() == false || validUserEmail() == false || validTextMessage() == false)
    {
        alertSend.innerHTML = ('There are Invalid fields.. You should fill them correctly');
        alertSend.classList.replace('d-none','d-block');
        alertSend.classList.add('text-danger');
        alertSend.classList.remove('text-success');
        resetForm();
    }
}




// ...check if inputs are empty...

function isInputEmpty(){
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == '')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

// when user want to send a message...

if(inputName != null){
    inputName.addEventListener('input' , validUserName);
}

if(inputEmail != null){
    inputEmail.addEventListener('input' , validUserEmail);
}

if(inputMessage != null){
    inputMessage.addEventListener('input' , validTextMessage);
}

// Validation for form...

function validUserName(){
    var regexName = /^[A-Z][a-z- ]{2,15}$/;
    if(regexName.test(inputName.value))
    {
        inputName.classList.add('is-valid');
        inputName.classList.remove('is-invalid');
        alertName.classList.add('d-none');
        return true;
    }
    else
    {
        inputName.classList.add('is-invalid');
        inputName.classList.remove('is-valid');
        alertName.classList.remove('d-none');
        return false;
    }
}

function validUserEmail(){
    var regexEmail = /^[a-zA-Z0-9_]{3,15}@gmail\.com$/;
    if(regexEmail.test(inputEmail.value))
    {
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
        alertEmail.classList.add('d-none');
        return true;
    }
    else
    {
        inputEmail.classList.add('is-invalid');
        inputEmail.classList.remove('is-valid');
        alertEmail.classList.remove('d-none');
        return false;
    }
}

function validTextMessage(){
    var regexName = /^[a-zA-Z0-9- ]{5,150}$/;
    if(regexName.test(inputMessage.value))
    {
        inputMessage.classList.add('is-valid');
        inputMessage.classList.remove('is-invalid');
        alertMessage.classList.add('d-none');
        return true;
    }
    else
    {
        inputMessage.classList.add('is-invalid');
        inputMessage.classList.remove('is-valid');
        alertMessage.classList.remove('d-none');
        return false;
    }
}



// when user want to reset message form..
if(resetBtn){
    resetBtn.addEventListener('click' , resetForm);
}

//... reset Messages form...
function resetForm(){
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
        alertName.classList.add('d-none');
        alertEmail.classList.add('d-none');
        alertMessage.classList.add('d-none');
    }
}
