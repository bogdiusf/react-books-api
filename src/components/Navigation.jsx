import React, { useContext } from "react";
import '../styles/navbar.css'
import { DataFromApiContext } from "../context/DataFromApi";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledLink, StyledTitle } from '../styled-components/navbar-components'
import User from './User'
import AllBooks from './AllBooks'

export default function Navigation() {

  const value = useContext(DataFromApiContext);
  const { user, categories } = value;

  const toggleNavbar = () => {
    const hamburgerMenu = document.querySelector('.hamburger')
    const navbar = document.querySelector('.navbar')
    const booksLibraryTitle = document.querySelector('.nav-title')
    const mobileNavLinksWrapper = document.querySelector('.mobile-nav-links-wrapper')
    hamburgerMenu.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation();
      navbar.classList.toggle('navbar-active')
      if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden'
      }
      else {
        document.body.style.overflow = 'scroll'
      }

      booksLibraryTitle.classList.toggle('nav-title-hidden')
      mobileNavLinksWrapper.classList.toggle('mobile-nav-links-wrapper-expanded')
    })
  }

  return (
    <Router>
      <nav className="navbar">
        <StyledTitle className="nav-title">Books Library</StyledTitle>
        <div className="mobile-nav-links-wrapper">
          <div className="mobileView-user-info">
            <img src={user?.avatar} alt="" />
            <div className="expanded-nav-title-hidden">{user?.first_name} {user?.last_name}</div>
          </div>
          <div className="hidden-nav-links">
            <div >All books</div>
            <div>Categories</div>
            <ul>
              <li><StyledLink to={'/'} style={{ color: 'white' }} onClick={() => console.log('xx')}>All</StyledLink></li>
              {
                categories && categories.map(item => (
                  <li key={item.id}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <ul className="nav-links">
          <li><StyledLink to={'/'}>All books</StyledLink></li>
          <span></span>
          <li><img src={user?.avatar} alt="user_avatar" /></li>
          <li><StyledLink to={'/user'}>{user?.first_name} {user?.last_name}</StyledLink></li>
        </ul>

        <div className="hamburger" onClick={() => toggleNavbar()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      <Switch>
        <Route exact path='/' component={AllBooks} />
        <Route path='/user' component={User} />
      </Switch>
    </Router >
  );
}
