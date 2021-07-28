import React, { useContext } from "react";
import '../styles/navbar.css'
import { DataFromApiContext } from "../context/DataFromApi";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledLink, StyledTitle } from '../styled-components/NavbarComponents'
import User from './User'
import AllBooks from './AllBooks'
import { toggleNavbar } from "../scripts/NavbarMethods";
import { mobileFilterBooks, revertToAllBooks } from '../scripts/NavbarMethods'

export default function Navigation() {

    const value = useContext(DataFromApiContext);
    const { categories, books, setBooksToFilter, booksToFilter, user } = value

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
                        <div>All books</div>
                        <div>Categories</div>
                        <ul>
                            <li onClick={() => revertToAllBooks(setBooksToFilter, books)}>All</li>
                            {
                                categories && categories.map(item => (
                                    <li key={item.id} onClick={() => mobileFilterBooks(item.id, books, setBooksToFilter, booksToFilter)}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</li>
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
