export class Grid {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.elements = {}
    this.elements.grid = this.node.querySelector('.grid')
    this.createGridElement(this.elements.grid)
  }

  static get contentStructure () {
    return {
      gridElement: (`<div class="grid-element">
                        <img class="serie" src="{src}" alt=""/>
                        <div class="serie-information">
                            <p class="information">"{title}"</p>
                        </div>
                    </div>`)
    }
  }

  createGridElement (grid) {
    let seriesArray = this.data.map(element => {
      return Grid.contentStructure.gridElement.replace('{src}', element.url).replace('{title}', element.title)
    })
    grid.innerHTML = seriesArray.join('')
  }

  updateGrid () {
    console.log('hola')
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
