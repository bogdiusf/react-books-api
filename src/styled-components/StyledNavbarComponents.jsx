import Styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = Styled(Link)`
    font-size: 25px;
    color: black;
    text-decoration: none;
    &:hover{
        transition: 0.5s;
        color: black;
}
`
export const StyledTitle = Styled.div`
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: fadeIn 2s;
    font-size: 35px;
    color: white;
    width: fit-content;
    align-items: center;
    margin-left: 5%;
    display: flex;
    @media screen and (max-width: 768px){
        font-size: 30px;
        position: absolute;
        margin-top: 2vh;
    }
`
