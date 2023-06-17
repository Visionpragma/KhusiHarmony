import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';



class Navbar extends Component {


  render() {
    return (
      <nav className="NavbarItems">
        <h1 className='navbar-logo'>Khusiharmony</h1>
        <ul className='nav-menu'>
        {MenuItems.map((item, index)=> {
          return (
          <li key={index}>
          <a className={item.cName} href='/'>
          <i FontAwesomeIcon={item.icon}></i>{item.title}</a>
          </li>
          );
        
          })}
         
        </ul>
        
      </nav>
    
    );
        }
}

export default Navbar;