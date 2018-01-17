import seriesData from './seriesSource.js'
import { Categories } from './categories.js'
import { Grid } from './grid.js'

 const categories = []
 seriesData.map(element => {
   if (!categories.includes(element.category)) {
     categories.push(element.category)
   }
 })

function onChange (currentCategory) {
  grid.updateGrid(currentCategory)
}

/* eslint-disable */
const filter = new Categories(document.querySelector('.filter__list'), categories, onChange)
const grid = new Grid(document.querySelector('.series'), seriesData)
/* eslint-enable */
