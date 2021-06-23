import React from 'react';
import {NavLink} from 'react-router-dom';

const Mode = (props) => {
    const modeClassName = "mode-container "+props.modeClassName;    

    return (
        <NavLink to={`/training/${props.modePath}`}>
        <div className={modeClassName}>
                <div className="mode-container__description">
                    <h2>{props.modeTitle}</h2>
                    <p>{props.modeDecription}</p>
                </div>
                <div className="mode-container__img">

                </div>
        </div>
        </NavLink>
    )
}
export default Mode;