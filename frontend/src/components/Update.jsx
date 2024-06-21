import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [age,setage] = useState(0)
    const [error,seterror] = useState("")
    
    const {id} = useParams()
    const navigate = useNavigate()

    const usersingle = async () => {
      
      const response = await fetch(`http://localhost:5000/${id}`);
      const result = await response.json();

      if(!response.ok){
          seterror(result.error);
          console.log(result.error)
      }
      if(response.ok){
        seterror("")
        setname(result.name);  
            setemail(result.email);
            setage(result.age);

      }

    }

    useEffect(()=>{
      usersingle()
    },[])

    const handleedit = async (e) => {
      e.preventDefault()

      const updateduser = {name,email,age}
      

      const response = await fetch(`http://localhost:5000/${id}`,{
          method:"PATCH",
          body:JSON.stringify(updateduser),
          headers:{
              "Content-Type" : "application/json"
          }
      });
      const result = await response.json();

      if(!response.ok){
          seterror(result.error)
      }
      if(response.ok){
        seterror("")
          navigate("/all")
      }
    }
    

  return (
    <>
    <div className="flex flex-col px-24 items-center py-4 space-y-3">
        {
            error && <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="font-medium">{error}</span></div>
        }
        <h1 className='text-3xl font-bold'>Edit the data</h1>
        <h2>name</h2>
        <input type="text" value={name} className='w-full rounded-md border border-gray-300 focus:outline-none' onChange={(e)=>setname(e.target.value)}/>
        <h2>Email Address</h2>
        <input type="email" value={email} className='w-full rounded-md border border-gray-300 focus:outline-none ' onChange={(e)=>setemail(e.target.value)}/>
        <h2>Age</h2>
        <input type="number" value={age} className='w-full rounded-md border border-gray-300 focus:outline-none' onChange={(e)=>setage(e.target.value)}/>
        <button type="submit" className=' bg-blue-500 px-4 py-2 text-white rounded-md ' onClick={handleedit} >Submit</button>
    </div>
    </>
  )
}

export default Update;