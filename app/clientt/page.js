'use client'
//client component
import React from 'react'

const Client = () => {
    console.log(`Hello from the client component`)
  return (
    <button onClick={()=>alert("Hello")}>Client</button>
  )
}

export default Client