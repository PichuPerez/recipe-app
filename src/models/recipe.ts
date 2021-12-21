export interface Recipe {
    idMeal: string
    strMeal: string
    strArea: string
    strCategory: string
    strMealThumb: string
    strInstructions: string
    strSource: string
    strTags: string
    [key: string]: string
}