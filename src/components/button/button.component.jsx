import React from 'react';


const Button = props => {
    const buttonStyle = { padding: '10px', marginRight: '10px', color: 'white', backgroundColor: '#2ACFCF', border: 'none', borderRadius: '5px'}

    return(<button style={buttonStyle} onClick={props.IWasClicked}>{props.text}</button>)
}

export default Button