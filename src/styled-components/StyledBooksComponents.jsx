import Styled from 'styled-components'

export const Wrapper = Styled.div`
    display: grid;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 0.3fr 0.7fr;
    margin-top: 5vh;
    justify-content:center;

    @media screen and (max-width: 1400px){
        width: 90%;
    }
    @media screen and (max-width: 1249px){
        width: 100%;
    }
    @media screen and (max-width: 769px){
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`
export const CategoryTitleWrapper = Styled.div`
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;
    
    @media screen and (max-width:769px){
        display: none;
    }
`
export const BooksTitleWrapper = Styled.div`
    font-size: 30px;
    padding-left: 20px;
    font-weight: 400;
    display: flex;
`

export const CategoryWrapper = Styled.ul`
    display: grid;
    list-style: none;
    grid-gap: 20px;
    margin-top: 20px;
    width: 250px;
    max-height: 250px;
    
    @media screen and (max-width:769px){
        display: none;
    }
`
export const StyledLi = Styled.li`
    padding: 10px;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-left: 20px;
    border: 1px solid black;
    max-height: 40px;
    max-width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    span {
        display: none;
        
    }

    &:hover{
        span{
            display: block;
            color: white;
            text-decoration: underline;
        }
    }
`
export const BooksWrapper = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 769px){
        display: grid;
        grid-template-columns: 1fr;
    }
`
export const EachBook = Styled.div`
    border: 1px solid #0972bc;
    margin: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 769px){
        .secondColumn{
            margin-right: auto;
        }
    }
`

export const EditCategoryInput = Styled.div`
    height: 40px;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`