import React from 'react';
import instagram from "./../../../img/logo02.png";
import "./mleft.css";

function Logo(){
    return (
    <div className='logo'>
        <img src={instagram} alt="" />
        <p className="para">AchKet</p>
    </div>);
}
 function Email(){
    return(
        <div className='Email'>
            <input type="email" placeholder='Your Email'/>
            <button>Email me!</button>
        </div>
    );
 }

function Mleft() {
  return (
    <div className=''>
        <Logo />
        <p className='par'>Get the latest updates</p>
        <Email />
    </div>
  )
}

export default Mleft