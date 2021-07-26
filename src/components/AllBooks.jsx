import React, { useContext } from 'react'
import { DataFromApiContext } from '../context/DataFromApi'
import '../styles/books.css'
import { Wrapper, CategoryTitleWrapper, BooksTitleWrapper, CategoryWrapper, StyledLi, BooksWrapper, EachBook } from '../styled-components/books-components'

export default function AllBooks() {

    const value = useContext(DataFromApiContext)
    const { categories, books, setBooksToFilter, booksToFilter } = value

    const filterBooks = (categoryId) => {
        if (books.length === booksToFilter.length) {
            const newArr = booksToFilter.filter(book => book.categoryId === categoryId)
            setBooksToFilter(newArr)
        }
        else {
            setBooksToFilter(books.filter(book => book.categoryId === categoryId))
        }

        const li = document.getElementById(`category-${categoryId}`)
        const edit = document.getElementById(`edit-${categoryId}`)
        li.addEventListener('click', (e) => {
            e.preventDefault()
            li.classList.toggle('categories-clicked')
            edit.classList.toggle('editEnabled')
        })

    }

    const revertToAllBooks = () => {
        const newArr = [...books]
        setBooksToFilter(newArr)
    }
    // const toggleClass = () => {
    //     setIsLinkEnabled(!isEditLinkEnabled);
    // };
    return (
        <Wrapper>
            <CategoryTitleWrapper>Categories</CategoryTitleWrapper>
            <BooksTitleWrapper>Books ({booksToFilter?.length})</BooksTitleWrapper>
            <CategoryWrapper>
                <StyledLi style={{ backgroundColor: '#f26c4f' }} className="categories" onClick={() => revertToAllBooks()}>All</StyledLi>
                {
                    categories && categories.map(item => (
                        <StyledLi
                            style={{ backgroundColor: `${item.color}` }}
                            key={item.id}
                            className="categories"
                            id={`category-${item.id}`}
                            onClick={() => filterBooks(item.id)}>
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            <span className="editDisabled" id={`edit-${item.id}`}>edit</span>
                        </StyledLi>
                    ))
                }
            </CategoryWrapper>
            <BooksWrapper>
                {
                    booksToFilter && booksToFilter.map(book => (
                        <EachBook key={book.id}>
                            <div className="firstColumn">
                                <img src={book.thumbnail} alt="" />
                                {
                                    categories && categories.filter(category => category.id === book.categoryId)
                                        .map(item => <div style={{ backgroundColor: `${item.color}` }} key={item.id} className="categoryInsideBook">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>)
                                }
                            </div>
                            <div className="secondColumn">
                                <div className="bookTitle">{book.title}</div>
                                <div className="bookDescription">{book.description.slice(0, 150)}...</div>
                                <div className="readMoreLink">Read more</div>
                            </div>
                        </EachBook>
                    ))
                }
            </BooksWrapper>
        </Wrapper>
    )
}
