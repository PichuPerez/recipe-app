
import axios, { AxiosResponse } from 'axios';

const baseURL = 'https://www.themealdb.com/api/json/v1/1'

export const getFiveRandomMeals = async () => {
    const recipes = await Promise.all([
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`),
        axios.get(`${baseURL}/random.php`)
    ])

    return recipes
}
export const searchMeal = async (searchInput: string) => {
    return await axios.get(`${baseURL}/search.php?s=${searchInput}`)
}
export const getMealById = async (id: string) => {
    return await axios.get(`${baseURL}/lookup.php?i=${id}`)
}
