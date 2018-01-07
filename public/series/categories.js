export class Categories {
  constructor (node, data, callback) {
    this.node = node
    this.data = data
    this.onChange = callback
    this.elements = {}
    this.currentFilter = 'All'
    this.createCategories(this.node)
    this.elements.categories = this.node.querySelectorAll('.filter__list__element')
    this.setCategoriesAction(this.elements.categories)
  }

  static get contentStructure () {
    return {
      dots: `<li class="dots"><button class="filter__list__element" data-category="{cat}">{cat}</button></li>`
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
      this.node.querySelector('.filter__list__element--selected').classList.remove('filter__list__element--selected')
      event.currentTarget.classList.add('filter__list__element--selected')
      this.currentFilter = event.currentTarget.dataset.category
      this.onChange(this.currentFilter)
    }
  }
}
