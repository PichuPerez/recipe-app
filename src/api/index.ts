
import axios from 'axios';
import { Recipe } from '../models/recipe';

const baseURL = 'https://www.themealdb.com/api/json/v1/1'

export const getFiveRandomMeals = async (): Promise<Recipe[]> => {
    const data = await Promise.all([
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`)
    ])

    const recipes = data.map(d => d.data.meals[0])

    return recipes as Recipe[]
}
export const searchMeal = async (searchInput: string) => {
    return await axios.get(`${baseURL}/search.php?s=${searchInput}`)
}
export const getMealById = async (id: string) => {
    return await axios.get(`${baseURL}/lookup.php?i=${id}`)
}
