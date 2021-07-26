import React, { useContext } from "react";
import '../styles/navbar.css'
import { DataFromApiContext } from "../context/DataFromApi";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Styled from 'styled-components'
import User from './User'
import AllBooks from './AllBooks'

const StyledLink = Styled(Link)`
  font-size: 25px;
  color: black;
  text-decoration: none;
`
const StyledTitle = Styled.div`
  font-size: 35px;
  color: white;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media screen and (max-width: 430px){
    font-size: 30px;
    position: absolute;
    margin-top: 2vh;
  }
`

export default function Navigation() {

  const value = useContext(DataFromApiContext);
  const { user } = value;

  const toggleNavbar = () => {
    const hamburgerMenu = document.querySelector('.hamburger')
    const navbar = document.querySelector('.navbar')
    hamburgerMenu.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation();
      navbar.classList.toggle('navbar-active')
    })
  }


  return (
    <Router>
      <nav className="navbar">
        <StyledTitle>Books Library</StyledTitle>
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
