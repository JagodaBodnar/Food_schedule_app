import SingleIngredient from "../dom/single_ingredient/SingleIngredient";
import {ingredientsList} from "../../data/ingredients";


export default class IngredientsService {
    static #ingredients = [...ingredientsList.map(item => new SingleIngredient(item.id, item.name, item.calories, item.proteins, item.carbs, item.fats, item.url, item.category))]

    static getAllIngredients() {
        return IngredientsService.#ingredients;
    }

    static createIngredient(product) {
        const ingredientsListContainer = document.createElement('div');
        ingredientsListContainer.className = 'ingredients_list_container'

        product && product.forEach(item => {
            const singleIngredientContainer = document.createElement('div');
            singleIngredientContainer.className = 'ingredient_container';
            const ingredientImgWrapper = document.createElement('div');
            ingredientImgWrapper.className = 'ingredient_img_wrapper';

            const ingredientImg = document.createElement('img');
            ingredientImg.setAttribute('src', `${item.url}`)
            ingredientImg.className = 'ingredient_img';

            const ingredientName = document.createElement('h6')
            ingredientName.innerHTML = `${item.name}`
            ingredientName.className = 'ingredient_name'

            ingredientImgWrapper.appendChild(ingredientImg)
            singleIngredientContainer.append(ingredientImgWrapper, ingredientName)
            ingredientsListContainer.appendChild(singleIngredientContainer)
        })

        return ingredientsListContainer
    }


}
