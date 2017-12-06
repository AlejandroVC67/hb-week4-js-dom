export class Gallery {
  constructor (instance, data) {
    this.data = data
    // console.log(this.url)
    this.cont = 0
    this.instance = instance
    this.elements = {}
    // this.initVariables()
    this.createElements()
    // this.arrowsControl()
    // galleryMovement()
  }

  initVariables () {
    this.elements.container = this.instance
    this.elements.dots = this.elements.container.querySelector('.dots')
    // console.log(this.elements.dots)
    this.elements.arrows = Array.from(this.instance.querySelectorAll('.arrow'))
    // console.log(this.elements.arrows)
    // this.elements.images = this.node.querySelectorAll('.img')
  }

  static get contentStructure () {
    return {
      dot: ` <li class="dots"> <button class="dots__style"></button> </li>`,
      imgs: `<img class="img" src="{src}" ></img>`
    }
  }

  createElements () {
    this.elements.dots = this.instance.querySelector('.dots-list')
    console.log(this.elements.dots)
    this.data.map(element => {
      this.instance.innerHTML += Gallery.contentStructure.imgs.replace('{src}', element.url)
    })
    this.elements.dots.innerHTML += Gallery.contentStructure.dot
    this.elements.imgs = this.instance.querySelectorAll('.img')
    this.elements.imgs[0].classList.add('img--enable')
    // let imgs = []
    // let dots = []
    // for (let i = 0; i < this.data.length; i++) {
    //   dots[i] = `<button class="dots__style"></button>`
    //   imgs[i] = `<img class="img" src="${this.url[i].url}"></img>`
    //   console.log('hola1', this.elements.dots.innerHTML)
    //   this.elements.dots.innerHTML += dots[i]
    //   console.log('hola2', this.elements.dots.innerHTML)
    //   console.log(this.elements.dots)
    //   console.log(document.querySelector('.dots'))
    //   this.elements.container.innerHTML += imgs[i]
    // }
    // this.elements.container.querySelector('.img').classList.add('img--enable')
  }

  arrowsControl () {
    // console.log('arrowsControl begins')
    let imgs = this.elements.container.querySelectorAll('.img')
    // let arrows = this.elements.container.querySelectorAll('.arrow')
    let firstImage = imgs[0]
    let lastImage = imgs[imgs.length - 1]
    // console.log(firstImage)
    // console.log(lastImage)
    if (firstImage.classList.contains('img--enable')) {
      this.elements.container.querySelectorAll('.arrow')[1].classList.add('arrow--enable')
      // arrows[1].classList.add('arrow--enable')
      // console.log('debería entrar acá')
    } else if (lastImage.classList.contains('img--enable')) {
      // console.log('acá no')
      this.elements.arrows[1].classList.remove('arrow--enable')
    } else {
      this.elements.arrows[0].classList.add('arrow--enable')
      this.elements.arrows[1].classList.add('arrow--enable')
      // console.log('poniendo flechas en to lado')
    }
  }

  // galleryMovement () {
  //   arrowsMovement()
  //   dotsMovement()

  // }

  // arrowsMovement () {

  // }

  // dotsMovement() {

  // }
  // arrowsControl () {
  //  let imgs = this.elements.images = this.node.document.querySelectorAll('.img')
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
