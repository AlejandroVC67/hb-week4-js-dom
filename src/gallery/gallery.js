export class Gallery {
  constructor (instance, url) {
    this.url = url
    console.log(this.url)
    this.cont = 0
    this.instance = instance
    this.elements = {}
    this.initVariables()
    this.createContent()
    this.arrowsControl()
    // galleryMovement()
  }

  initVariables () {
    this.elements.container = this.instance
    // this.elements.dots = this.elements.container.querySelectorAll('.dots')
    this.elements.btns = this.instance.querySelectorAll('button')
    // console.log(this.elements.dots)
    // console.log(this.elements.btns)
    this.elements.arrows = this.instance.querySelectorAll('.arrow')
    console.log(this.elements.arrows)
    // this.elements.images = this.node.querySelectorAll('.img')
    // this.elements.btns = this.node.querySelectorAll('button')
  }

  createContent () {
    let imgs = []
    let dots = []
    for (let i = 0; i < this.url.length; i++) {
      dots[i] = `<button class="dots__style"</button> \n`
      imgs[i] = `<img class="img" src="${this.url[i].url}"</img>`
      this.elements.container.querySelector('.dots').innerHTML += dots[i]
      this.elements.container.innerHTML += imgs[i]
    }
    this.elements.container.querySelector('.img').classList.add('img--enable')
    this.elements.container.querySelector('.dots__style').classList.add('dots--selected')
  }

  arrowsControl () {
    console.log('arrowsControl begins')
    let imgs = this.elements.container.querySelectorAll('.img')
    // let arrows = this.elements.container.querySelectorAll('.arrow')
    let firstImage = imgs[0]
    let lastImage = imgs[imgs.length - 1]
    // console.log(firstImage)
    // console.log(lastImage)
    if (firstImage.classList.contains('img--enable')) {
      this.elements.container.querySelectorAll('.arrow')[1].classList.add('arrow--enable')
      // arrows[1].classList.add('arrow--enable')
      console.log('debería entrar acá')
    } else if (lastImage.classList.contains('img--enable')) {
      console.log('acá no')
      this.elements.arrows[1].classList.remove('arrow--enable')
    } else {
      this.elements.arrows[0].classList.add('arrow--enable')
      this.elements.arrows[1].classList.add('arrow--enable')
      console.log('poniendo flechas en to lado')
    }
  }

  galleryMovement () {
    arrowsMovement()
    dotsMovement()
  }

  arrowsMovement () {

  }

  dotsMovement() {
    
  }
  // arrowsControl () {
  //   let imgs = this.elements.images = this.node.document.querySelectorAll('.img')  
  //   for (let i = 0; i < imgs.length; i++) {
  //     if (imgs[0].classList.contains('img--active') === true) {
  //       arrows[0].classList.add('arrows--disable')
  //       arrows[1].classList.remove('arrows-diseable')
  //     } else if (images[images.length - 1].classList.contains('img--active') === true) {
  //       arrows[1].classList.add('arrows--disable')
  //       arrows[0].classList.remove('arrow-enable')
  //     } 
  //   }
  // }

  //  galleryMovement () {
  //   for (let i = 0; i < btns.length; i++) {
  //      btns[i].addEventListener('click', function () {
  //       if (arrows[i].classList.contains('arrows__left')) {
  //         cont--
  //         // hideImages();
  //         showImage(cont)
  //       } else {
  //         cont++
  //         showImage(cont)
  //       }
  //     })
  //   }
  // }

  //  showImage (cont) {
  //   for (let j = 0; j < images.length; j++) {
  //     images[cont].classList.add('img--enable')
  //   }
  // }
}
