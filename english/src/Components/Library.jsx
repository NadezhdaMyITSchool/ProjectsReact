import React from 'react';

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            value: "",
            translation: "",
            library: JSON.parse(localStorage.getItem("library")) || ""
        }
        this.changeMode = this.changeMode.bind(this);
        this.getValue = this.getValue.bind(this);
        this.addWordToLibrary = this.addWordToLibrary.bind(this);
        this.deleteWordFromLibrary = this.deleteWordFromLibrary.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keyup", (event) => {
            if (this.state.value.length>0 && this.state.isOpen && event.key==="Enter") {
                this.addWordToLibrary();
            }
        })
    }
    changeMode() {
        this.setState(prevState => ({
            isOpen : !prevState.isOpen
        }))
    }
    async deleteWordFromLibrary(key) {
        await this.setState(prevState => ({
            library: prevState.library.filter((word, index) => index!==key)
        }))
        if (this.state.library.length!==0) {
            await localStorage.setItem("library", JSON.stringify(this.state.library));
        } else { 
            // если удалили весь словарь
           await localStorage.removeItem("library");
           await this.setState(()=> ({
               library: ""
           }))
        }    
    }
    async addWordToLibrary() {
        try {
            const API_KEY = "a_r5R6IhiwnIdolkYnhoBE6pbLfXZczWg5Tn5fBgtpiaIGYdYYsgfoDFY40wQH4aRNsf9dFRROj9VJGpBV";
            const response = await fetch("https://api-b2b.backenster.com/b1/api/v3/translate/", {
                        body: "from=ru_RU&to=en_GB&text="+this.state.value+"&platform=api",
                        headers: {
                            Authorization: "Bearer "+ API_KEY,
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        method: "POST"
            })
            const result = await response.json();
            if (result.result) {
                await this.setState(() => ({
                    translation : result.result
                }))
            }
            await this.setState( prevState => ({
                library : [...prevState.library, {id: this.state.library.length, word: this.state.value, translate: this.state.translation}]
            }))
            await localStorage.setItem("library", JSON.stringify(this.state.library));
            this.changeMode();
            await this.setState(() => ({
                value : ""
            }))
            
          
        }
        catch (error) {
            console.log(error)
        }
       

    }
    async getValue(event) {
        const value = event.currentTarget.value;
        await this.setState(() => ({
            value : value
        }))
           
       
    }
    render() {
        return (
            <div className="word-container">
                <div className="add-word-buttons">
                    {!this.state.isOpen ? <span className="label-title">Add new word</span> : 
                        <div>
                            <input type="text" placeholder="Enter word" className="textfield" onChange={this.getValue} />
                            <button className="btn-round check-word" onClick={this.addWordToLibrary}>&#x2713;</button>
                        </div>

                     }
                  
                    <button className={!this.state.isOpen ? "btn-round add" : "btn-round close"} onClick={this.changeMode}></button>
                </div>
                {this.state.library ? 
                <div className="library-container">
                     <div className="library-title">
                         <div><span>Word</span></div>
                         <div>Translate</div>
                         <div>Learn level</div>
                     </div>
                     <div className="library-words">
                         {this.state.library.map((word, index) => (
                             <div key={index} className="library-container_wrapper">
                                <div>{word.id}</div>
                                <div>{word.word}</div>
                                <div>{word.translate}</div>
                                <div onClick={()=>this.deleteWordFromLibrary(index)}>Delete</div>
                                {/* оборачиваем в стрелочную функцию, чтобы функция сразу не вызывалась */}
                             </div>
                         ))}
                     </div>
                </div> : ""}
            </div>
            
        )
    }
}

export default Library;