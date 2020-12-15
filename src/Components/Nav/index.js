import React from 'react'
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props){
   const {
      categories = [],
      setCurrentCategory,
      currentCategory,
      portfolioSelected,
      setPortfolioSelected
    } = props;
 
   return(
      
      <nav>
         <ul className="NavUl">
             <li className="NavLi">
                <a href="#" onClick={() => setPortfolioSelected(false)}>
                   Cover
                </a>
              </li>
            {categories.map((category) => (
                <li className={`NavLi ${currentCategory === category && !portfolioSelected && 'navActive'}`} key={category}>
                  <span onClick={() => {setCurrentCategory(category);setPortfolioSelected(true);}}>
                    {capitalizeFirstLetter(category)}
                  </span>
                </li>
              ))}
         </ul>
      </nav>
    
   );
    
}

export default Nav;