import React, { useEffect, useState } from 'react'
import { getFiveRandomMeals, searchMeal } from './api'
import styled from 'styled-components'
import logo from './images/logo.png'
import background from './images/home-background.jpeg'
import { Recipe } from './models/recipe'
import { Link } from 'react-router-dom'
import { media } from './utils/media-queries'

const s = {
    Banner: styled.div`
        width: 100%;
        height: 50vh;
        background-image:url(${background});
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
    `,
    Logo: styled.img`
        margin: auto;
        width: 250px;
    `,
    Container: styled.div`
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
}
const Home = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setRecipes([])
        getFiveRandomMeals().then(res => {
            console.log(res)
            setRecipes(res)
            setLoading(false)
        }).catch(e => {
            console.log(e)
            setLoading(false)
        })

        // searchMeal('pie').then(res => {
        //     console.log('search meal', res.data)
        //     setLoading(false)
        // }).catch(e => {
        //     console.log(e)
        //     setLoading(false)
        // })
    }, [])

    return (
        <>
            <s.Banner>
                <s.Logo src={logo}></s.Logo>
            </s.Banner>
            <s.Container>
                <h2>Recipes of the day</h2>
                {loading && <div>Loading recipes...</div>}
                {recipes && recipes.map(recipe => {
                    return (
                        <div>
                            {recipe.strMeal}
                            <Link to={`/${recipe.idMeal}`}>View recipe</Link>
                        </div>
                    )
                })}
            </s.Container>
        </>
    )
}

export default Home
