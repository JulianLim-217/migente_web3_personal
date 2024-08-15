import React, {useState} from 'react'

export default function InputNumber({mintCounter, incrementCounter, decrementCounter}) {
  const handleChange = (evt, mod) => {
    const newQuantity = props.mintQuantity + mod;
    if (0 < newQuantity && newQuantity <= 20) {
      props.setMintQuantity(newQuantity);
    }
  };

 

  return (
    <div className="input-number">
      <div className='input-container'>
        <div className="input-text">{mintCounter}</div>
        {/* <input type="text" placeholder={value} readOnly /> */}
      </div>
      <div className="arrow-container">
        <div className="img-wrapper-1" onClick={incrementCounter}>

          <img src="/svg/up-arrow-small.svg" alt="up-arrow" />
        </div>
        <div className="img-wrapper-2" onClick={decrementCounter}>
          <img src="/svg/down-arrow-small.svg" alt="down-arrow" />
        </div>


      </div>
    </div>
  )
}
