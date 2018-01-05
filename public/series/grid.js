export class Grid {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.elements = {}
    this.elements.grid = this.node.querySelector('.grid')
    this.createGridElement(this.elements.grid)
    this.elements.gridElements = this.node.querySelectorAll('.grid-element')
    this.showAllCategories(this.elements.gridElements, 'All')
    this.elements.flippers = this.node.querySelectorAll('.flipper')
    this.elements.movieInformation = this.node.querySelectorAll('.serie-information')
    console.log(this.elements.movieInformation)
    this.setGridMovement(this.elements.gridElements, this.elements.flippers, this.elements.movieInformation)
  }

  static get contentStructure () {
    return {
      gridElement: (`<div class="grid-element" data-category="{cat}">
                        <div class="flipper">
                          <figure class="front">
                            <img class="serie" src="{src}" alt=""/>
                            <div class="serie-information">
                              <p class="information">"{title}"</p>
                            </div>
                          </figure>
                          <figure class="back">
                            <p class="back__elements">Description: {content}</p>
                            <p class="back__elements">Year: {year}</p>                            
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

  updateGrid (categorieSelected) {
    if (categorieSelected === 'All') {
      this.showAllCategories(this.elements.gridElements)
    } else {
      this.showSpecificCategorie(categorieSelected, this.elements.gridElements)
    }
  }

  showAllCategories (gridElements) {
    gridElements.forEach(function (element) {
      element.classList.add('grid-element--active')
    })
  }

  showSpecificCategorie (categorieSelected, gridElements) {
    for (let i = 0; i < gridElements.length; i++) {
      if (gridElements[i].dataset.category !== categorieSelected) {
        gridElements[i].classList.remove('grid-element--active')
      } else {
        gridElements[i].classList.add('grid-element--active')
      }
    }
  }

  setGridMovement (gridElements, movieFlipper, frontDescription) {
    console.log(movieFlipper)
    for (let i = 0; i < gridElements.length; i++) {
      gridElements[i].addEventListener('click', function () {
        if (movieFlipper[i].classList.contains('flipped')) {
          movieFlipper[i].classList.remove('flipped')
          frontDescription[i].classList.remove('serie-information--disable')
        } else {
          movieFlipper[i].classList.add('flipped')
          frontDescription[i].classList.add('serie-information--disable')
        }
      })
    }
  }
}
