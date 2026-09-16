
const loaderStartedAt = Date.now();
const loaderLines = [
    'Assembling the interface',
    'Loading selected work',
    'Preparing the experience',
    'Almost ready'
];

function cycleLoaderStatus() {
    let index = 0;
    const status = $('.loader-status');
    const timer = window.setInterval(function () {
        if (!$('#loading').length || $('#loading').hasClass('is-done')) {
            window.clearInterval(timer);
            return;
        }
        index = (index + 1) % loaderLines.length;
        status.css('opacity', 0);
        window.setTimeout(function () {
            status.text(loaderLines[index]).css('opacity', 1);
        }, 180);
    }, 520);
}

function hideLoader() {
    const wait = Math.max(0, 1750 - (Date.now() - loaderStartedAt));
    window.setTimeout(function () {
        $('#loading').addClass('is-done');
        window.setTimeout(function () {
            $('#loading').remove();
            $('body').css('overflow', 'visible');
        }, 650);
    }, wait);
}

$(document).ready(function(){
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        $(document.documentElement).css('--mainColor', savedColor);
    }

    const savedMode = localStorage.getItem('colorMode') || document.documentElement.getAttribute('data-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedMode);

    cycleLoaderStatus();
    hideLoader();
})



// rotation location colors container.... 

$('.rotate-icon').click(function(){
    $('.colors').toggleClass('is-open');
})



// change main colorShow...

let colorsGroup = ['#4169e1', '#66b95c', '#ff9800', '#ff5e94', '#fa5b0f', 'tan', '#9200ee', '#00d4bd', '#5e9e9f', '#e65f78', '#666d41', '#fe0000']

for (let i = 0; i < colorsGroup.length; i++)
{
    $('.screen-show .col-12 li').eq(i).css("backgroundColor",colorsGroup[i])
}

$('.screen-show .col-12 li').click(function(){
    $('.screen-show li').removeClass('is-active');
    $(this).addClass('is-active');
    let currentColor = $(this).css("backgroundColor");
    $(document.documentElement).css('--mainColor', currentColor);
    localStorage.setItem('themeColor', currentColor);
})

$('.defult').click(function(){
    let myValue = 'crimson';
    $(document.documentElement).css('--mainColor', myValue);
    localStorage.setItem('themeColor', myValue);
    $('.screen-show li').removeClass('is-active');
})

$('#themeToggle').click(function(){
    const nextMode = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextMode);
    localStorage.setItem('colorMode', nextMode);
})



// when scroll event...

$(window).scroll(function(){

    let aboutOffset = $('#about').offset().top;
    let contactOffset = $('#contact').offset().top;

    if($(window).scrollTop() > 40)
    {
        $('.navbar').addClass('is-scrolled');
    }
    else
    {
        $('.navbar').removeClass('is-scrolled');
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


// when click event on topbtn & toggle 

$('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$('.navbar .navbar-toggler').click(()=>{
    $('.navbar .navbar-toggler').toggleClass('convert');
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
    strings : ['production web apps.', 'dashboards at scale.', 'multilingual products.'],
    typeSpeed : 70,
    backSpeed : 40,
    loop : true
});

let autoTyped = new Typed('.typing', {
    strings : ['Senior Frontend Engineer.', 'React & Next.js specialist.', 'product-minded developer.'],
    typeSpeed : 70,
    backSpeed : 40,
    loop : true
});

$('#toggleMoreWork').click(function(){
    $('#moreWork').toggleClass('is-open');
    $(this).text($('#moreWork').hasClass('is-open') ? 'Show less work' : 'Show more work');
});



// when user press on send message button...

$('#sendMessage').click(function(){
    sendValidMessage();
})

// validation message...

function sendValidMessage(){
    if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
    {

        const templateParams = {
            from_name: $('#name').val(),
            from_email: $('#email').val(),
            to_name: "Ahmmed Rashed",
            message: $('#message').val(),
        };

        emailjs.send('service_5kj2f8m', 'template_pso98ed', templateParams, 'KrqnbuW9dXkylO-sJ')
            .then(function(res) {
                $('#alertSend').html('Your email has been sent successfully');
                $('#alertSend').css({'display':'block' , 'color':'green'});
            },function(error) {
                $('#alertSend').html('Failed to send email, please try again.');
                $('#alertSend').css({'display':'block' , 'color':'red'});
            });
        resetForm();
    }
    else if (isInputEmpty())
    {
        $('#alertSend').html('all fields are important.. You should fill them correctly');
        $('#alertSend').css({'display':'block' , 'color':'red'});
        resetForm();
    }
    else if(validUserName() == false || validUserEmail() == false || validTextMessage() == false)
    {
        $('#alertSend').html('There are Invalid fields.. You should fill them correctly');
        $('#alertSend').css({'display':'block' , 'color':'red'});
        resetForm();
    }
}


// ...check if inputs are empty...

let inputs = Array.from($('.form-control'));

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

if($('#name') != null){
    $('#name').on('input' , function(){
        validUserName();
    })
}

if($('#email') != null){
    $('#email').on('input' , function(){
        validUserEmail();
    })
}

if($('#message') != null){
    $('#message').on('input' , function(){
        validTextMessage();
    })
}


// Validation for form...

function validUserName(){
    let regexName = /^[A-Za-z\u0600-\u06FF][A-Za-z\u0600-\u06FF\s.'-]{1,49}$/;

    if(regexName.test($('#name').val().trim()))
    {
        $('#name').addClass('is-valid');
        $('#name').removeClass('is-invalid');
        $('#alertName').css('display' , 'none');
        return true;
    }
    else
    {
        $('#name').addClass('is-invalid');
        $('#name').removeClass('is-valid');
        $('#alertName').css('display' , 'block');
        return false;
    }
}


function validUserEmail(){
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if(regexEmail.test($('#email').val().trim()))
    {
        $('#email').addClass('is-valid');
        $('#email').removeClass('is-invalid');
        $('#alertEmail').css('display' , 'none');
        return true;
    }
    else
    {
        $('#email').addClass('is-invalid');
        $('#email').removeClass('is-valid');
        $('#alertEmail').css('display' , 'block');
        return false;
    }
}


function validTextMessage(){
    let value = $('#message').val().trim();

    if(value.length >= 8 && value.length <= 300)
    {
        $('#message').addClass('is-valid');
        $('#message').removeClass('is-invalid');
        $('#alertMessage').css('display' , 'none');
        return true;
    }
    else
    {
        $('#message').addClass('is-invalid');
        $('#message').removeClass('is-valid');
        $('#alertMessage').css('display' , 'block');
        return false;
    }
}


// when user want to reset message form..

$('#reset').click(function(){
    resetForm();
})

//... reset Messages form...

function resetForm(){
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
        $('#alertName').css('display' , 'none');
        $('#alertEmail').css('display' , 'none');
        $('#alertMessage').css('display' , 'none');
    }
    $('#counter').html(300);
}


// counter character

let counter = $('#message').attr('maxlength');
$('#counter').html(counter);

$('#message').on('input' , function (){
    let changeCount = $('#message').val().length;
    let endCounter = 300 - changeCount;
    $('#counter').html(endCounter);
    
    if(endCounter == 0)
    {
        $('#counter').css({'fontWeight' : 'bold' , 'color' : 'red'});
    }
    else
    {
        $('#counter').css({'fontWeight' : 'normal' , 'color' : '#9aa3b5'});
    }
});