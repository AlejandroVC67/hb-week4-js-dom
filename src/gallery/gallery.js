export class Gallery {
  constructor (instance, url) {
    this.url = url
    console.log(this.url)
    this.cont = 0
    this.instance = instance
    this.elements = {}
    initVariables()
    loadImages()
    arrowsControl()
    galleryMovement()
  }

  initVariables () {
    this.elements.container = document.querySelector('.gallery-container')
    this.elements.arrows = document.querySelectorAll('.arrow-modifier')
    this.elements.images = document.querySelectorAll('.img')
    this.elements.btns = document.querySelectorAll('button')
  }

   loadImages () {
    // variables declaration
    this.elements.images.img = document.createElement('img')
    this.elements.images.img2 = document.createElement('img')
    this.elements.images.img3 = document.createElement('img')

    // img src
    img.setAttribute('src', url[1])
    img2.setAttribute('src', url[0])
    img3.setAttribute('src', url[2])

    // adding respective class
    img.classList.add('img')
    img.classList.add('img--active')
    img2.classList.add('img')
    img3.classList.add('img')

    // appending to container
    this.elements.container.appendChild(img)
    container.appendChild(img2)
    container.appendChild(img3)
  }

  createImages () {
    for(let i = 0 ; i < 3; i++){
        let x = `<img class="img" src="${url[i]}" </img> `; 
    }
  }

//   static loadDots () {
//     let dots
//     let dotsContainer = ('')
//     for (let i = 0; i < images.length; i++) {
//       dots[i] = ('')
//     }
//   }

   arrowsControl () {
    this.elements.images = document.querySelectorAll('.img')  
    for (let i = 0; i < images.length; i++) {
      if (images[0].classList.contains('img--active') === true) {
        arrows[0].classList.add('arrows--disable')
        arrows[1].classList.remove('arrows-diseable')
      } else if (images[images.length - 1].classList.contains('img--active') === true) {
        arrows[1].classList.add('arrows--disable')
        arrows[0].classList.remove('arrow-enable')
      } 
    }
  }

   galleryMovement () {
    for (let i = 0; i < btns.length; i++) {
       btns[i].addEventListener('click', function () {
        if (arrows[i].classList.contains('arrows__left')) {
          cont--
          // hideImages();
          showImage(cont)
        } else {
          cont++
          showImage(cont)
        }
      })
    }
  }

   showImage (cont) {
    for (let j = 0; j < images.length; j++) {
      images[cont].classList.add('img--enable')
    }
  }
}
