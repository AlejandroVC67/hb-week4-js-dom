export class Gallery {
  constructor (instance, data) {
    this.data = data
    this.cont = 0
    this.instance = instance
    this.elements = {}
    this.elements.imgContainer = this.instance.querySelector('.img-container')
    this.createImages(this.elements.imgContainer)
    this.elements.dots = this.instance.querySelector('.dots-list')
    this.createDots(this.elements.dots)
    this.elements.arrows = this.instance.querySelectorAll('.arrow')
    this.elements.navegators = this.instance.querySelectorAll('[data-use]')
    this.controlArrows(this.elements.imgs, this.elements.arrows)
    // console.log(this.elements.dots)
    this.setGalleryMovement(this.elements.navegators)
  }

  static get contentStructure () {
    return {
      dot: ` <li class="dots"> <button data-use='navegation' class="dots__style"></button> </li>`,
      imgs: `<img class="img" alt="a image of nature" src="{src}" ></img>`
    }
  }

  createImages (imgContainer) {
    let imgArray = this.data.map(element => {
      return Gallery.contentStructure.imgs.replace('{src}', element.url)
    })
    imgContainer.innerHTML = imgArray.join('')
    this.elements.imgs = this.instance.querySelectorAll('.img')
    // console.log(this.elements.imgs)
    this.elements.imgs[0].classList.add('img--enable')
  }

  createDots (dotsContainer) {
    let dotsArray = this.data.map(element => {
      return Gallery.contentStructure.dot
    })
    dotsContainer.innerHTML = dotsArray.join('')
    this.elements.dotBtn = this.instance.querySelectorAll('.dots__style')
    console.log(this.elements.dotBtn)
    this.elements.dotBtn[0].classList.add('dots--selected')
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

  setGalleryMovement (navegators) {
    console.log(this.cont)
    // const minCont = this.cont === 0
    // const maxCont = this.cont === this.elements.imgs.length - 1
    // console.log(minCont, maxCont)
    console.log(navegators)
    for (let i = 0; i < navegators.length; i++) {
      navegators[i].addEventListener('click', this.changeImages.bind(this))
    }
  }
  changeImages (event) {
    const element = event.currentTarget
    if (element.classList.contains('arrows-container__left')) {
      this.revealPreviousImage(this.cont)
    } else if (element.classList.contains('arrows-container__right')) {
      console.log(this.cont)
      this.revealNextImage(this.cont)
      this.cont++
    }
  }

  revealPreviousImage (newPosition) {
    this.elements.imgs[newPosition].classList.remove('img--enable')
    this.elements.imgs[--newPosition].classList.add('img--enable')
    this.cont--
  }

  revealNextImage (newPosition) {
    this.elements.imgs[newPosition].classList.remove('img--enable')
    this.elements.imgs[++newPosition].classList.add('img--enable')
    // this.cont++
  }
}
