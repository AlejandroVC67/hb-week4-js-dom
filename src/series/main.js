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
new Grid(document.querySelector('.series'), seriesData)
// new Categories(document.querySelector('.series-categories'), categories)
/* eslint-enable */

var a = new Categories(document.querySelector('.series-categories'), categories)
a.setCategoriesAction(new Grid(document.querySelector('.series'), seriesData).updateGrid)
