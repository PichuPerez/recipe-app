import React, { useState } from 'react'
import styled from 'styled-components'

const s = {
    Container: styled.div`
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 1000; 
        left: 0;
        top: 0;
        background-color: #000000bd; 
        overflow-x: hidden; 
    `,
    ModalContent: styled.div`
        position: relative;
        top: 5%; 
        width: 95%;
        height: 70%;
        background-color: #ffffff;
        text-align: center; 
        margin: auto; 
        padding: 30px;
    `,
    Input: styled.input`
        width: 95%;
        height: 30px;
        font-size: 14px;
    `
}

interface SearchModalProps {
    onClose: () => void
    onSearch: (searchString: string) => void
}
const SearchModal = ({ onClose, onSearch }: SearchModalProps) => {
    const [searchString, setSearchString] = useState<string>('')
    console.log(searchString)
    return (
        <s.Container>
            <s.ModalContent>
                <s.Input
                    type="text"
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onSearch(searchString)
                        }
                    }}
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <p onClick={onClose}>X Close </p>
                <p onClick={() => onSearch(searchString)}>Search </p>
            </s.ModalContent>
        </s.Container>
    )
}

export default SearchModal
