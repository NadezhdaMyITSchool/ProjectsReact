import React, {useState} from 'react';

const Learn = ({setScore, score, CheckLevel}) => {
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem("library")).sort(()=> Math.random()-0.5) || [{id: 0, word: "", translate: ""}]);
    const [index, setIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const word=library[index];
    const changeWordForLearn = () => {
        if (library.length-1 !== index) {
            setIndex(index+1)            
            setScore(score+0.5);
            localStorage.setItem("score", score+0.5)
            CheckLevel()
        } else {
            setEnd(true);
        }        
    }
    const repeatWordForLearn = () => {
        // перезапуск словаря
        setLibrary(library.sort(()=> Math.random()-0.5));
        setIndex(0);
        setEnd(false);
    }
    return (
        // !!!дописать момент, если словарь пустой, чтобы отображался другой блок!!!!!
        <div className="learn-container">
            <div className="learn-container__wrapper">
                {!end ? <div className="learn-container__score">50%</div> : null }
                {!end ? 
                    <div className="learn-words">
                        <div className="learn-words__title-en">{word.translate}</div>
                        <div className="learn-words__title">translation</div>
                        <div className="learn-words__title-ru">{word.word}</div>
                    </div>
                : 
                    <div className="learn-words">
                        <div className="learn-words__title-en">Well done!</div>
                    </div>
                }
                
            </div>
            {!end ? 
            <button className="learn-container__step" onClick={changeWordForLearn}></button>
            : 
            <button className="learn-container__repeat" onClick={repeatWordForLearn}>Repeat</button>
            }
        </div>
    )
}

export default Learn;