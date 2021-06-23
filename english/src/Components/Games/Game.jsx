import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import CheckMode from './CheckMode';
import WriteMode from './WriteMode';

const Game = (props) => { 
    const location = useLocation();
    const [correctAnswers, setCorrectAnswers] = useState(0);    
    const [errorAnswers, setErrorAnswers] = useState(0);

    return (
        <div className="game-container">
            <div className="game-container__top-info">
                <NavLink to='/training'><button className="btn-exit">Exit</button></NavLink>
                <div className="game-score">
                    <span className="game-score__correct-title">Correct: {correctAnswers}</span>
                    <span className="game-score__error-title">Errors: {errorAnswers}</span>
                </div>
            </div>
            {location.pathname === '/training/check-mode' ? 
            <CheckMode score={props.score} setScore={props.setScore} 
                    correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} 
                    errorAnswers={errorAnswers} setErrorAnswers={setErrorAnswers}
                    CheckLevel={props.CheckLevel}
                    /> : 
                location.pathname === '/training/write-mode' ? 
                <WriteMode score={props.score} setScore={props.setScore} 
                correctAnswers={correctAnswers} setCorrectAnswers={setCorrectAnswers} 
                errorAnswers={errorAnswers} setErrorAnswers={setErrorAnswers}
                CheckLevel={props.CheckLevel}/> : null
            }
            
            
            
        </div>
    )
}
export default Game;