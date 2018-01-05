export class Categories {
  constructor (node, data, callback) {
    this.node = node
    this.data = data
    this.onChange = callback
    this.elements = {}
    this.currentFilter = 'All'
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
      categories[i].addEventListener('click', this.getClickedElement.bind(this))
    }
  }
  getClickedElement (event) {
    if (event.currentTarget !== this.currentFilter) {
      this.node.querySelector('.categorie--selected').classList.remove('categorie--selected')
      console.log(this.node)
      event.currentTarget.classList.add('categorie--selected')
      this.currentFilter = event.currentTarget.dataset.category
      this.onChange(this.currentFilter)
    }
  }
}
