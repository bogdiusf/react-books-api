import React, { useContext } from 'react'
import { DataFromApiContext } from '../context/DataFromApi'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    height: 90vh;
    display: grid;
    grid-template-rows: 40% 60%;
`
const WrapperChildOne = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid gray;

    div:nth-child(3){
        font-size:25px;
    }
`
const WrapperChildTwo = Styled.div`
    padding: 40px 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 25px;
`
const ProfilePic = Styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
`
const Name = Styled.div`
    display: flex;
    gap: 5px;
    font-size: 30px;
    font-weight: bold;
`

export default function User() {

    const value = useContext(DataFromApiContext)
    const { user } = value
    return (
        <Wrapper>
            <WrapperChildOne>
                <ProfilePic src={user?.avatar}/>
                <Name>
                    <div>{user?.first_name}</div>
                    <div>{user?.last_name}</div>
                </Name>
                <div >{user?.role}</div>
            </WrapperChildOne>
            <WrapperChildTwo>
                <div>City: {user?.city}</div>
                <div>Books: {user?.books_number}</div>
                <div>Return date: {user?.return_date.slice(0,10)}</div>
            </WrapperChildTwo>
        </Wrapper>
    )
}
