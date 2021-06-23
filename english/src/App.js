import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Library';
import Training from './Components/Training/Training';
import Learn from './Components/Learn';
import Game from './Components/Games/Game'

const App = () => {
  const countLevel =() => {    
    return Math.floor((0.5 + Math.sqrt(1+8*(score)/(5))/2))-1;
  }
 
  const [score, setScore] = useState(+localStorage.getItem("score") || 0);
  const [level, setLevel] = useState(countLevel());
  
  const CheckLevel = () => {    
    setLevel(countLevel())
  }
  return (
    <BrowserRouter>
      <div className="main-page">             
          <Nav level={level}/>
          <Score score={score}/>
          
            <Route path="/library" component={Library} />
            <Route path="/training" component={Training} />
            <Route path="/learn">
                <Learn CheckLevel={CheckLevel} 
                      score={score} setScore={setScore} />
            </Route>      
            <Route path="/training/check-mode">  
              <Game score={score} setScore={setScore} CheckLevel={CheckLevel}/>
            </Route>
                  
            <Route path="/training/write-mode">  
              <Game score={score} setScore={setScore} CheckLevel={CheckLevel}/>
            </Route>
          
          
      </div>
      </BrowserRouter>
  )
}
export default App;
