import React, {useState} from 'react'

export default function Bar({ day, amount, key, data }) {
  const isHighest = data.isHighestAmount;
  const barStyle = {
    height: `${amount + 11}%`,
  };

  const[showAmount, setShowAmount] = useState(false)

  return (
    <div className='bar__column' >
      <p className={`amount ${showAmount ? '' : 'active'}`} >{ amount}</p>
      <div
        onMouseEnter={() => setShowAmount(true)}
        onMouseLeave={() => setShowAmount(false)}
        className={ `bar ${isHighest ? 'highest' : ''}`} style={barStyle}></div>
      <p className='day'>{day}</p>    
    </div>
  );
}