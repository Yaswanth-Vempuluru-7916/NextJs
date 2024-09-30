'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname);
  return (

    <div>
{pathname==='/loginnnn/loginadmin' ? (

            <li> <Link href='/loginnnn/loginadmin'>Login Admin</Link> </li>
):( <nav>
  <ul className="login-menu border border-b-red-950">
         <li> <Link href='/loginnnn'>login</Link> </li>
         <li> <Link href='/loginnnn/loginuser'>login User</Link> </li>
     </ul>
</nav>)}
  
    </div>
  )
}

export default Navbar