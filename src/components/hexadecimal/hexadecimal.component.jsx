import React from 'react';
import ColorBox from './color-box.component';
import './hexadecimal.styles.css'

const Hexadecimal = ({hexatitle, color_array}) => {
    return(
        <div className="hexadecimal-container">
            <h2>{hexatitle}</h2>
            <div className="colourbox">
                {color_array.map((el) => ( <ColorBox key={el} />))}
            </div>
        </div>
    )
}
export default Hexadecimal

