import React from 'react';
import './number-box.styles.css'
const NumberBox = ({number, numbers}) => {
    const even = number % 2 === 0
    const odd = number % 2 === 1

    const prime = (num) => {
        if (num < 2) {
            return false;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }            
        }

        return true;
    };
    
    let styles =' '

    if (even) {
        styles='even'
    }

    if (odd) {
        styles = 'odd'
    }

    if (prime(number)) {
        styles ='prime'
    }

    return (
        <div className={styles}>
            <h4>{number}</h4>
        </div>
)}

export default NumberBox
