'use strict';
let allProducts = [];
let times = [];
let votes = [];
function Product(name, source) {
    this.name = name;
    this.source = source;
    allProducts.push(this);
    this.times = 0;
    this.votes = 0;
}
let leftImageIndex;
let rightImageIndex;
let middleImageIndex;
let maxAttempts = 5;
let count = 0;
let button;

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

function genrateRandomProduct() {
    return Math.floor(Math.random() * allProducts.length);
}
function render() {
    let imgLeft = document.getElementById('leftImage');
    let imgRight = document.getElementById('rightImage');
    let imgMiddle = document.getElementById('middleImage');

    leftImageIndex = genrateRandomProduct();
    rightImageIndex = genrateRandomProduct();
    middleImageIndex = genrateRandomProduct();

    while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex || rightImageIndex === leftImageIndex || middleImageIndex === leftImageIndex || middleImageIndex === rightImageIndex) {
        leftImageIndex = genrateRandomProduct();
        rightImageIndex = genrateRandomProduct();
        middleImageIndex = genrateRandomProduct();
    }
    // imgLeft.src = this.source;
    // imgMiddle.src = this.source;
    // imgRight.src = this.source;
    imgLeft.src = allProducts[leftImageIndex].source;
    imgRight.src = allProducts[rightImageIndex].source;
    imgMiddle.src = allProducts[middleImageIndex].source;
    localStorage.setItem('BMProducts', JSON.stringify(allProducts));

    if(allProducts[leftImageIndex].source){
        allProducts[leftImageIndex].times++;
        // console.log(allProducts[leftImageIndex].times++);
    }
    if(allProducts[rightImageIndex].source){
        allProducts[rightImageIndex].times++;
    }
    if(allProducts[middleImageIndex].source){
        allProducts[middleImageIndex].times++;
    }
}
getDataFromStorage();
render();
let container = document.getElementById('container');
container.addEventListener('click', addingVotes);

button = document.createElement('button');
function addingVotes(event){
    count++;
    if(count<=maxAttempts){
        if(event.target.id === 'leftImage'){
            allProducts[leftImageIndex].votes++;
            console.log(allProducts[leftImageIndex].votes++);
        }else if(event.target.id === 'rightImage'){
            allProducts[rightImageIndex].votes++;
        }else{
            allProducts[middleImageIndex].votes++;
        }
        render();

    }else{
        container.appendChild(button);
        button.textContent = 'View Results';
        button.addEventListener('click', buttonAction);
        for(let i = 0; i<allProducts.length; i++){
            votes.push(allProducts[i].votes);
            times.push(allProducts[i].times);
        }
        function buttonAction(){
            for(let i = 0; i<allProducts.length; i++){
                let pData = document.createElement('p');
                container.appendChild(pData);
                pData.textContent = `${allProducts[i].name} have been shown for ${allProducts[i].times} and has been voted for ${allProducts[i].votes}`;

            }
        }

    }

}

function getDataFromStorage(){
    if(localStorage.getItem('BMProducts')){
        allProducts = JSON.parse(localStorage.getItem('BMProducts'));
        render();
    }
}



genrateRandomProduct();


// let allProducts = [];
// let times = [];
// let votes = [];
// function Product(name, source) {
//     this.name = name;
//     this.source = source;
//     this.votes = 0;
//     this.times = 0;
//     allProducts.push(this);
// }
// new Product('bag', 'img/bag.jpg');
// new Product('banana', 'img/banana.jpg');
// new Product('bathroom', 'img/bathroom.jpg');
// new Product('boots', 'img/boots.jpg');
// new Product('breakfast', 'img/breakfast.jpg');
// new Product('bubblegum', 'img/bubblegum.jpg');
// new Product('chair', 'img/chair.jpg');
// new Product('cthulhu', 'img/cthulhu.jpg');
// new Product('dog-duck', 'img/dog-duck.jpg');
// new Product('dragon', 'img/dragon.jpg');
// new Product('pen', 'img/pen.jpg');
// new Product('pet-sweep', 'img/pet-sweep.jpg');
// new Product('scissors', 'img/scissors.jpg');
// new Product('shark', 'img/shark.jpg');
// new Product('sweep', 'img/sweep.png');
// new Product('tauntaun', 'img/tauntaun.jpg');
// new Product('usb', 'img/usb.gif');
// new Product('water-can', 'img/water-can.jpg');
// new Product('wine-glass', 'img/wine-glass.jpg');
// let maxAttempts = 5;
// let count = 0;

// let leftImageIndex, rightImageIndex, middleImageIndex;

// function render() {
//     let leftImage = document.getElementById('leftImage');
//     let rightImage = document.getElementById('rightImage');
//     let middleImage = document.getElementById('middleImage');

//     leftImageIndex = genrateRandomProduct();
//     rightImageIndex - genrateRandomProduct();
//     middleImageIndex = genrateRandomProduct();

//     while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === leftImageIndex || rightImageIndex === middleImageIndex || middleImageIndex === leftImageIndex || middleImageIndex === rightImageIndex) {
//         leftImageIndex = genrateRandomProduct();
//         rightImageIndex - genrateRandomProduct();
//         middleImageIndex = genrateRandomProduct();
//     }

//     leftImage.src = allProducts[leftImageIndex].source;
//     rightImage.src = allProducts[rightImageIndex].source;
//     middleImage.src = allProducts[middleImageIndex].source;

//     if(allProducts[leftImageIndex].source){
//         allProducts[leftImageIndex].times++;
//     }
//     if(allProducts[rightImageIndex].source){
//         allProducts[rightImageIndex].times++;
//     }
//     if(allProducts[middleImageIndex].source){
//         allProducts[middleImageIndex].times++;
//     }
// }
// let container = document.getElementById('container');
// container.addEventListener('click', swappingAction);
// let button = document.createElement('button');
// render();

// function swappingAction(event){
//     count++;
// if(count<=maxAttempts){
//     if(event.target.id === 'leftImage'){
//         allProducts[leftImageIndex].votes++;
//     }else if(event.target.id === 'middleImage'){
//         allProducts[middleImageIndex].votes++;
//     }else{
//         allProducts[rightImageIndex].votes++;
//     }
//     render();

// }else{
//     container.appendChild(button);
//     button.textContent = 'View Results';
//     button.addEventListener('click', showingResults)
//     for (let i = 0; i<allProducts.length; i++){
//         votes.push(allProducts[i].votes);
//         times.push(allProducts[i].times);
//     }

// }
// function showingResults(){
//     for(let i = 0; i<allProducts.length; i++){
//         let p = document.createElement('p')
//         container.appendChild(p);
//         p.textContent = `${allProducts[i].name} have been shown for ${allProducts[i].times} and have been voted for ${allProducts[i].votes}`;
//     }
//     button.hidden = true;
// }
// }

// function genrateRandomProduct() {
//     return Math.floor(Math.random() * allProducts.length);
// }
// genrateRandomProduct();