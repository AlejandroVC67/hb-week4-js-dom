let container;
init();
function init(){
    initVariables();
    initGallery();
}

function initVariables(){
//    container = document.querySelector("gallery-container");
    container = document.getElementsByClassName("gallery-container")[0];
    
    console.log(container + " el log");
    console.dir(container + " el dir");
    
}

function initGallery(){
    const img = document.createElement('img');
    img.setAttribute("src", "../resources/nature1.jpg");
    img.classList.add('position');
    
    


    const img2 = document.createElement('img');
    img2.setAttribute("src", "../resources/nature1.jpg");
    img2.classList.add('opacity');
    container.appendChild(img);
    document.body.appendChild(img2);
}
