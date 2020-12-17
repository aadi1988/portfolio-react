import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//render navbar(uses react bootstrap)
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
       <Nav.Link className="mx-2">
                <a data-testid="cover" href="#" onClick={() => setPortfolioSelected(false)}>
                  Cover
                </a>
        </Nav.Link>
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