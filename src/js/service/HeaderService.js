export default class HeaderService{
    static createHeader(content) {
        const ingredientsHeaderWrapper = document.createElement('div')
        ingredientsHeaderWrapper.className = "header_wrapper"
        const ingredientsSectionHeader = document.createElement('h3')
        ingredientsSectionHeader.innerHTML = `${content}`
        ingredientsHeaderWrapper.appendChild(ingredientsSectionHeader)
        return ingredientsHeaderWrapper;
    }
}
