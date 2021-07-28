import { filterBooks } from './BooksScripts'

export const toggleNavbar = () => {
    const navbar = document.querySelector('.navbar')
    const booksLibraryTitle = document.querySelector('.nav-title')
    const mobileNavLinksWrapper = document.querySelector('.mobile-nav-links-wrapper')

    if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'scroll'
    }
    navbar.classList.toggle('navbar-active')
    booksLibraryTitle.classList.toggle('nav-title-hidden')
    mobileNavLinksWrapper.classList.toggle('mobile-nav-links-wrapper-expanded')
}

export const mobileFilterBooks = (categoryId, books, setBooksToFilter, booksToFilter) => {
    filterBooks(categoryId, books, booksToFilter, setBooksToFilter)
    toggleNavbar()
}

export const revertToAllBooks = (setBooksToFilter, books) => {
    setBooksToFilter([...books])
    toggleNavbar()
}