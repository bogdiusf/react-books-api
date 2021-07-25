import React, { useContext } from 'react'
import Styled from 'styled-components'
import { DataFromApiContext } from '../context/DataFromApi'
import '../styles/books.css'

const Wrapper = Styled.div`
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 30% 70%;
    margin-top: 5vh;
`
const CategoryTitleWrapper = Styled.div`
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;
    @media screen and (max-width:768px){
        display: none;
    }
`
const BooksTitleWrapper = Styled.div`
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;
`

const CategoryWrapper = Styled.ul`
    display: grid;
    list-style: none;
    grid-gap: 20px;
    margin-top: 30px;
    width: 250px;

    @media screen and (max-width:768px){
        display: none;
    }

`
const StyledLi = Styled.li`
    padding: 10px;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: 20px;
    border: 1px solid black;
`

export default function AllBooks() {

    const value = useContext(DataFromApiContext)
   const {categories} = value
    return (
        <Wrapper>
            <CategoryTitleWrapper>Categories</CategoryTitleWrapper>
            <BooksTitleWrapper>Books</BooksTitleWrapper>
            <CategoryWrapper>
                <StyledLi style={{backgroundColor:'#f26c4f'}} className="categories">All</StyledLi>
                {
                    categories.map(item => (
                        <StyledLi style={{backgroundColor:`${item.color}`}} key={item.id} className="categories">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</StyledLi>
                    ))
                }
            </CategoryWrapper>
            <div></div>
        </Wrapper>
    )
}
