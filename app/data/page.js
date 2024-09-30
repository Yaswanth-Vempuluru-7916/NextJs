"use client"

import { useEffect,useState } from "react"

const Data = () => {

    const [product ,setProduct] = useState([])
    useEffect(()=>{
        async function fetchData(){
            let data = await fetch('https://jsonplaceholder.typicode.com/albums')
            data = await data.json()
            console.log(data);
            setProduct(data)
        }
        fetchData()
    },[])
  return (
    <ul>
        {product?.map((p)=>(<li key={p.id} className="border m-5 py-2 px-4">{p.title}</li>))}
    </ul>
  )
}

export default Data