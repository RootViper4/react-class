import React from 'react'
import user from '../images/sora.png';

function Right() {
  return (
      <div className='righttBlock'>
        <div className='div-btn'><button>Download CV</button></div>
          <div className='div-img'><img src={user} alt='user' width={300} /></div>
     
      </div>
  )
}

export default Right