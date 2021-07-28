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
    const navbar = document.querySelector('.navbar-active')
    const mobileNavbar = document.querySelector('.mobile-nav-links-wrapper-expanded')
    const booksLibraryTitle = document.querySelector('.nav-title-hidden')

    filterBooks(categoryId, books, booksToFilter, setBooksToFilter)
    if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'scroll'
    }
    navbar.classList.remove('navbar-active')
    mobileNavbar.classList.remove('mobile-nav-links-wrapper-expanded')
    booksLibraryTitle.classList.remove('nav-title-hidden')
}

export const revertToAllBooks = (setBooksToFilter, books) => {
    setBooksToFilter([...books])
    toggleNavbar()
}