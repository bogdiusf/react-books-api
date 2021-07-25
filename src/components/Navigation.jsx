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
`

export default function Navigation() {
  const value = useContext(DataFromApiContext);
  const { user } = value;

  return (
    <Router>
      <nav>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <StyledTitle>Books Library</StyledTitle>
        <ul className="nav-links">
          <li><StyledLink to={'/'}>All books</StyledLink></li>
          <span></span>
          <li><img src={user?.avatar} alt="user_avatar" /></li>
          <li><StyledLink to={'/user'}>{user?.first_name} {user?.last_name}</StyledLink></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={AllBooks} />
        <Route path='/user' component={User} />
      </Switch>
    </Router >
  );
}
