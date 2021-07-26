import Styled from 'styled-components'

export const Wrapper = Styled.div`
    display: grid;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 30% 70%;
    margin-top: 5vh;
    justify-content:center;

    @media screen and (max-width:1400px){
        width: 90%;
        grid-template-columns: 25% 80%;
    }
`
export const CategoryTitleWrapper = Styled.div`
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;
    
    @media screen and (max-width:768px){
        display: none;
    }
`
export const BooksTitleWrapper = Styled.div`
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;
`

export const CategoryWrapper = Styled.ul`
    display: grid;
    list-style: none;
    grid-gap: 20px;
    margin-top: 30px;
    width: 250px;
    max-height: 250px;
    
    @media screen and (max-width:768px){
        display: none;
    }

`
export const StyledLi = Styled.li`
    padding: 10px;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: 20px;
    border: 1px solid black;
    max-height: 40px;
    max-width: 250px;
    display: flex;
    justify-content: space-between;
`
export const BooksWrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 100px;
`
export const EachBook = Styled.div`
    border: 1px solid #0972bc;
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`