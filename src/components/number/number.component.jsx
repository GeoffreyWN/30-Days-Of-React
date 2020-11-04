import React from 'react';
import NumberBox from './number-box.component';
import './number.styles.css'

const Number = ({numberstitle, numbers}) => {
    
    return (
    <div className="number-container">
        <h2>{numberstitle}</h2>
        <div className="numbers">
            { numbers.map((number) => (<NumberBox key={number} number={number} numbers={numbers} />)) }
        </div>
    </div>
)};

export default Number