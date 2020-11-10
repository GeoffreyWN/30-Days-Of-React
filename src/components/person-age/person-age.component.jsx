import React from 'react';

const PersonAge = ({user: {firstName, lastName}}) => {
    const yearBorn = 1820
    const currentYear = new Date().getFullYear()
    const age = currentYear - yearBorn
    
    return(
    <p>
        {' '}
        {firstName} {lastName} is {age} years old
    </p>
)}

export default PersonAge