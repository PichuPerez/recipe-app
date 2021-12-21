import React, { useEffect } from 'react'
import { getFiveRandomMeals, searchMeal, getMealById } from './api'

const Home = () => {

    useEffect(() => {
        getFiveRandomMeals().then(res => {
            console.log(res)
        }).catch(e => console.log(e))

        searchMeal('Pie').then(res => {
            console.log('search', res.data)
        }).catch(e => console.log(e))

        getMealById('52802').then(res => {
            console.log('get meal', res.data)
        }).catch(e => console.log(e))
    }, [])

    return (
        <div>
            home
        </div>
    )
}

export default Home
