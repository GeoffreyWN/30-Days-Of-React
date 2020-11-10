import React from 'react';


const TechsFormatted =  ({techs}) => (techs.map((tech) => <li key={tech}>{tech}</li>))


export default TechsFormatted