export class Grid {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.elements = {}
    this.elements.grid = this.node.querySelector('.grid')
    this.createGridElement(this.elements.grid)
    this.elements.gridElements = this.node.querySelectorAll('.grid-element')
    // this.updateGrid('All')
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

  updateGrid (inputDeCategorie) {
    if (inputDeCategorie === 'All') {
      this.showAllCategories(this.elements.gridElements)
    } else {
      this.showSpecificCategorie(inputDeCategorie, this.elements.gridElements)
    }
  }

  showAllCategories (allCategories) {
    for (let i = 0; i < allCategories.length; i++) {
      allCategories[i].classList.remove('grid-element--inactive')
    }
  }

  showSpecificCategorie (categoriaAMostrar, todosLosGridElements) {
    for (let i = 0; i < todosLosGridElements.length; i++) {
      if (todosLosGridElements[i].dataset.category !== categoriaAMostrar) {
        todosLosGridElements[i].classList.add('grid-element--inactive')
      }
    }
  }

//   identifiedCategories () {
//     let categories = []
//     this.data.map(element => {
//       if (!categories.includes(element.category)) {
//         categories.push(element.category)
//       }
//     })
//     console.log(categories)
//     return categories
//   }
}
