export class Gallery {
  constructor (instance, data) {
    this.data = data
    this.cont = 0
    this.instance = instance
    this.elements = {}
    this.createImages()
    // this.createDots()
    this.elements.arrows = this.instance.querySelectorAll('.arrow')
    this.controlArrows(this.elements.imgs, this.elements.arrows)
    this.setArrowMovement(this.elements.arrows)
  }

  static get contentStructure () {
    return {
      dot: ` <li class="dots"> <button class="dots__style"></button> </li>`,
      imgs: `<img class="img" alt="a image of nature" src="{src}" ></img>`
    }
  }

  createImages () {
    this.data.map(element => {
      this.instance.innerHTML += Gallery.contentStructure.imgs.replace('{src}', element.url)
    })
    this.instance.querySelector('.dots-list').innerHTML += Gallery.contentStructure.dot
    this.elements.dots = this.instance.querySelector('.dots-list')
    this.elements.imgs = this.instance.querySelectorAll('.img')
    // console.log(this.elements.imgs)
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

  controlArrows (imgs, arrows) {
    const firstImage = imgs[0]
    const lastImage = imgs[imgs.length - 1]
    if (firstImage.classList.contains('img--enable')) {
      arrows[1].classList.add('arrow--enable')
    } else if (lastImage.classList.contains('img--enable')) {
      arrows[1].classList.remove('arrow--enable')
    } else {
      arrows[0].classList.add('arrow--enable')
      arrows[1].classList.add('arrow--enable')
    }
  }

  setArrowMovement (arrows) {
    console.log(arrows)
    arrows.addEventListener('click', function (event) {
      const element = event.currentTarget
      if (element.classList.contains('arrows-container__left')) {
        this.cont--
        this.revealPreviousImage(this.cont)
      } else if (element.classList.contains('arrows-container__right')) {
        this.cont++
        console.log(this.cont)
        this.revealNextImage(this.cont)
      }
    })
  }

  revealPreviousImage (position) {
    this.elements.imgs[position++].classList.remove('img--enable')
    this.elements.imgs[position].classList.add('img--enable')
  }

  revealNextImage (position) {
    this.elements.imgs[position++].classList.remove('img--enable')
    this.elements.imgs[position].classList.add('img--enable')
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
