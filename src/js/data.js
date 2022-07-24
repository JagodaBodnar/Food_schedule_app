export const ingredientsList = [
    {
        name: 'Sweet potatoes',
        amount: 200,
        unit: 'g',
        url: '../../../assets/images/sweet_potato.png',
    },
    {
        name: 'Chickpea',
        amount: 450,
        unit: 'g',
        url: '../../../assets/images/chickpea.png',
        desc: 'canned',
    },
    {
        name: 'Chilli pepper',
        amount: 25,
        unit: 'g',
        url: '../../../assets/images/chilli_pepper.png',
        calories: 164,
        proteins: 8.86,
        carbs: 27.42,
        fats: 2.59,
        categoryInput: 'Vegetables'
    },
    {
        name: 'Garlic',
        amount: 2,
        unit: 'cloves',
        url: '../../../assets/images/garlic.png',
    },
    {
        name: 'Ginger',
        amount: 1,
        unit: 'tbs',
        url: '../../../assets/images/ginger.png',
    },
    {
        name: 'Onion',
        amount: 1,
        unit: 'piece',
        url: '../../../assets/images/onion.png'
    },
    {
        name: 'Coconut milk',
        amount: 450,
        unit: 'ml',
        url: '../../../assets/images/coconut_milk.png',
    },
    {
        name: 'Spinach',
        amount: 50,
        unit: 'g',
        url: '../../../assets/images/spinach.png',
    },
    {
        name: 'Olive oil',
        amount: 1,
        unit: 'tbs',
        url: '../../../assets/images/olive_oil.png',
    },
    {
        name: 'Turmeric',
        amount: 0.5,
        unit: 'tsp',
        url: '../../../assets/images/turmeric_powder.png',
        desc: 'powder',
    },
    {
        name: 'Sweet pepper',
        amount: 0.5,
        unit: 'tsp',
        url: '../../../assets/images/sweet_pepper_powder.png',
        desc: 'powder',
    },
    {
        name: 'Chilli pepper',
        amount: 0.5,
        unit: 'tsp',
        url: '../../../assets/images/chilli_pepper_powder.png',
        desc: 'powder',
    },
    {
        name: 'Vegetables cubes',
        amount: 150,
        unit: 'ml',
        url: '../../../assets/images/vegetables_cubes.png',
    },
]
export const instructionRecipeList = [
    {
        step: 1,
        content: 'Heat the olive oil in the large, deep, non-stick frying pan.'
    },
    {
        step: 2,
        content: 'Glaze chopped onions and then add peeled and shredded ginger, shredded garlic and finely chopped chili pepper. Fry for 2 minutes constantly stirring.'
    },
    {
        step: 3,
        content: 'Add peeled and diced sweet potato, add pinch of salt and fry for 2 minutes. Add 1 tbs of coconut milk if needed.'
    },
    {
        step: 4,
        content: 'Add spiced hot pepper, sweet pepper and turmeric 0.5 tsp each and mix together.'
    },
    {
        step: 5,
        content: 'Add boiled canned chickpea with its liquid, veggie broth and coconut milk. Mix everything together and boil for 15 minutes without cover until sweet potatoes are soft. Stir from time to time.'
    },
    {
        step: 6,
        content: 'At the end turn of the heat add spinach and mix together. Serve with boiled yasmine rice.'
    },
]
export const inputsIngredients = [
    {
        name: 'Name',
        type: 'text',
        validationText: 'Please provide a name',
        value: 'name'
    },
    {
        name: 'Calories (per 100g)',
        type: 'number',
        validationText: 'Please provide amount of calories',
        value: 'calories',
        suffix: 'kcal'
    },
    {
        name: 'Proteins (per 100g)',
        type: 'number',
        validationText: 'Please provide amount of proteins',
        value: 'proteins',
        suffix: 'g'
    },
    {
        name: 'Carbs (per 100g)',
        type: 'number',
        validationText: 'Please provide amount of carbs',
        value: 'carbs',
        suffix: 'g'
    },
    {
        name: 'Fats (per 100g)',
        type: 'number',
        validationText: 'Please provide amount of fats',
        value: 'fats',
        suffix: 'g'
    },
    {
        name: 'Image url',
        type: 'text',
        validationText: 'Please paste image url',
        value: 'image',
    },
]

