import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMealById } from '../api'
import DetailHeader from '../components/DetailHeader'
import { Recipe } from '../models/recipe'
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { media } from '../utils/media-queries'


const s = {
    Image: styled.img`
        width: 100%;
        height: 50%;
    `,
    RecipeContainer: styled.div`
        display: flex;
        ${media.l}{
            flex-direction: column;
        }
    `,
    TextContainer: styled.div`
        padding: 0px 20px;
    `
}

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState<Recipe>()
    const [ingredientList, setIngredientList] = useState<string[]>()
    let { id } = useParams()

    useEffect(() => {
        if (id) {
            getMealById(id).then(res => {
                const recipe = res.data.meals[0]
                setRecipe(recipe)
            }).catch(e => console.log(e))
        }
    }, [])

    useEffect(() => {
        if (recipe) {
            let ingredients = []
            for (let i = 1; i < 20; i++) {
                const measure = 'strMeasure' + i
                const ingredient = 'strIngredient' + i

                if (recipe[measure].length > 0 && recipe[ingredient].length > 0) {
                    ingredients.push(`${recipe[measure]} - ${recipe[ingredient]}`)
                }
            }
            setIngredientList(ingredients)
        }
    }, [recipe])


    return (
        <>
            <DetailHeader />
            <s.RecipeContainer>
                <s.Image src={recipe?.strMealThumb}></s.Image>
                <s.TextContainer>
                    <h2>{recipe?.strMeal}</h2>
                    <h4>Ingredients</h4>
                    {ingredientList?.map(ingredient =>
                        <p>
                            {ingredient}
                        </p>
                    )}
                    <h4>Instructions</h4>
                    {recipe?.strInstructions}
                </s.TextContainer>
            </s.RecipeContainer>
        </>
    )
}

export default RecipeDetail
