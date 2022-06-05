
//....................Selectors...................

// var anchors = Array.from(document.querySelectorAll('ul li a'));
// var showData = document.getElementById('show');
// var searchInput = document.getElementById('search');
// var member = document.getElementById('car');
// var meals = [];
// var currentMeal;
// var showModal = document.getElementById('showModal');
// var result;
// var hidden = document.getElementById('hidden');
// // var alert = document.getElementById('alert');
// var navbar = document.getElementById('navbar');
// var logo = document.getElementById('logo');


//............call API for GET the data and show it............ 

// for(var i = 0; i < anchors.length; i++){
//     anchors[i].addEventListener('click' , function (e) {
//         currentMeal = e.target.text.toLowerCase();
//         getAllRecipes(currentMeal);
//         showData.classList.replace('d-none','d-block');
//         hidden.classList.add('d-none');
//     })
// }

// async function getAllRecipes(index){
//     var myHttp = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${index}`)
//     myHttp = await myHttp.json();
//     meals = myHttp.recipes;
//     // console.log(meals);
//     displayData();
// }


//............call API for GET the data and show it in popup............ 

// async function getRecipeModal(index){
//     result = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${index}`);
//     result = await result.json();
//     displayModal();
// }

// function displayModal(){
//     var row =
//     `
//     <img src="${result.recipe.image_url}" class="w-100 h-50" alt="">
//     <h3 class="text-center my-3 bg-warning text-black w-75 mx-auto p-2">${result.recipe.title}</h3>
//     `
//     // console.log(result.recipe.image_url)
//     // console.log(result.recipe.title)
//     showModal.innerHTML = row;
// }


// .......................................looking in input for Data to show it.........................

// searchInput.addEventListener('input' , function (){
//     if(searchInput.value != null || searchInput.value != undefined)
//     {
//         currentMeal =  this.value.toLowerCase();
//         getAllRecipes(currentMeal);
//         showData.classList.replace('d-none','d-block');
//     }
//     else
//     {
//         showData.classList.replace('d-block','d-none');
//     }
// })


// .....................display Data after get it...............................

// function displayData(){
//     var row = '';
//     for(var i = 0; i < meals.length; i++){
//         row +=
//         `<div class="col-md-4">
//             <div class="mael p-3 text-center">
//                 <img src="${meals[i].image_url}" class="w-100 h-50" alt="">
//                 <h3 class=" my-2">${meals[i].title}</h3>
//                 <a target="_blank" href="${meals[i].source_url}" class="btn btn-primary text-decoration-none text-white">Source</a>
//                 <a target="_blank" onclick='getRecipeModal(${meals[i].recipe_id})' data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning text-decoration-none text-white">Deteles</a>
//             </div>
//         </div>
//         `
//     }
//     member.innerHTML = row;
// }


// ...............if scroll...............

// document.addEventListener("scroll", function(){
//     navbar.classList.add('bg-dark')
//     logo.classList.replace('text-danger','text-white');
// })