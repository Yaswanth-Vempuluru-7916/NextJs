import React from 'react'
import Sukuna from '@/public/sukuna.png'
import Image from 'next/image'

const Users = () => {
  return (
    <div>Users
<Image src={Sukuna} alt='sukuna' height={600} width={500}/>

    </div>
  )
}

export default Users

export const generateMetadata = ()=>{
    return {
        title : "This is users page",
        description : 'Users'
    }
}