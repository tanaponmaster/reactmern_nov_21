import React from 'react'

export default function App() {

  const data = [1,2,3,4,5,6]

  return (
    <div>
      {/* JSX */}
      <h1>{Math.random()}</h1>
      {data.map(item=><h2>{item}</h2>)}
    </div>
  )
}
