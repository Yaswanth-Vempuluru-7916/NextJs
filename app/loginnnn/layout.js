
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
        {children}
        Hello from the layout
        <Image src="https://www.hawtcelebs.com/wp-content/uploads/2018/01/ana-de-armas-at-los-angeles-confidential-celebrates-awards-issue-in-west-hollywod-01-13-2018-6.jpg"
     height={500}
     width={250}
     alt='ana '
     />
        <Footer/>
    </div>
  )
}

export default Layout