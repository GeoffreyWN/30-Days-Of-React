import React from 'react';

const Subscribebox = () => {

    const inputStyles = { border: 'none', padding: '10px', borderRadius: '5px'}

    return(
        <div style={{borderRadius: '10px', margin: '20px auto', padding: '20px',  textAlign: 'center' }}>
            <h1>Subscribe</h1>
            <p>Sign up with your emal address to receive news and updates</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%', margin: '20px auto' }}>
            <input style={inputStyles} type="text" placeholder="firstname"/>
            <input style={inputStyles} type="text" placeholder="lastname"/>
            <input style={inputStyles} type="email" placeholder="email"/>
            </div>
            <div>
            <button style={{backgroundColor:"orange", color: 'white', border: 'none', padding: '10px', borderRadius: '5px'}}>Subscribe</button>
            </div>

            
        </div>
    )
}

export default Subscribebox