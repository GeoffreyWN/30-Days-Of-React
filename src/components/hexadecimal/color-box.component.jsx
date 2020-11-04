import React from 'react';
import './hexadecimal.styles.css'

const ColorBox = () => {
    let str = "0123456789abcdef";
    let color = '';
        

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length);
         color += str[index]
     }    

    return(
            <div style={{backgroundColor: `#${color}`, textAlign: 'center', color: 'black'}}>

                <p style={{padding: '5px' }}>{'#'+color}</p>
                
            </div>
        )
}
export default ColorBox

