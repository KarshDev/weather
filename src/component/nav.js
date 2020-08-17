import React from 'react';

function Nav(props) {
    return (
       <nav className = 'nav'>
           <div className='nav_div_1'>
               <h2 style={{color:'#fff'}}>Weather Observation</h2>
           </div>
           <div className='nav_div_2'>
               <span className='navL'>Login</span>
               <span className='navL'>Register</span>
           </div>
       </nav>
    )
}

export default Nav