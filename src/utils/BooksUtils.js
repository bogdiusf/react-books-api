export const filterBooks = (categoryId, books, booksToFilter, setBooksToFilter) => {
    if (books.length === booksToFilter.length) {
        const newArr = booksToFilter.filter((book) => book.categoryId === categoryId)
        setBooksToFilter(newArr)
    } else {
        setBooksToFilter(books.filter((book) => book.categoryId === categoryId))
    }
}

export const handleKeyPress = (e, id, categories, setCategories, setIsCategoryClicked) => {
    if (e.key === 'Enter') {
        const categoriesUpdated = [...categories]
        const itemToEditIndex = categoriesUpdated.findIndex((item) => item.id === id)
        categoriesUpdated[itemToEditIndex].name = e.target.value
        setCategories(categoriesUpdated)
        setIsCategoryClicked(null)
    }
}
