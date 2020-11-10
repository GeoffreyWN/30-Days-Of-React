import React from 'react';
import htmllogo from '../../assets/images/html-5.png';
import csslogo from '../../assets/images/css.svg';
import jslogo from '../../assets/images/js-logo.png';
import reactlogo from '../../assets/images/react.png'

const imagestyle={margin: '20px auto'};
const Techimages = () => (
  <div style={{ borderTop: 'aliceblue 2px solid', display: 'flex', justifyContent: 'space-around', margin: '40px  auto', width: '80%'}}>
    <img style={imagestyle} src={htmllogo} alt="techimage" height="100px" width="100px"/>
    <img style={imagestyle} src={csslogo} alt="techimage" height="100px" width="100px"/>
    <img style={imagestyle} src={jslogo} alt="techimage" height="100px" width="100px"/>
    <img style={imagestyle} src={reactlogo} alt="techimage" height="100px" width="100px"/>
  </div>
)



export default Techimages