import React from 'react'
import './nav.css'

export default function Nav() {
  return (
      <div className='nav'>
          <div className='balance__section'>
              <p className='balance'>My balance</p>
              <h2 className='balance__amount'>$921.48</h2>
          </div>
          <div className='circles'>
              <div className='circle__trans'></div>
              <div className='circle__black'></div>
          </div>
      </div>
  )
}
