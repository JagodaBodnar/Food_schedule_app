import '../css/index.css'
import './dom/shared/mainTemplate'
import IngredientsService from "./service/IngredientsService";
import HeaderService from "./service/HeaderService";
// import './dom/Recipe'

const createMainTemplate = () => {
    const leftContainer = document.createElement('div')
    leftContainer.className = 'container_left'
    leftContainer.setAttribute('id', 'container-left')

    const rightContainer = document.createElement('div')
    rightContainer.className = 'container_right'
    rightContainer.setAttribute('id', 'container-right')

    return document.getElementById('single-recipe').append(leftContainer, rightContainer)
}
createMainTemplate()


const loadIngredientsList = () => {
    const ingredientsHeader = HeaderService.createHeader('Ingredients')
    const getAllIngredients = IngredientsService.createIngredient(IngredientsService.getAllIngredients())
    return document.getElementById('container-right').append(ingredientsHeader, getAllIngredients)
}
loadIngredientsList()

