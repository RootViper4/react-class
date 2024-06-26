import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className='header'>
        <div>{props.header} {props.count}</div>
        <div className='menu-nav'>
          <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div>Resume</div>
        <div>Contact</div>
        </div>
    </div>
  )
}

export default Header