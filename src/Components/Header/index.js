import React from 'react'
import Nav from '../Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons' 
function Header(props){
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    portfolioSelected,
    setPortfolioSelected
  } = props;
     const laptop = <FontAwesomeIcon icon={faLaptop} size="1.5x"/>
     return(
        <div>
        <header>
          <h1 style={{color: "white"}}>{laptop}Aaditi Pai</h1>   
       
          <Nav 
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          />
        </header>
      </div>   
     );
}

export default Header;