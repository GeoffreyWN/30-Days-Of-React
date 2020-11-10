import React from 'react';

const Header = ({data: {welcome, title, subtitle, author: {firstName, lastName}, date }}) => {

    const headerStyles = {padding: '20', textAlign: 'Center'}

    const showDate = (time) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month},  ${date}, ${year}, `
  }
    return(
        <header>
            <div style={headerStyles}>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Instructor: {firstName} {lastName}
            </p>
            <small>Date: {showDate(date)}</small>
            </div>
        </header>
)}

export default Header