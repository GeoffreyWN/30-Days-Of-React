import React from 'react';

const HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
  
    for(let i = 0; i < 6 ; i++ ) {
      let index = Math.floor( Math.random() * str.length)
      color += str[index]
    } 
  
    return  ( <div style={{backgroundColor: `#${color}`, height: '60px', textAlign: 'center', color: 'white', margin: '10px'}}> <p style={{padding: '5px' }}>{'#'+color}</p> </div>)
      
    }



export default HexaColor
