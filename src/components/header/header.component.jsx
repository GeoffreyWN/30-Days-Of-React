import React from 'react';
import './header.styles.css'

const Header = ({title}) => (
    <div className="header">
        <h1>{title}</h1>
    </div>
);

export default Header