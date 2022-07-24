import {addIngredientForm} from '../dom/ingredients_list/AddIngredientForm'
import {ingredientsList} from "../../data/ingredients";
import {createIngredient} from "../dom/shared/ingredientsList";
import filter from '../../assets/images/filter.png'

export default class AddIngredientService {
    addNewIngredient() {
        addIngredientForm()
        const disableButton = document.getElementById('add-ingredient-button')
        disableButton.setAttribute('disabled', 'true')
    }

    inputTouched(value) {
        const input = document.getElementById(`input_${value}`)
        input.setAttribute('dirty', 'true')
    }

    checkInput(value) {
        const input = document.getElementById(`input_${value}`)
        if (input.getAttribute('dirty') === 'true') {
            if (event.target.value.trim().length !== 0) {
                input.classList.add('not_empty')
                input.setAttribute('valid', 'valid')
            } else if (event.target.value.trim().length === 0) {
                input.classList.remove('not_empty')
                input.classList.add('empty')
                input.setAttribute('valid', 'invalid')
                input.value = ''
            }
        } else {
            input.classList.remove('not_empty')
            input.classList.remove('empty')
            input.setAttribute('valid', 'invalid')
        }
    }

    cancelForm(event) {
        event.preventDefault();
        const selectButton = document.getElementById('add-ingredient-button')
        selectButton.removeAttribute('disabled')
        const ingredientsContainer = document.getElementById('add-ingredient-container')
        ingredientsContainer.innerHTML = ''
        ingredientsContainer.append(selectButton)
    }

    submitForm(event) {
        event.preventDefault()
        const nameInput = document.getElementById('input_name')
        const caloriesInput = document.getElementById('input_calories')
        const proteinsInput = document.getElementById('input_proteins')
        const carbsInput = document.getElementById('input_carbs')
        const fatsInput = document.getElementById('input_fats')
        const categoryInput = document.getElementById('input_category')
        const imageInput = document.getElementById('input_image')
        /* dodac konkretne rozszerzenia plikow*/
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        const selectAllInputs = document.querySelectorAll('.add_ingredient_form_input')
        if (nameInput.value.trim() && caloriesInput.value.trim() && proteinsInput.value.trim() && carbsInput.value.trim() && fatsInput.value.trim() && categoryInput.value.trim()) {
            const selectForm = document.getElementById('add-ingredient-form')
            selectForm.innerHTML = ''
            const formValues = {
                name: `${nameInput.value}`,
                calories: `${caloriesInput.value}`,
                proteins: `${proteinsInput.value}`,
                carbs: `${carbsInput.value}`,
                fats: `${fatsInput.value}`,
                categoryInput: `${categoryInput.value}`,
                url: `${imageInput.value}`

            }
            ingredientsList.push(formValues)
            ingredientsList.forEach(item => document.getElementById('container-right').appendChild(createIngredient(item.name, item.amount, item.unit, item.url, item.desc, false)))
            const disableButton = document.getElementById('add-ingredient-button')
            disableButton.removeAttribute('disabled')
        } else {
            selectAllInputs.forEach(element => !element.getAttribute('valid') && element.classList.add('empty'))
        }
    }

    filterIngredients(event) {
        const value = event.target.value
        const ingredientsListFilter = ingredientsList.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        const rightContainer = document.getElementById('main-ingredient-container')
        rightContainer.innerHTML = ''
        return ingredientsListFilter.forEach(item => rightContainer.appendChild(createIngredient(item.name, item.amount, item.unit, item.url, item.desc, false)))
    }

    resetCategories() {
        const selectAllCategories = document.querySelectorAll('.category_tile')
        selectAllCategories.forEach(item => item.style.backgroundColor = 'transparent')
    }

    checkIfStillTyping(event) {
        const checking = setInterval(() => {
            clearInterval(checking)
            filterIngredients(event)
        }, 1000)
    }

    filterIngredientsByCategory(event) {
        addFilterBackgroundColor(event)
        const value = event.target.getAttribute('value')
        const clearSearchInput = document.getElementById('search-input')
        clearSearchInput.value = ''
        if (value !== '') {
            const selectFilterIcon = document.getElementById('filters-clear-icon')
            selectFilterIcon.setAttribute('src', `${filter}`)
        }
        const ingredientsListFilter = ingredientsList.filter(item => {
            if (value === '') {
                return item
            }
            return item.categoryInput === value
        })
        const rightContainer = document.getElementById('main-ingredient-container')
        rightContainer.innerHTML = ''
        if (ingredientsListFilter.length === 0) {
            rightContainer.innerHTML = 'No results'
        }

        return ingredientsListFilter.forEach(item => rightContainer.appendChild(createIngredient(item.name, item.amount, item.unit, item.url, item.desc, false)))
    }

    addFilterBackgroundColor(event) {
        const selectAllCategories = document.querySelectorAll('.category_tile')
        selectAllCategories.forEach(item => item.style.backgroundColor = 'transparent')
        event.target.style.backgroundColor = 'white'
    }

}

