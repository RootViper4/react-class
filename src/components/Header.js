import React from 'react'

function Header(props) {
  return (
    <div className='header'>
        <div>{props.header} {props.count}</div>
        <div className='menu-nav'>
        <div>About</div>
        <div>Resume</div>
        <div>Contact</div>
        </div>
    </div>
  )
}

export default Header