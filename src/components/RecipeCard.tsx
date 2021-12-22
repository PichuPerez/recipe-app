import React from 'react'
import { Recipe } from '../models/recipe'
import styled from 'styled-components'
import { media } from '../utils/media-queries'
import { useNavigate } from 'react-router-dom'


interface RecipeCardProps {
    recipe: Recipe
}

interface ImageProps {
    imageUrl: string;
}
const s = {
    CardContainer: styled.div`
        border: 1px solid #80808036;
        height: 400px;
        border-radius: 4px;
        margin: 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        ${media.m}{
            width: 98%;
        }
        &:hover{
            cursor: pointer;
        }
    `,
    Image: styled.div<ImageProps>`
        background-image: url(${(props) => props.imageUrl});
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 250px;  
        border-radius: 4px 4px 0px 0px;
    `,
    Title: styled.h2`
        margin-left: 15px;
        margin-right: 15px;
    `,
    Text: styled.p`
        margin: 0px;
        margin-left: 15px;

    `
}
const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const navigate = useNavigate();

    return (
        <s.CardContainer onClick={() => navigate(`/${recipe.idMeal}`)}>
            <s.Image imageUrl={recipe.strMealThumb} />
            <s.Title>{recipe.strMeal}</s.Title>
            <s.Text>{recipe.strArea}</s.Text>
            <s.Text>{recipe.strTags}</s.Text>
        </s.CardContainer>
    )
}

export default RecipeCard
