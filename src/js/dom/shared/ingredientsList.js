export const createIngredient = (name, amount, unit, url, desc, withAmount) => {
    const ingredientContainer = document.createElement('div')
    ingredientContainer.classList.add('ingredient_container')
    const ingredientImgWrapper = document.createElement('div')
    ingredientImgWrapper.classList.add('ingredient_img_wrapper')
    const ingredientImg = document.createElement('img')
    ingredientImg.setAttribute('src', `${url}`)
    ingredientImg.classList.add('ingredient_img')
    const ingredientTitle = document.createElement('h6')
    ingredientTitle.innerHTML = `${name}`
    ingredientTitle.classList.add('ingredient_title')
    ingredientImgWrapper.appendChild(ingredientImg)
    const additionalDescription = document.createElement('p')
    additionalDescription.classList.add('ingredient_additional_desc')
    additionalDescription.innerHTML = `${desc}`
    const ingredientContent = document.createElement('div')
    ingredientContainer.classList.add('ingredient_content')
    ingredientContent.appendChild(ingredientTitle)
    desc && ingredientContent.appendChild(additionalDescription)
    ingredientContainer.append(ingredientImgWrapper, ingredientContent)
    if (withAmount) {
        const ingredientAmount = document.createElement('p')
        ingredientAmount.classList.add('ingredient_amount')
        ingredientAmount.innerHTML = ` ${amount} ${unit}`
        ingredientContainer.append(ingredientAmount)
    }
    return ingredientContainer;
}
export const createIngredientsHeader = () => {
    const ingredientsHeaderWrapper = document.createElement('div')
    ingredientsHeaderWrapper.classList.add('ingredient_header_wrapper')
    const ingredientsSectionHeader = document.createElement('h3')
    ingredientsSectionHeader.innerHTML = `Ingredients`
    ingredientsHeaderWrapper.appendChild(ingredientsSectionHeader)
    return ingredientsHeaderWrapper;
}



