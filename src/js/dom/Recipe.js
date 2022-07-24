import {ingredientsList, instructionRecipeList} from '../data'
import {createIngredient, createIngredientsHeader} from './shared/ingredientsList'

/* Recipe header */

const createRecipeName = (name) => {
    const recipeNameContainer = document.createElement('div')
    const recipeName = document.createElement('h1')
    recipeName.innerHTML = `${name}`
    recipeNameContainer.appendChild(recipeName)
    return document.getElementById('container-right').appendChild(recipeNameContainer)
}


createRecipeName('Cheakpea & <br>' +
    'sweet potato curry')


/* Preparation time */

const createPreparationTimeRecipe = (prepTime, cookTime) => {
    const preparationContainer = document.createElement('div')
    preparationContainer.classList.add('preparation_time_container')
    const timeIcon = document.createElement('img')
    timeIcon.setAttribute('src', '../../../assets/images/clock.png')
    timeIcon.classList.add('time_img')
    const preparationTimeWrapper = document.createElement('div')
    preparationTimeWrapper.classList.add('preparation_time_wrapper')
    const preparationTime = document.createElement('p')
    preparationTime.classList.add('recipe_time')
    preparationTime.innerHTML = `Prep: ${prepTime} min`
    const cookingTime = document.createElement('p')
    cookingTime.classList.add('recipe_time')
    cookingTime.innerHTML = `Cook: ${cookTime} min`
    preparationContainer.appendChild(timeIcon)
    preparationTimeWrapper.appendChild(preparationTime)
    preparationTimeWrapper.appendChild(cookingTime)
    preparationContainer.appendChild(preparationTimeWrapper)
    return document.getElementById('container-right').appendChild(preparationContainer)
}

createPreparationTimeRecipe(20, 15)

/* Nutrition per serving */

const createNutritionPerServing = () => {

    const nutritionContainer = document.createElement('div')
    nutritionContainer.classList.add('nutrition_container')
    const nutritionWrapper = document.createElement('div')
    nutritionWrapper.classList.add('nutrition_wrapper')
    nutritionContainer.setAttribute('id', 'nutrition-container')
    const nutritionTitle = document.createElement('h6')
    nutritionTitle.innerHTML = "Nutrition per serving:"
    nutritionContainer.appendChild(nutritionTitle)
    nutritionContainer.appendChild(nutritionWrapper)
    let nutritionArray = [{title: 'Calories', value: '650'}, {
        title: 'Proteins',
        value: '24.5',
        unit: 'g'
    }, {title: 'Carbs', value: '95.3', unit: 'g'}, {title: 'Fats', value: '14.3', unit: 'g'}]
    nutritionArray.forEach(item => nutritionWrapper.appendChild(createNutritionValue(item.title, item.value, item.unit)))
    return document.getElementById('container-right').appendChild(nutritionContainer)
}
const createNutritionValue = (subtitle, value, unit) => {
    const nutritionContent = document.createElement('div')
    const nutritionSubtitle = document.createElement('p')
    nutritionSubtitle.classList.add('nutrition_subtitle')
    nutritionContent.classList.add('nutrition_content')
    nutritionSubtitle.classList.add('nutrition_subtitle')
    nutritionSubtitle.innerHTML = `${subtitle}`
    const nutritionValueWrapper = document.createElement('div')
    nutritionValueWrapper.classList.add('nutrition_value_wrapper')
    const nutritionValue = document.createElement('p')
    nutritionValue.classList.add('nutrition_value')
    nutritionValue.innerHTML = `${value}${unit ? unit : ''}`
    nutritionValueWrapper.appendChild(nutritionValue)
    nutritionContent.appendChild(nutritionValueWrapper)
    nutritionContent.appendChild(nutritionSubtitle)
    return nutritionContent
}
createNutritionPerServing()


/* Ingredients list */
document.getElementById('container-left').appendChild(createIngredientsHeader())
ingredientsList.forEach(item => document.getElementById('container-left').appendChild(createIngredient(item.name, item.amount, item.unit, item.url, item.desc, true)))

const createInstructionHeader = () => {
    const instructionHeaderWrapper = document.createElement('div')
    instructionHeaderWrapper.classList.add('instruction_header_wrapper')
    const instructionSectionHeader = document.createElement('h3')
    instructionSectionHeader.innerHTML = `Instruction`
    instructionHeaderWrapper.appendChild(instructionSectionHeader)
    return document.getElementById('container-right').appendChild(instructionHeaderWrapper)
}
createInstructionHeader()

const createRecipeInstruction = (step, content) => {
    const recipeInstructionContainer = document.createElement('div')
    recipeInstructionContainer.classList.add('instruction_container')
    const recipeStepWrapper = document.createElement('div')
    recipeStepWrapper.classList.add('step_wrapper')
    const recipeStepNumber = document.createElement('h3')
    recipeStepNumber.classList.add('step_number')
    recipeStepNumber.innerHTML = `${step}`
    recipeStepWrapper.appendChild(recipeStepNumber)
    recipeInstructionContainer.appendChild(recipeStepWrapper)
    const recipeContent = document.createElement('p')
    recipeContent.classList.add('step_content')
    recipeContent.innerHTML = `${content}`
    recipeInstructionContainer.appendChild(recipeContent)
    return recipeInstructionContainer
}

instructionRecipeList.forEach(item => document.getElementById('container-right').appendChild(createRecipeInstruction(item.step, item.content)))
