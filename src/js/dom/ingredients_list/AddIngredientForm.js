import {cancelForm, checkInput, inputTouched, submitForm} from "../../service/addIngredient.service";
import {inputsIngredients} from "../../data";


export const addIngredientForm = () => {
    const form = document.createElement('form')
    form.classList.add('form')
    form.setAttribute('id', 'add-ingredient-form')
    const inputContainer = document.createElement('div')
    inputContainer.classList.add('line')

    inputsIngredients.forEach(item => {
        const itemWrapper = document.createElement('div')
        itemWrapper.classList.add('input_wrapper')
        itemWrapper.setAttribute('id', `${item.value}InputWrapper`)
        itemWrapper.classList.add(`${item.suffix && item.suffix}`)
        const validation = document.createElement('div')
        validation.classList.add('validation_msg')
        validation.innerHTML = `${item.validationText}`
        const input = document.createElement('input')
        input.addEventListener('change', () => checkInput(`${item.value}`))
        input.addEventListener('focusin', () => inputTouched(`${item.value}`))
        input.addEventListener('focusout', () => checkInput(`${item.value}`))
        input.setAttribute('id', `input_${item.value}`)
        const label = document.createElement('label')
        label.classList.add('input_label')
        label.setAttribute('for', `input_${item.value}`)
        label.innerHTML = `${item.name}`
        input.classList.add('add_ingredient_form_input')
        itemWrapper.append(input, label, validation)
        return inputContainer.append(itemWrapper)
    })
    const itemWrapper = document.createElement('div')
    itemWrapper.classList.add('input_wrapper')
    itemWrapper.setAttribute('id', `categoryInputWrapper`)
    const validation = document.createElement('div')
    validation.classList.add('validation_msg')
    validation.innerHTML = `Please select category`
    const category = document.createElement('select')
    category.addEventListener('change', () => checkInput(`category`))
    category.addEventListener('focusin', () => inputTouched(`category`))
    category.addEventListener('focusout', () => checkInput(`category`))

    category.setAttribute('id', `input_category`)
    category.setAttribute('name', "input_category")
    category.classList.add('add_ingredient_form_input')
    const label = document.createElement('label')
    label.classList.add('input_label')
    label.setAttribute('for', `input_category`)
    label.innerHTML = 'Category'

    const options = ['', 'Vegetables', 'Fruits', 'Meat', 'Dairy', 'Herbs and spices', 'Fish and seafood', 'Nuts and seeds', 'Grains', 'Other']
    options.forEach(item => {
            const option = document.createElement('option')
            option.value = `${item}`
            option.text = `${item}`
            category.appendChild(option)
        }
    )
    itemWrapper.append(category, label, validation)
    inputContainer.append(itemWrapper)


    const saveButton = document.createElement('button')
    saveButton.classList.add('form_save_button')
    saveButton.innerHTML = 'Save'
    const cancelButton = document.createElement('button')
    cancelButton.classList.add('form_cancel_button')
    cancelButton.innerHTML = `Cancel`
    saveButton.addEventListener('click', ()=>submitForm(event))
    cancelButton.addEventListener('click', ()=>cancelForm(event))
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons_container')
    buttonsContainer.append(cancelButton,saveButton)

    form.append(inputContainer, buttonsContainer)
    return document.getElementById('add-ingredient-container').appendChild(form);
}
