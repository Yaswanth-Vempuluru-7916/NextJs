'use client'

import React from 'react'
// import { useRouter } from 'next/navigation'
// import { Roboto } from 'next/font/google'

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: "500"
// })
const Home = () => {

  // const router = useRouter()
  return (
    <section>
      {/* <p> Google </p>
      <p className={roboto.className}>This is Roboto Google</p> */}
      {/* <h1>
      useRouter
<button onClick={()=>router.push('about')}>Go To About Page</button> <br />
<button onClick={()=>router.push('login')}>Go To login Page</button>
      </h1> */}
     <h1 className='text-3xl font-bold'>Complete Next Js Course from Huxn</h1> 
    </section>
  )
}

export default Home