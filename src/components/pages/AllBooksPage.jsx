import React, { useContext, useState, useEffect, useRef } from 'react'
import { DataFromApiContext } from '../../context/DataFromApi'
import '../../styles/books.css'
import { Wrapper, CategoryTitleWrapper, BooksTitleWrapper, CategoryWrapper, StyledLi, BooksWrapper, EachBook, EditCategoryInput } from '../../styled-components/StyledBooksComponents'
import { Modal, Input } from 'antd';
import 'antd/dist/antd.css';
import { filterBooks, handleKeyPress } from '../../utils/BooksUtils'


export default function AllBooksPage() {

    const value = useContext(DataFromApiContext)
    const { categories, setCategories, books, setBooksToFilter, booksToFilter } = value

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bookInfoForModal, setBookInfoForModal] = useState({})
    const [isCategoryClicked, setIsCategoryClicked] = useState(null)

    const categoryRef = useRef()

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

    useEffect(() => {
        const handler = (e) => {
            if (!categoryRef.current.contains(e.target)) {
                setIsCategoryClicked(null)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <Wrapper>
            <CategoryTitleWrapper>Categories</CategoryTitleWrapper>
            <BooksTitleWrapper>Books ({booksToFilter?.length})</BooksTitleWrapper>

            <CategoryWrapper ref={categoryRef}>
                <StyledLi style={{ backgroundColor: '#f26c4f' }} className="categories" onClick={() => {
                    setBooksToFilter([...books])
                    setIsCategoryClicked(null)
                }}>All</StyledLi>
                {
                    categories && categories.map(item => (

                        isCategoryClicked === item.id
                            ?
                            <EditCategoryInput style={{ backgroundColor: `${item.color}` }} key={item.id}>
                                <Input onKeyPress={(e) => handleKeyPress(e, item.id, categories, setCategories, setIsCategoryClicked)} />
                            </EditCategoryInput>
                            :
                            <StyledLi
                                style={{ backgroundColor: `${item.color}` }}
                                key={item.id}
                                onClick={() => {
                                    filterBooks(item.id, books, booksToFilter, setBooksToFilter)
                                }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                <span onClick={(e) => {
                                    e.stopPropagation()
                                    setIsCategoryClicked(item.id)
                                }}>Edit</span>
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
