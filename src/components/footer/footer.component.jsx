import React from 'react';

const Footer = ({date}) => (
    <footer>
      <div className='footer-wrapper'>
        <p>Copyright: {date.getFullYear()}</p>
      </div>
    </footer>
  )



  export default Footer