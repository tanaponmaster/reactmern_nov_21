import React from 'react'

export default function App() {

  // const data = [1,2,3,4,5,6]
  const data = [
    {title: 'angular', price: 100},
    {title: 'vuejs', price: 200},
    {title: 'react', price: 300},
    {title: 'react', price: "300", tag: 1},
  ]

  return (
    <div>
      {/* JSX */}
      <h1>{Math.random()}</h1>
      {data.map(item=><h2>{item.title}: {item.price} {item.tag}</h2>)}
    </div>
  )
}
