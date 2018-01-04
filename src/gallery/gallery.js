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
    this.setGalleryMovement(this.elements.navegators)
  }

  static get contentStructure () {
    return {
      dot: ` <li class="dots"> <button data-use='navegation' class="dots__style"></button> </li>`,
      imgs: `<li><img class="img" alt="a image of nature" src="{src}"/></li>`
    }
  }

  createImages (imgContainer) {
    let imgArray = this.data.map(element => {
      return Gallery.contentStructure.imgs.replace('{src}', element.url)
    })
    imgContainer.innerHTML = imgArray.join('')
    this.elements.imgs = this.instance.querySelectorAll('.img')
    this.elements.imgs[0].classList.add('img--enable')
  }

  createDots (dotsContainer) {
    let dotsArray = this.data.map(element => {
      return Gallery.contentStructure.dot
    })
    dotsContainer.innerHTML = dotsArray.join('')
    this.elements.dotBtn = this.instance.querySelectorAll('.dots__style')
    this.elements.dotBtn[0].classList.add('dots--selected')
  }

  controlArrows (imgs, arrows) {
    if (this.cont >= 0 && this.cont < imgs.length - 1) {
      arrows[1].classList.add('arrow--enable')
    } else {
      arrows[1].classList.remove('arrow--enable')
    }
    if (this.cont > 0 && this.cont <= imgs.length - 1) {
      arrows[0].classList.add('arrow--enable')
    } else {
      arrows[0].classList.remove('arrow--enable')
    }
  }

  setGalleryMovement (navegators) {
    this.instance.addEventListener('keydown', this.changeImages.bind(this))
    for (let i = 0; i < navegators.length; i++) {
      navegators[i].addEventListener('click', this.changeImages.bind(this))
    }
  }
  changeImages (event) {
    const maxCont = this.cont < this.elements.imgs.length - 1
    const minCont = this.cont >= 0
    const element = event.currentTarget
    const kbCode = event.key
    console.log(kbCode)
    element.focus()
    if (element.classList.contains('arrows-container__left')) {
      if (this.cont <= this.elements.imgs.length - 1 && this.cont > 0) {
        this.revealPreviousImage(this.cont)
      }
    } else if (element.classList.contains('arrows-container__right')) {
      if (minCont && maxCont) {
        this.revealNextImage(this.cont)
      }
    } else if (element.classList.contains('dots__style')) {
      const dotIndex = Array.from(this.elements.dotBtn).indexOf(element)
      this.revealSpecificImage(dotIndex)
    } else if (kbCode === 'ArrowLeft') {
      console.log('entre acá')
      this.revealPreviousImage(this.cont)
    } else if (kbCode === 'ArrowRight') {
      console.log('entre acá 2')
      this.revealNextImage(this.cont)
    }
  }

  revealPreviousImage (newPosition) {
    this.updateDotState('previous', newPosition)
    this.elements.imgs[newPosition].classList.remove('img--enable')
    this.elements.imgs[--newPosition].classList.add('img--enable')
    this.cont--
    this.controlArrows(this.elements.imgs, this.elements.arrows)
  }

  revealNextImage (newPosition) {
    this.updateDotState('next', newPosition)
    this.elements.imgs[newPosition].classList.remove('img--enable')
    this.elements.imgs[++newPosition].classList.add('img--enable')
    this.cont++
    this.controlArrows(this.elements.imgs, this.elements.arrows)
  }

  revealSpecificImage (selectedPosition) {
    this.updateDotState('specific', selectedPosition)
    this.elements.imgs[this.cont].classList.remove('img--enable')
    this.elements.imgs[selectedPosition].classList.add('img--enable')
    this.cont = selectedPosition
    this.controlArrows(this.elements.imgs, this.elements.arrows)
  }

  updateDotState (option, newPosition) {
    if (option === 'next') {
      this.elements.dotBtn[newPosition].classList.remove('dots--selected')
      this.elements.dotBtn[++newPosition].classList.add('dots--selected')
    } else if (option === 'previous') {
      this.elements.dotBtn[newPosition].classList.remove('dots--selected')
      this.elements.dotBtn[--newPosition].classList.add('dots--selected')
    } else if (option === 'specific') {
      this.elements.dotBtn[this.cont].classList.remove('dots--selected')
      this.elements.dotBtn[newPosition].classList.add('dots--selected')
    }
  }
}
