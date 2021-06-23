import React, {useState, useRef, useEffect} from 'react';

const WriteMode = (props) => {
    const [library, setLibrary]= useState(JSON.parse(localStorage.getItem("library")).sort(()=> Math.random()-0.5));
    const [wordIndex, setWordIndex] = useState(0);
    const wordInput = useRef();
    const [error, setError] = useState(false);

    const checkWordTranslate =() => {
        if (library.length-1!==wordIndex) {  // проверка на последнее слово
            const wordValue = wordInput.current.value;
            console.log(wordValue.length)
            if (wordValue.toLowerCase()===library[wordIndex].word) {
                setWordIndex(wordIndex+1);
                props.setScore(props.score+1);
                props.CheckLevel();
                props.setCorrectAnswers(props.correctAnswers+1);
                if (error) {setError(false)}                

            } else {
                if (wordValue.length!==0) { //ошибка, только если ввели не пустое поле
                    props.setErrorAnswers(props.errorAnswers+1);
                }
                setError(true);
            }            
            wordInput.current.value = "";
        }
        else {
            alert("Вы успешно выучили все слова");            
            props.setCorrectAnswers(0); 
            props.setErrorAnswers(0);
            setLibrary(library.sort(()=> Math.random()-0.5));
            setWordIndex(0);
            wordInput.current.value = "";
        }
    }
    const checkKeyPress = (event) => {
        if (event.key ==="Enter") {
            checkWordTranslate();
        }
    }
    useEffect(() => {
        localStorage.setItem("score", props.score)
    }, [props.score])
    return (
        <div className="game-mode-container write-game">
            <div className="game-mode__title">{library[wordIndex].translate}</div>
            <div className="game-mode__description">Write translation fo this word</div>
            <div className="write-game__wrapper">
                <input type="text" className={error ? "textfield errorfield" : "textfield"} 
                placeholder="Enter word" ref={wordInput} onKeyPress={checkKeyPress}/>
                <button className="btn-enter" onClick={checkWordTranslate}>Enter</button>
            </div>     
    </div>
    )
}
export default WriteMode;