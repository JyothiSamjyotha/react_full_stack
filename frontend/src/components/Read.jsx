import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {

    const [data,setdata] = useState([])
    const [error,seterror] = useState("")

    async function getData(){
        const response = await fetch("http://localhost:5000");
        const result = await response.json();

        if(!response.ok){
            seterror(result.error);
            console.log(result.error)
        }
        if(response.ok){
            setdata(result)
        }

    }
    
    console.log(data)

    useEffect(()=>{
        getData();

    },[])

    console.log(data)


    async function handledelete(id){
        const response = await fetch(`http://localhost:5000/${id}`,{
            method:"DELETE",
        });
        const result = await response.json();

        if(!response.ok){
            seterror(result.error);
            console.log(result.error)
        }
        if(response.ok){
            seterror("Deleted successfully")
            setTimeout(() =>{
                seterror("")
                getData()
            },2000)
        }

    }


  return (
    <>
    <div >
        {error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span class="font-medium">{error}</span>
</div>}
        <h1 className='text-3xl font-bold text-center'>All Data</h1>
        <div className='grid grid-cols-3 gap-8 mx-4'>
        {data?.map((ele)=>(
            // <div  className='flex flex-col-3 w-full'>
            <div key={ele._id} className='flex flex-col items-center border border-gray-300   p-3 space-y-3'>
            <h1 className='font-bold text-2xl'>{ele.name}</h1>
            <h1>{ele.email}</h1>
            <h1>{ele.age}</h1>
            <div className='space-x-2 flex items-center'>
                <Link className='hover:underline hover:text-blue-400' onClick={() => handledelete(ele._id)}>Delete</Link>
                <Link to={`/${ele._id}`} className='hover:underline hover:text-blue-400'>Edit</Link>
            </div>

        </div>
        )) }
        </div> 
    </div>
    </>
  )
}

export default Read