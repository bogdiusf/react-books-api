import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DataFromApiContext = createContext()

export default function DataFromApi({ children }) {
    const [books, setBooks] = useState([])
    const [booksToFilter, setBooksToFilter] = useState(null)
    const [categories, setCategories] = useState([])
    const [user, setUser] = useState(null)

    const getBooksFromApi = async () => {
        const response = await axios.get('https://books-api.adrvest.ro/books')
        setBooks(response.data)
        setBooksToFilter(response.data)
    }

    const getCategoriesFromApi = async () => {
        const response = await axios.get('https://books-api.adrvest.ro/categories')
        setCategories(response.data)
    }

    const getUserFromApi = async () => {
        const response = await axios.get('https://books-api.adrvest.ro/user')
        setUser(response.data)
    }

    useEffect(() => {
        if (books && categories && user) {
            return
        } else {
            getBooksFromApi()
            getCategoriesFromApi()
            getUserFromApi()
        }
    })

    const value = {
        books,
        booksToFilter,
        setBooks,
        setBooksToFilter,
        categories,
        setCategories,
        user
    }

    return <DataFromApiContext.Provider value={value}>{children}</DataFromApiContext.Provider>
}
