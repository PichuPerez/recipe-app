import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMealById } from './api'

const RecipeDetail = () => {
    useEffect(() => {
        getMealById('52802').then(res => {
            console.log('get meal', res.data)
        }).catch(e => console.log(e))
    }, [])

    return (
        <div>
            Recipe detail

            <Link to="/">Home</Link>
        </div>
    )
}

export default RecipeDetail
