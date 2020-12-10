import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Cover from './Components/Cover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 

function App() {
  const github = <FontAwesomeIcon icon={faGithub} size="2x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x"/>
  console.log(github);
  return (
    <div>
        <Header/>
        <Cover/>
        <footer>
        <ul>
            <li>
              <span role="img" aria-label="github">{github}</span>
            </li>
            <li>
              <span role="img" aria-label="linkedin">{linkedin}</span>
            </li>
         </ul>
        </footer>
    </div>
    
  );
}

export default App;
