import React, {useState, useEffect} from 'react';

const CheckMode = (props) => {
    const checkWord=(word)=> {
        if (library.length-1 !==currentWordIndex) {  // проверка на последнее слово
            if (word===library[currentWordIndex].word) {
                props.setScore(props.score+1);
                props.CheckLevel();
                props.setCorrectAnswers(props.correctAnswers+1);
                setCurrentWordIndex(currentWordIndex+1)
            }
            else {
                props.setErrorAnswers(props.errorAnswers+1)
            }
        } else {
            alert("Вы успешно выучили все слова");            
            props.setCorrectAnswers(0); 
            props.setErrorAnswers(0);
            setCurrentWordIndex(0)

        }
        
        
    }
    const [library, setLibrary]=useState(JSON.parse(localStorage.getItem("library")).sort(()=> Math.random()-0.5));
    
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [newArr, setNewArr] = useState([]);  // инициализицая нового массива, т.к. внутри useEffect нет доступа
    const currentWord = library[currentWordIndex].translate;
    // const [initialScore, setInitialScore] = useState(props.score)
    
    useEffect(() => {
        const filterArr = library.filter((item, index) => index!==currentWordIndex); //создаем новый массив, в котором не будет нашего проверяемого слова
       
        filterArr.sort(()=> Math.random()-0.5); // ???
        const newArr = [filterArr[0].word, filterArr[1].word, library[currentWordIndex].word];  //массив из 3-х слов для проверки
       
        setNewArr(newArr.sort(()=> Math.random()-0.5));         

    }, [props.correctAnswers]);
    // useEffect(() => {
    
    //     return () => {          
    //         props.setScore(initialScore)
          
    //     }
    // }, [])
    useEffect(() => {
        localStorage.setItem("score", props.score)
    }, [props.score])

    return (
        <div className="game-mode-container">
            <div className="game-mode__title">{currentWord}</div>
            <div className="game-mode__description">Set translation fo this word</div>
            <div className="check-item-block">
                {newArr.map((item, index) => <div key={index} className="check-item" onClick={()=>checkWord(item)}>
                   {item}
                </div>) }
                  
              
              
            </div>
           
        </div>
    )
}
export default CheckMode;