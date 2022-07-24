import {ingredientsList} from "../../data";
import {createIngredient, createIngredientsHeader} from "../shared/ingredientsList";
// import {
//     addNewIngredient,
//     checkIfStillTyping,
//     filterIngredients, filterIngredientsByCategory, resetCategories,
// } from '../../service/addIngredient.service'
import filter from '../../../assets/images/clear_filter.png'

/* Create Ingredients List */
document.getElementById('container-right').appendChild(createIngredientsHeader())
const createMainIngredientContainer = document.createElement('div')
createMainIngredientContainer.setAttribute('id', 'main-ingredient-container')
ingredientsList.forEach(item => createMainIngredientContainer.appendChild(createIngredient(item.name, item.amount, item.unit, item.url, item.desc, false)))
document.getElementById('container-right').appendChild(createMainIngredientContainer)


/* Search ingredient */
// const createSearchInput = () => {
//     const searchInput = document.createElement('input')
//     searchInput.setAttribute('type', 'text')
//     searchInput.setAttribute('id', 'search-input')
//     searchInput.classList.add('search_input')
//     searchInput.classList.add('search_input')
//     searchInput.setAttribute('placeholder', 'Search ...')
//     searchInput.addEventListener('change', () => filterIngredients(event))
//     searchInput.addEventListener('keydown', () => checkIfStillTyping(event))
//     searchInput.addEventListener('click', () => resetCategories())
//     return document.getElementById('container-left').appendChild(searchInput)
// }
// createSearchInput();


/* Create category filters */
// const createFilterNav = () => {
//     const clearFilterIcon = document.createElement('img')
//     clearFilterIcon.setAttribute('src', `${filter}`)
//     clearFilterIcon.setAttribute('id', 'filters-clear-icon')
//     clearFilterIcon.setAttribute('value', ``)
//     clearFilterIcon.addEventListener('click', () => filterIngredientsByCategory(event))
//     clearFilterIcon.classList.add('filter_icon')
//     const options = ['Vegetables', 'Fruits', 'Meat', 'Dairy', 'Herbs and spices', 'Fish and seafood', 'Nuts and seeds', 'Grains', 'Other']
//     const categoryTilesContainer = document.createElement('div')
//     categoryTilesContainer.classList.add('category_tile_container')
//     categoryTilesContainer.setAttribute('id', `category-tile-container`)
//     options.forEach(item => {
//         const categoryTile = document.createElement('div')
//         categoryTile.classList.add('category_tile')
//         categoryTile.setAttribute('id', `category-${item}`)
//         categoryTile.setAttribute('value', `${item}`)
//         categoryTile.innerHTML = `${item}`
//         categoryTile.addEventListener('click', () => filterIngredientsByCategory(event))
//         categoryTilesContainer.appendChild(categoryTile)
//         return categoryTilesContainer.append(categoryTile)
//     })
//     categoryTilesContainer.append(clearFilterIcon)
//     document.getElementById('container-left').append(categoryTilesContainer)
// }
// createFilterNav();

/* Create Add Ingredient button */
// const createIngredientButton = (content) => {
//     const addIngredientFormContainer = document.createElement('div')
//     const button = document.createElement('button')
//     button.classList.add('add_button')
//     button.setAttribute('id', 'add-ingredient-button')
//     button.innerHTML = `${content}`
//     button.addEventListener('click', () => addNewIngredient())
//     return document.getElementById('container-left').appendChild(button)
// }
// createIngredientButton('Add new ingredient')
