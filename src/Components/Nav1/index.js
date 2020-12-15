import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavItem from "react-bootstrap/NavItem";
import MenuItem from "react-bootstrap/DropdownMenu";

function Nav1(props){
   const {
      categories = [],
      setCurrentCategory,
      currentCategory,
      portfolioSelected,
      setPortfolioSelected
    } = props;
 
   return(
    <Navbar collapseOnSelect expand="lg" variant="dark">
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {categories.map((category) => (
        <Nav.Link className={`${currentCategory === category && !portfolioSelected && 'navActive'}`} key={category}>
        <span onClick={() => {setCurrentCategory(category);setPortfolioSelected(true);}}>
        {capitalizeFirstLetter(category)}
        </span>
        </Nav.Link>
        ))}
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
   );
}

export default Nav1;