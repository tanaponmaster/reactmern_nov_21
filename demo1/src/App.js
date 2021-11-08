import React from 'react'

export default function App() {
  return (
    <div>
      {/* JSX */}
      <h1>{Math.random()}</h1>
      {[1,2,3,4].map(item=><h2>{item}</h2>)}
    </div>
  )
}
