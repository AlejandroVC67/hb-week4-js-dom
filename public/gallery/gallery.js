export class Gallery {
  constructor (instance, url) {
    this.url = url
    console.log(this.url);
    this.cont = 0
    this.instance = instance
    this.elements = {}
    initVariables()
    loadImages()
    arrowsControl()
    galleryMovement()
  }

  static initVariables () {
    this.elements.container = document.querySelector('.gallery-container')
    this.elements.arrows = document.querySelectorAll('.arrow-modifier')
    this.elements.images = document.querySelectorAll('.img')
  }

  static loadImages () {
    // variables declaration
    this.elements.images.img = document.createElement('img')
    img2 = document.createElement('img')
    img3 = document.createElement('img')

    // img src
    img.setAttribute('src', url[1])
    img2.setAttribute('src', url[0])
    img3.setAttribute('src', url[2])

    // adding respective class
    img.classList.add('img')
    img2.classList.add('img')
    img2.classList.add('img--disable')
    img3.classList.add('img')
    img3.classList.add('img--disable')

    // appending to container
    this.elements.container.appendChild(img)
    container.appendChild(img2)
    container.appendChild(img3)
  }

//   static loadDots () {
//     let dots
//     let dotsContainer = ('')
//     for (let i = 0; i < images.length; i++) {
//       dots[i] = ('')
//     }
//   }

  static arrowsControl () {
    this.elements.images = document.querySelectorAll('.img')  // console.log(images);
    for (let i = 0; i < images.length; i++) {
      if (images[0].classList.contains('img--disable') === false) {
        arrows[0].classList.add('arrows--disable')
        arrows[1].classList.remove('arrows-diseable')
      } else if (images[images.length - 1].classList.contains('img--disable') === false) {
        arrows[1].classList.add('arrows--disable')
        arrows[0].classList.remove('arrow-enable')
      } else if (images[i].classList.container('img--disable') === false) {
        arrows[0].classList.add('arrows--enable')
        arrows[1].classList.remove('arrow-enable')
      }
    }
  }

  static galleryMovement () {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('click', function () {
        console.log(arrows[i])
        if (arrows[i].classList.contains('arrows__left')) {
          cont--
        // hideImages();
          showImage(cont)
        } else {
          cont++
          hideImages()
          showImage(cont)
        }
      })
    }
  }

  static hideImages () {
    for (let j = 0; j < images.length; j++) {
      images[j].classList.add('img--disable')
    }
  }

  static showImage (cont) {
    for (let j = 0; j < images.length; j++) {
      images[cont].classList.remove('img--disable')
    }
  }
    // let container;
    // let arrows;
    // let images;
    // let btns;
    // let cont = 0;
}
