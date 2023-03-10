import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newslettre'>
    <div className='app__newslettre-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__cormorant' style={{color:"#DCCA87"}}>Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newslettre-input flex__center'>
      <input type={"email"} placeholder="Email Address" />
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
