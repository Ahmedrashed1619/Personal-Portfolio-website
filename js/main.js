
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

$('#sendMessage').click(function(){
    sendValidMessage();
})

// validation message...

function sendValidMessage(){
    if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
    {
        $('#alertSend').html('The message was sent Successfully');
        $('#alertSend').css({'display':'block' , 'color':'green'});
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
    let regexName = /^[A-Z][a-z- ]{2,15}$/;

    if(regexName.test($('#name').val()))
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
    let regexEmail = /^[a-zA-Z0-9_]{3,15}(@[a-zA-Z0-9]{3,15}\.com)$/;

    if(regexEmail.test($('#email').val()))
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
    let regexMsg = /^[a-zA-Z0-9- ]{1,150}$/;

    if(regexMsg.test($('#message').val()))
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
    $('#counter').html(150);
}


// counter character

let counter = $('#message').attr('maxlength');
$('#counter').html(counter);

$('#message').on('input' , function (){
    let changeCount = $('#message').val().length;
    let endCounter = 150 - changeCount;
    $('#counter').html(endCounter);
    
    if(endCounter == 0)
    {
        $('#counter').css({'fontWeight' : 'bold' , 'color' : 'red'});
    }
    else
    {
        $('#counter').css({'fontWeight' : 'normal' , 'color' : 'black'});
    }
});

