export class Grid {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.elements = {}
    this.elements.grid = this.node.querySelector('.grid')
    this.createGridElement(this.elements.grid)
    this.elements.gridElements = this.node.querySelectorAll('.grid-element')
    this.showAllCategories(this.elements.gridElements, 'All')
  }

  static get contentStructure () {
    return {
      gridElement: (`<div class="grid-element" data-category="{cat}">
                        <img class="serie" src="{src}" alt=""/>
                        <div class="serie-information">
                            <p class="information">"{title}"</p>
                        </div>
                    </div>`)
    }
  }

  createGridElement (grid) {
    let seriesArray = this.data.map(element => {
      return Grid.contentStructure.gridElement.replace('{src}', element.url).replace('{title}', element.title).replace('{cat}', element.category)
    })
    grid.innerHTML = seriesArray.join('')
  }

  updateGrid (categorieSelected) {
    console.log(categorieSelected)
    if (categorieSelected === 'All') {
      this.showAllCategories(this.elements.gridElements, categorieSelected)
    } else {
      this.showSpecificCategorie(categorieSelected, this.elements.gridElements)
    }
  }

  showAllCategories (gridElements, categorieSelected) {
    for (let i = 0; i < gridElements.length; i++) {
      gridElements[i].classList.add('grid-element--active')
    }
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
}
