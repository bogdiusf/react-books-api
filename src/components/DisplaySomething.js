import React, { useContext } from 'react'
import { DataFromApiContext } from '../context/DataFromApi'

export default function DisplaySomething() {

    const value = useContext(DataFromApiContext)
    const {
        books,
        categories,
        user
    } = value
    console.log(user, categories, books)
    return (
        <div>
            sss
        </div>
    )
}
