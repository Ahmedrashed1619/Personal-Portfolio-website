
//....................Form Selectors...................

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


// loading to init...........

$(document).ready(function(){
    $('#loading').fadeOut(2000, function(){
        $('body').css('overflow','visible')
    })
})



// rotation location colors container.... 

$('.rotate-icon').click(function(){
    let currentWidth = $('.colors').width();
    if($('.colors').css('right') == '0px')
    {
        $('.colors').css({'right' : -currentWidth, 'transition' : '1.25s'});
    }
    else
    {
        $('.colors').css({'right' : '0px', 'transition' : '1.25s'});
    }
})



// change main colorShow...

let colorsGroup = ['#4169e1', '#66b95c', '#ff9800', '#ff5e94', '#fa5b0f', 'tan', '#9200ee', '#00d4bd', '#5e9e9f', '#e65f78', '#666d41', '#fe0000']

for (let i = 0; i < colorsGroup.length; i++)
{
    $('.screen-show .col-12 li').eq(i).css("backgroundColor",colorsGroup[i])
}

$('.screen-show .col-12 li').click(function(){
    $(this).css('transform' , 'scale(0.75,0.75)');
    $(this).siblings().css('transform' , 'scale(1,1)');
    $(this).parent().parent().siblings().find('li').css('transform' , 'scale(1,1)');
    let currentColor = $(this).css("backgroundColor");
    $(document.documentElement).css('--mainColor', currentColor);
})

$('.defult').click(function(){
    let myValue = $('.defult').css('backgroundColor');
    $(document.documentElement).css('--mainColor', myValue);
    $('.screen-show').find('li').css('transform' , 'scale(1,1)');
})



// when scroll event...

$(window).scroll(function(){

    let aboutOffset = $('#about').offset().top;
    let contactOffset = $('#contact').offset().top;

    if($(window).scrollTop() > 200)
    {
        $('.navbar').css({'backgroundColor' : 'rgba(0, 0, 0, 0.85)', 'transition' : '0.5s'});
        $('.navbar-collapse').css({'backgroundColor' : 'transparent', 'transition' : '0.5s'});
    }
    else
    {
        $('.navbar').css({'backgroundColor' : 'transparent', 'transition' : '0.5s'});
        $('.navbar-collapse').css({'backgroundColor' : 'rgba(0, 0, 0, 0.85)', 'transition' : '0.5s'});
    }
    if($(window).scrollTop() > aboutOffset && $(window).scrollTop() < contactOffset-250)
    {
        $('#topBtn').fadeIn(500);
    }
    else
    {
        $('#topBtn').fadeOut(250);
    }
})


$('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})



// add class active to an active link and smooth move.....

$('.navbar-nav .nav-item a').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('href');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({scrollTop : currentOffset}, 500);
})



// Auto typing...

let typed = new Typed('.element', {
    strings : ['Frontend Developer.', 'Frontend Designer.', 'Freelancer.'],
    typeSpeed : 100,
    backSpeed : 50,
    loop : true
});

let autoTyped = new Typed('.typing', {
    strings : ['Frontend Developer.', 'Frontend Designer.', 'Freelancer.'],
    typeSpeed : 100,
    backSpeed : 50,
    loop : true
});



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



