import React from 'react'

export default function Nav() {
  return (
      <div className='nav'>
          <div className='balance__section'>
              <p className='balance'>My balance</p>
              <h1 className='balance__amount'>$921.48</h1>
          </div>
          <div className='circles'>
              <div className='circle__trans'></div>
              <div className='circle__black'></div>
          </div>
      </div>
  )
}
