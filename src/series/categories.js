export class Categories {
  constructor (node, data, gridNode) {
    this.node = node
    this.data = data
    this.gridNode = gridNode
    // console.log(this.gridNode)
    this.elements = {}
    this.createCategories(this.node)
    this.elements.categories = this.node.querySelectorAll('.categorie')
    this.setCategoriesAction(this.elements.categories)
  }

  static get contentStructure () {
    return {
      dots: `<li class="dots"><button class="categorie" data-category="{cat}">{cat}</button></li>`
    }
  }

  createCategories (section) {
    let categoriesArray = this.data.map(element => {
      return Categories.contentStructure.dots.replace('{cat}', element).replace('{cat}', element)
    })
    section.innerHTML += categoriesArray.join('')
  }

  setCategoriesAction (categories) {
    // console.log(updateGrid)
    for (let i = 0; i < categories.length; i++) {
      categories[i].addEventListener('click', function () {
        // Actualizando los filtros
        for (let i = 0; i < categories.length; i++) {
          categories[i].classList.remove('categorie--selected')
          if (categories[i].dataset.category === this.dataset.category) {
            categories[i].classList.add('categorie--selected')
            console.log(categories[i])
            return categories[i]
          }
        }
      })
    }
  }
}
