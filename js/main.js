let container;
let arrows;
let images;
let cont = 0;
init();
function init(){
    initVariables();
    initGallery();
    imageDisplay();
    galleryMovement();
}

function initVariables(){
    container = document.querySelector(".gallery-container");
    arrows = document.querySelectorAll('.arrow-modifier');
    images = document.querySelectorAll('.img');  
    
}

function initGallery(){
    //variables declaration
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    
    //img src
    img.setAttribute("src", "../resources/nature1.jpg");
    img2.setAttribute("src", "../resources/nature2.jpg");
    img3.setAttribute("src", "../resources/nature1.jpg");
    

    //adding respective class
    img.classList.add('img');
    img2.classList.add('img');
    img2.classList.add('opacity');
    img3.classList.add('img');
    img3.classList.add('opacity');
    
    //appending to container
    container.appendChild(img);
    container.appendChild(img2);
    container.appendChild(img3);
    
    
}

function imageDisplay(){
    images = document.querySelectorAll('.img');  
    //console.log(images);

    for(let i = 0; i < images.length; i++){
        if(images[0].classList.contains('opacity') === false){
            arrows[0].classList.add('opacity');
            arrows[1].classList.remove('opacity');
        }
        if(images[images.length-1].classList.contains('opacity') === false){
            arrows[1].classList.add('opacity');
            arrows[0].classList.remove('opacity');
        }
    }
}

function galleryMovement(){
    for(let i = 0; i < arrows.length; i++){
        arrows[i].addEventListener("click", function (){
            console.log(arrows[i]);
            if(arrows[i].classList.contains('arrows__left')){
                cont --;
                hideImages();
                showImage(cont);
            }
            else{
                cont ++;
                hideImages();
                showImage(cont);
            }
        })
    }
}


function hideImages(){
    for(let j = 0; j < images.length; j++){
        images[j].classList.add('opacity');
    }
}

function showImage(cont){
    for(let j = 0; j < images.length; j++){
        images[cont].classList.remove('opacity');
    }
}
