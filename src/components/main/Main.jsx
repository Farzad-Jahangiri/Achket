import React from 'react';
import Mleft from './left/Mleft';
import Mcenter from './center/Mcenter';
import Mright from './right/Mright';
import "./Main.css"

function Main() {
  return (
    <div className='M-main'>
        <Mleft />
        <Mcenter />
        <Mright />
    </div>
  )
}

export default Main