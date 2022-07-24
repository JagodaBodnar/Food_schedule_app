export default class SingleIngredient {
    id;
    name;
    calories;
    proteins;
    carbs;
    fats;
    url;
    category

    constructor(id, name, calories, proteins, carbs, fats, url, category) {
        this.id = id;
        this.name = name;
        this.calories = calories;
        this.proteins = proteins;
        this.carbs = carbs;
        this.fats = fats;
        this.url = url;
        this.category = category;
    }

}
