import React from 'react';
import Mode from './Mode';

const Training = () => {
    const modeClassName = ["easy-mode","hard-mode"] ,
          modeTitle = ["Check words Mode", "Write words Mode"],
          modeDecription = ["Easy mode","Hard mode"],
          modePath = ["check-mode", "write-mode"];


    return (
        <div className="training-container">
            <Mode modeClassName={modeClassName[0]} modeTitle={modeTitle[0]} modeDecription={modeDecription[0]} modePath={modePath[0]}/>
            <Mode modeClassName={modeClassName[1]} modeTitle={modeTitle[1]} modeDecription={modeDecription[1]} modePath={modePath[1]}/>
            
        </div>
    )
}

export default Training;