import logo from './logo.svg';
import './App.css';
import { useState }  from 'react';
import Header from './Components/Header';
import Cover from './Components/Cover';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

//main page
function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [categories] = useState(['About Me', 'Portfolio','Contact Me','Resume']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (  
 
    <div>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
        />
        {!portfolioSelected ? (
          <>
            <Cover/>
          </>
        ):(   
           <Portfolio
           currentCategory={currentCategory}
           />
        )}
        <Footer/>
    </div>
    
  );
}

export default App;
