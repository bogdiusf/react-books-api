import React, { useContext } from 'react'
import { DataFromApiContext } from '../../context/DataFromApi'
import { Wrapper, WrapperChildOne, WrapperChildTwo, ProfilePic, Name } from '../../styled-components/StyledUserComponents'

const UserPage = () => {

    const value = useContext(DataFromApiContext)
    const { user } = value
    return (
        <Wrapper>
            <WrapperChildOne>
                <ProfilePic src={user?.avatar} />
                <Name>
                    <div>{user?.first_name}</div>
                    <div>{user?.last_name}</div>
                </Name>
                <div >{user?.role}</div>
            </WrapperChildOne>
            <WrapperChildTwo>
                <div>City: {user?.city}</div>
                <div>Books: {user?.books_number}</div>
                <div>Return date: {user?.return_date.slice(0, 10)}</div>
            </WrapperChildTwo>
        </Wrapper>
    )
}

export default UserPage