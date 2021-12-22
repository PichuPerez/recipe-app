import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/media-queries'

const s = {
    Button: styled.button`
        width: 50px;
        height: 50px;
        position: sticky;
        position: -webkit-sticky;
        bottom: 10px;
        margin-left: 50%;
        margin-bottom: 10px;
        border-radius: 50%;
        cursor: pointer;
        color: white;
        background-color: #ea3d6d;
        border: none;
        font-size: 14px;
        ${media.m}{
            margin-left: 88%;
        }
    `
}

interface SearchProps {
    searchClicked: () => void
}
const Search = ({ searchClicked }: SearchProps) => {
    return (
        <s.Button onClick={() => searchClicked()}>
            <FontAwesomeIcon icon={faSearch} />
        </s.Button>
    )
}

export default Search
