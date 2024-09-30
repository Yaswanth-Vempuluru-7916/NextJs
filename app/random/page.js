import React from 'react'

const page = () => {
    console.log(process.env.MONGO_URI);
    console.log(process.env.JWT_SECRET);
  return (
    <div>
        {process.env.MONGO_URI?(
            <h1>DB Succesfully Connected</h1>
        ):(
            <h1>404 error</h1>
        )}
    </div>
  )
}

export default page