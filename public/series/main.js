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
let filter = new Categories(document.querySelector('.series-categories'), categories, onChange)
let grid = new Grid(document.querySelector('.series'), seriesData)
// new Categories(document.querySelector('.series-categories'), categories)
/* eslint-enable */
