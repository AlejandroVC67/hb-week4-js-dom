(function(){
    let container;
    let arrows;
    let images;
    let btns;
    let cont = 0;
    init();
    function init(){
        initVariables();
        loadImages();
        arrowsControl();
        galleryMovement();
    }
    
    function initVariables(){
        container = document.querySelector(".gallery-container");
        arrows = document.querySelectorAll('.arrow-modifier');
        images = document.querySelectorAll('.img');  
        
    }
    
    function loadImages(){
        
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
        img2.classList.add('img--disable');
        img3.classList.add('img');
        img3.classList.add('img--disable');
        
        //appending to container
        container.appendChild(img);
        container.appendChild(img2);
        container.appendChild(img3);
        
        
    }
    
    function loadDots(){
        let dots;
        let dotsContainer = ('');
        for(let i=0; i < images.length; i++){
            dots[i] = ('');
        }
    }

    function arrowsControl(){
        images = document.querySelectorAll('.img');  
        //console.log(images);
    
        for(let i = 0; i < images.length; i++){
            
            if(images[0].classList.contains('img--disable') === false){
                arrows[0].classList.add('arrows--disable');
                arrows[1].classList.remove('arrows-diseable');
            }
            else if(images[images.length-1].classList.contains('img--disable') === false){
                arrows[1].classList.add('arrows--disable');
                arrows[0].classList.remove('arrow-enable');
            }
            else if (images[i].classList.container('img--disable') === false){
                arrows[0].classList.add('arrows--enable');
                arrows[1].classList.remove('arrow-enable');
            }
        }
    }
    
    function galleryMovement(){
        for(let i = 0; i < arrows.length; i++){
            arrows[i].addEventListener("click", function (){
                console.log(arrows[i]);
                if(arrows[i].classList.contains('arrows__left')){
                    cont --;
                    //hideImages();
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
            images[j].classList.add('img--disable');
        }
    }
    
    function showImage(cont){
        for(let j = 0; j < images.length; j++){
            images[cont].classList.remove('img--disable');
        }
    }
    
})();

