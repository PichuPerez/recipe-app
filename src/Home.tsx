import React, { useEffect, useState } from 'react'
import { getFiveRandomMeals, searchMeal } from './api'
import styled from 'styled-components'
import logo from './images/logo.png'
import background from './images/home-background.jpeg'
import { Recipe } from './models/recipe'
import { Link } from 'react-router-dom'
import { media } from './utils/media-queries'
import RecipeCard from './components/RecipeCard'
import Search from './components/Search'
import SearchModal from './components/SearchModal'

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
    HomeTitle: styled.div`
        display: flex;
        justify-content: center;
        color: grey;
    `,
    Container: styled.div`
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
        ${media.m}{
            flex-direction: column;
        }
    `
}
const Home = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchString, setSearchString] = useState<string>('')

    useEffect(() => {
        setLoading(true)
        setRecipes([])
        if (searchString && setSearchString.length > 0) {
            searchMeal(searchString).then(res => {
                setRecipes(res.data.meals)
                setLoading(false)
            }).catch(e => {
                console.log(e)
                setLoading(false)
            })
        } else {
            getFiveRandomMeals().then(res => {
                setRecipes(res)
                setLoading(false)
            }).catch(e => {
                console.log(e)
                setLoading(false)
            })
        }

    }, [searchString])

    return (
        <>
            <s.Banner>
                <s.Logo src={logo}></s.Logo>
            </s.Banner>
            <s.HomeTitle>
                <h2>
                    Recipes of the day
                </h2>
            </s.HomeTitle>
            <s.Container>
                {loading && <div>Loading recipes...</div>}
                {recipes && recipes.map(recipe =>
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                )}
            </s.Container>
            {!loading && <Search searchClicked={() => setShowSearch(true)} />}
            {showSearch && <SearchModal onClose={() => setShowSearch(false)}
                onSearch={(searchString) => {
                    setShowSearch(false)
                    setSearchString(searchString)
                }} />
            }
        </>
    )
}

export default Home
