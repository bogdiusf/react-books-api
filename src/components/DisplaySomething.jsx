import React, { useContext } from 'react'
import { DataFromApiContext } from '../context/DataFromApi'

export default function DisplaySomething() {

    const value = useContext(DataFromApiContext)
    if (value) {
        const {
            books,
            categories,
            user
        } = value
    }

    return (
        <div>
            {JSON.stringify(value)}
        </div>
    )
}
