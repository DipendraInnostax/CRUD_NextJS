"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react'

export default function page({params}) {
  const unwrappedParams = use(params); 
  const { id } = unwrappedParams; 

  const {push} = useRouter()

  const [value,setValue]=useState({
          task:"",
          description:""
      });

  const handleOnchange=(e)=>{
    setValue({
        ...value,
        [e.target.name]:e.target.value
    })
}
const handleSubmit=async()=>{
  try {
     // alert("hii");
      if (id) {
        const request=await axios.put(`/api/tasks/${id}`,value);
        push('/');
      }
      console.log(value)
    } catch (error) {
        console.log(error);
    }
}

  


  return (
    <div className='h-screen flex justify-center'>
        <div className='flex flex-col p-10 mt-32 h-80 gap-6 rounded-lg bg-green-300 '>
            <h1 className='text-xl font-semibold text-black '>UPDATE YOUR TODOS</h1>

            <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                </span>
                     <input className="placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="enter Tasks" type="text" name='task'onChange={handleOnchange} value={ value.task} />
              </label>
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                </span>
                     <input className="placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                        placeholder="Enter description" type="text" name='description'onChange={handleOnchange} value={ value.description} />
              </label>
              <button className='rounded-lg bg-green-500 px-4 py-2 text-white font-bold'onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
