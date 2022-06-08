
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

// add class active to an active link 

// for(let i = 0; i < links.length; i++){
//     links[i].addEventListener('click' , function (){
//         links[i].classList.add('active');
//     })
// }



// change main colorShow...

for(let i = 0; i < changeColors.length; i++){
    changeColors[i].addEventListener('click' , function (){
        // changeColors[i].style.transform = 'scale(0.75 , 0.75)';
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

