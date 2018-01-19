export class Grid {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.elements = {}
    this.elements.spot = this.node.querySelector('.grid')
    this.createGridElement(this.elements.spot)
    this.elements.gridElements = this.node.querySelectorAll('.grid__element')
    this.showAllCategories(this.elements.gridElements, 'All')
    this.elements.series = this.node.querySelectorAll('.serie')
    this.elements.serieInformation = this.node.querySelectorAll('.serie__information-container')
    this.elements.currentSerie = ''
    this.setGridAction()
  }

  static get contentStructure () {
    return {
      gridElement: (`<div class="grid__element" data-category="{cat}">
                        <div class="serie">
                          <figure class="serie__front">
                            <img class="serie__image" src="{src}" alt=""/>
                            <div class="serie__information-container">
                              <p class="serie__information">"{title}"</p>
                            </div>
                          </figure>
                          <figure class="serie__back">
                            <p class="serie__information">Description: {content}</p>
                            <p class="serie__information">Year: {year}</p>                            
                          </figure>
                        </div>
                      </div>`)
    }
  }

  createGridElement (grid) {
    let seriesArray = this.data.map(element => {
      return Grid.contentStructure.gridElement.replace('{src}', element.url).replace('{title}', element.title).replace('{cat}', element.category).replace('{content}', element.description).replace('{year}', element.year)
    })
    grid.innerHTML = seriesArray.join('')
  }

  updateGrid (categorySelected) {
    if (categorySelected === 'All') {
      this.showAllCategories(this.elements.gridElements)
    } else {
      this.showSpecificCategory(categorySelected, this.elements.gridElements)
    }
  }

  showAllCategories (gridElements) {
    gridElements.forEach(function (element) {
      element.classList.add('grid__element--active')
    })
  }

  showSpecificCategory (categorySelected, gridElements) {
    gridElements.forEach(element => {
      if (element.dataset.category !== categorySelected) {
        element.classList.remove('grid__element--active')
      } else {
        element.classList.add('grid__element--active')
      }
    })
  }

  setGridMovement (gridElements, movieFlipper, frontDescription) {
    for (let i = 0; i < gridElements.length; i++) {
      gridElements[i].addEventListener('click', function () {
        if (movieFlipper[i].classList.contains('serie--flipped')) {
          movieFlipper[i].classList.remove('serie--flipped')
          frontDescription[i].classList.remove('serie__information-container--disable')
        } else {
          movieFlipper[i].classList.add('serie--flipped')
          // frontDescription[i].classList.add('serie__information-container--disable')
        }
      })
    }
  }

  setGridAction () {
    this.elements.gridElements.forEach(element => {
      element.addEventListener('click', this.flipCard.bind(this))
    })
  }

  flipCard (event) {
    let serieSelected = event.currentTarget
    if (this.elements.currentSerie === '') {
      this.elements.currentSerie = serieSelected
    }
    if (serieSelected === this.elements.currentSerie) {
      this.elements.currentSerie.children[0].classList.toggle('serie--flipped')
    } else {
      this.elements.currentSerie.children[0].classList.remove('serie--flipped')
      this.elements.currentSerie = serieSelected
      this.elements.currentSerie.children[0].classList.add('serie--flipped')
    }
  }
}
