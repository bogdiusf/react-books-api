export const filterBooks = (categoryId, books, booksToFilter, setBooksToFilter) => {
    const li = document.getElementById(`category-${categoryId}`)
    const edit = document.getElementById(`edit-${categoryId}`)
    if (books.length === booksToFilter.length) {
        const newArr = booksToFilter.filter(book => book.categoryId === categoryId)
        setBooksToFilter(newArr)
    }
    else {
        setBooksToFilter(books.filter(book => book.categoryId === categoryId))
    }

    li.classList.toggle('categories-clicked')
    edit.classList.toggle('editEnabled')
}