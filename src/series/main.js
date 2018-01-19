import seriesData from './seriesSource.js'
import { Categories } from './categories.js'
import { Grid } from './grid.js'
import DataRetriever from './DataRetriever.js'

const categories = []
// seriesData.map(element => {
//   if (!categories.includes(element.category)) {
//     categories.push(element.category)
//   }
// })
seriesData.forEach(element => {
  if (!categories.includes(element.category)) {
    categories.push(element.category)
  }
})

const URL = 'https://api.myjson.com/bins/8g3o5'
DataRetriever.get(URL, (data) => {
  const grid = new Grid(document.querySelector('.series'), data)
  function onChange (currentCategory) {
    grid.updateGrid(currentCategory)
  }
  const filter = new Categories(document.querySelector('.filter__list'), categories, onChange)
})

/* eslint-disable */
/* eslint-enable */
