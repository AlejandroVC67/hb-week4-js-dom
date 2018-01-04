import seriesData from './seriesSource.js'
import { Categories } from './categories.js'
import { Grid } from './grid.js'

const categories = []
seriesData.map(element => {
  if (!categories.includes(element.category)) {
    categories.push(element.category)
  }
})
/* eslint-disable */
var grid = new Grid(document.querySelector('.series'), seriesData)
// new Categories(document.querySelector('.series-categories'), categories)
/* eslint-enable */

var filter = new Categories(document.querySelector('.series-categories'), categories, grid)
var categorieSelected = filter.setCategoriesAction(document.querySelectorAll('.categorie'))
console.log(categorieSelected)
// filter.setCategoriesAction(grid.updateGrid)
// filter.updateSeries(grid.updateGrid)
