import React from 'react';
import kid from '../../assets/images/kid.jpg';


const Usercard = ({ user: {firstName, lastName, title, location, image}, techs}) => {
    const userpicStyle = { height: '200px', width: '200px', borderRadius: '50%' }
    const buttonStyle = { padding: '10px', marginRight: '10px', color: 'white', backgroundColor: '#2ACFCF', border: 'none', borderRadius: '5px'}
    
    return(
        <div style={{ border: '5px solid #F0F1F7', padding: "10px"}}>
            <img style={userpicStyle} src={kid} alt="coolimage"/>
            <div>
            <p>{firstName.toUpperCase()} {lastName.toUpperCase()} &#9989;</p>
            <br/>
            <p>{title} {location}</p>

            <p>SKILLS</p>

            {techs.map((tech) => ( <button style
            ={buttonStyle} key={tech}>{tech}</button> ))}
            </div>

            <p>Joined on {new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear()} </p>
        </div>
)}

export default Usercard
