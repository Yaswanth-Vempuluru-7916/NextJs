"use client"

import React, { useState } from 'react'
const AddNewUser = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    
    const AddNewUserHandler=async()=>{
    let response =   await fetch('api/users',{
        method : 'POST',
        body : JSON.stringify({name,age,email})
      })

      response = response.json();

      if(response.ok){
        alert('User Successfully Created')
      }else{
        alert("Alert occured while creating")
      }
    }
  return (
    <div>
        <input type="text"  onChange={e=>setName(e.target.value)} value={name} placeholder='Please enter your name'/> <br />
        <input type="number"  onChange={e=>setAge(e.target.value)} value={age} placeholder='Please enter your age'/><br />
        <input type="text"  onChange={e=>setEmail(e.target.value)} value={email} placeholder='Please enter your email'/>

        <button onClick={AddNewUserHandler}>Submit</button>
    </div>
  )
}

export default AddNewUser