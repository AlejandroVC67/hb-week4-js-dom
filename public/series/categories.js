export class Categories {
  constructor (node, data) {
    this.node = node
    this.data = data
    this.elements = {}
    this.createCategories(this.node)
    this.elements.categories = this.node.querySelectorAll('.categorie')
    this.setCategoriesAction(this.elements.categories)
  }

  static get contentStructure () {
    return {
      dots: `<li class="dots" data-category="{cat}"><button class="categorie">{cat}</button></li>`
    }
  }

  createCategories (section) {
    let categoriesArray = this.data.map(element => {
      return Categories.contentStructure.dots.replace('{cat}', element).replace('{cat}', element)
    })
    section.innerHTML += categoriesArray.join('')
  }

  setCategoriesAction (categories, updateGrid) {
    for (let i = 0; i < categories.length; i++) {
      categories[i].addEventListener('click', updateGrid)
    }
  }
}
