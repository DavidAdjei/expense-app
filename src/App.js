import React, {useState, useEffect} from 'react'
import Nav from './components/Header/nav'
import Chart from './components/Chart/chart'
import json from './data.json'

export default function App() {
  const [data, setData] = useState(json)
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='container'>
      <Nav />
      <Chart
        data={data}
      />
    </div>
  )
}
