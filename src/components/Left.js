import React from 'react'
import Header from './Header'
import '../App.css'

function Left() {
  return (
    <React.Fragment>
        <div className='leftBlock'>
            <Header />
              <div className='my-infos'>
                  <div>
                      <p className='name'>Root Lindow</p>
                      <span className='title'>Full stack Developer</span>
                  </div>
                  <div>
                    <p><span>Phone:</span>+90 000 000 000</p>
                    <p><span>Email:</span>roo@root.com</p>
                    <p><span>Address:</span>123,Gonyeli st, Nicosia</p>
                  </div>
            </div>
        </div>
  
    </React.Fragment>
  )
}

export default Left