'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
const Home = () => {

  const router = useRouter()
  return (
    <section>
      <h1>
      useRouter
<button onClick={()=>router.push('about')}>Go To About Page</button> <br />
<button onClick={()=>router.push('login')}>Go To login Page</button>
      </h1>
      </section>
  )
}

export default Home