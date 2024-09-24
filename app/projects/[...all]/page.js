'use client'

import React from 'react'

const Project = ({params}) => {
    console.log(params)
  return (<section>

      <div>Project {params.all}</div>

      <div>{params.all.map((route,id)=>(<li key={id}>{route}</li>))}</div>
  </section>
  )
}

export default Project