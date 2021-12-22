import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

const s = {
    HeaderContainer: styled.div`
        display: flex;
        justify-content: space-between;
        background-color: grey;
        padding: 10px 20px;
        color: white;
        font-size: 18px;
    `
}
const DetailHeader = () => {
    let { id } = useParams()
    const [favorites, setFavorites] = useState<string[]>([])
    const [isFavorite, setIsFavorite] = useState<boolean>()

    const handleFavoriteClick = () => {
        if (id) {
            if (isFavorite) {
                let newFav = [...favorites].filter(fav => fav !== id)
                setFavorites(newFav.filter(fav => fav !== id))
                localStorage.setItem('favorites', JSON.stringify(newFav))
            } else {
                let newFav = [...favorites, id]
                setFavorites(newFav)
                localStorage.setItem('favorites', JSON.stringify(newFav));
            }
        }
    }

    useEffect(() => {
        setFavorites(JSON.parse(
            localStorage.getItem('favorites') ?? '[]',
        ))
    }, []);

    useEffect(() => {
        if (id) {
            setIsFavorite(favorites.includes(id))
        }
    }, [favorites]);

    return (
        <s.HeaderContainer>
            <Link to="/">
                <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
            </Link>
            <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite ? 'red ' : 'white' }} onClick={() => handleFavoriteClick()} />
        </s.HeaderContainer>
    )
}

export default DetailHeader
