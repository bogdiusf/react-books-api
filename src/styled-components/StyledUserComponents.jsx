import Styled from 'styled-components'

export const Wrapper = Styled.div`
    height: 90vh;
    display: grid;
    grid-template-rows: 40% 60%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 430px){
        margin-top: 40px;
    }
`
export const WrapperChildOne = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid gray;
    div:nth-child(3){
        font-size:25px;
    }

    @media screen and (max-width: 430px){
        padding-bottom: 40px;
    }
`
export const WrapperChildTwo = Styled.div`
    padding: 40px 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 25px;
`
export const ProfilePic = Styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
`
export const Name = Styled.div`
    display: flex;
    gap: 5px;
    font-size: 30px;
    font-weight: bold;
`