async function fetchData(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    data = await data.json()
    
    return data
}

const Data = async () => {

    let products = await fetchData();
    console.log(products);   //Since this is a server component we  wont see the dat in the browser console 
   
  return (
    <ul>
        {products?.map((p)=>(<li key={p.id} className="border m-5 py-2 px-4">{p.title}</li>))}
    </ul>
  )
}

export default Data