import React, { useContext, useState } from 'react'
import { DataFromApiContext } from '../context/DataFromApi'
import '../styles/books.css'
import { Wrapper, CategoryTitleWrapper, BooksTitleWrapper, CategoryWrapper, StyledLi, BooksWrapper, EachBook } from '../styled-components/BooksComponents'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { filterBooks } from '../scripts/BooksScripts'

export default function AllBooks() {

    const value = useContext(DataFromApiContext)
    const { categories, books, setBooksToFilter, booksToFilter } = value

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bookInfoForModal, setBookInfoForModal] = useState({})

    const handleOk = () => {
        setIsModalVisible(false);
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
    const showModal = (thumbnail, title, description, categoryId) => {
        setIsModalVisible(true);
        setBookInfoForModal({
            thumbnail: thumbnail,
            title: title,
            description: description,
            categoryId: categoryId
        })
    }

    return (
        <Wrapper>
            <CategoryTitleWrapper>Categories</CategoryTitleWrapper>
            <BooksTitleWrapper>Books ({booksToFilter?.length})</BooksTitleWrapper>
            <CategoryWrapper>
                <StyledLi style={{ backgroundColor: '#f26c4f' }} className="categories" onClick={() => setBooksToFilter([...books])}>All</StyledLi>
                {
                    categories && categories.map(item => (
                        <StyledLi
                            style={{ backgroundColor: `${item.color}` }}
                            key={item.id}
                            className="categories"
                            id={`category-${item.id}`}
                            onClick={() => filterBooks(item.id, books, booksToFilter, setBooksToFilter)}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
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
                                <div className="bookTitle">{book.title.slice(0, 10)}</div>
                                <div className="bookDescription">
                                    <div>{book.description.slice(0, 75)}...</div>
                                    <div></div>
                                </div>
                                <div className="readMoreLink" onClick={() => showModal(book.thumbnail, book.title, book.description, book.categoryId)}>Read more</div>
                            </div>
                        </EachBook>
                    ))
                }
            </BooksWrapper>
            <Modal title={bookInfoForModal.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="bookInModal">
                    <div className="bookInModalFirstColumn">
                        <img src={bookInfoForModal.thumbnail} alt="" style={{ width: '100px', height: '100px', borderRadius: '0' }} />
                        {
                            categories && categories.filter(category => category.id === bookInfoForModal.categoryId)
                                .map(item => <div style={{ backgroundColor: `${item.color}` }} key={item.id} className="categoryInsideBook">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>)
                        }
                    </div>
                    <div className="bookInModalSecondColumn">{bookInfoForModal.description}</div>
                </div>
            </Modal>
        </Wrapper >
    )
}
