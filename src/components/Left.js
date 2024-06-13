import React, {useState} from 'react';
import Header from './Header';
import '../App.css';
import styled from "styled-components";

const Details = styled.div`
  font-size: 1.5em;
  color: #BF4F74;
`;
const Para = styled.p`
 color: red;
`
const header_title = "Curriculum Vitae";

function Left(props) {

  const [count, setCount] = useState(0);

  console.log(count, "count")
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
        <div className='leftBlock'>
        <button onClick={incrementCount}>Increment</button>
            <Header header={header_title} count={count}/>
              <div className='my-infos'>
                  <div>
                      <Para className='name'>{props.name}</Para>
                      <span className='title'>Full stack Developer</span>
                  </div>
                  <Details>
                    <p><span>Phone  sss:</span>+90 000 000 000</p>
                    <p><span>Email:</span>roo@root.com</p>
                    <p><span>Address:</span>123,Gonyeli st, Nicosia</p>
                  </Details>
            </div>
        </div>
  
    </React.Fragment>
  )
}

export default Left