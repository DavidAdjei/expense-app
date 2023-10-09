import React from 'react'
import Bar from '../Bar/bar'
import './chart.css'

export default function Chart({ data }) {
  const maxAmountIndex = data.reduce(
    (maxIndex, item, currentIndex) =>
      item.amount > data[maxIndex].amount ? currentIndex : maxIndex,
    0
  );

  return (
    <div className='chart'>
      <div className='chart__header'>
        <h2>Spending - Last 7 days</h2>
      </div>
      <div className='chart__section'>
        {data.map((e, index) => 
          <Bar
            data={{
              ...e,
              isHighestAmount: index === maxAmountIndex,
            }}
            key={index}
            amount={e.amount}
            day={e.day}
          />,
          )}
      </div>
      <hr />
      <div className='chart__footer'>
        <div className='chart__footer-month'>
          <p>
            Total this month
          </p>
          <h1>
            $478.33
          </h1>
        </div>
        <div className='chart__footer-last'>
          <h5> +2.4%</h5>
          <p>from last month</p>
        </div>
      </div>
    </div>
  )
}
