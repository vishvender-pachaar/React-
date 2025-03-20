import React from 'react'
import bloglogo from '../assets/bloglogo.png';
function Logo({ width = '100px' }) {
    return (
      <div>
        <img src={bloglogo} alt="Logo" style={{ width }} />
      </div>
    );
  }
  

export default Logo