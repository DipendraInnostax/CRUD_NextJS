"use client";
import { MdAdd } from "react-icons/md";
import { useRouter } from 'next/navigation';
import axios from 'axios';
const AddTask = () => {
    
    const {push} = useRouter();

    const HandleAdd=()=>{
        push('/add');
    }

  return (
    <div>
        <button className='border-black btn btn-primary w-4/12 btn-circle font-semibold text-xl bg-green-300 text-black
                           hover:bg-green-500 hover:border-black' onClick={HandleAdd}>Add Task
           <MdAdd size={18}/>
        </button>
    </div>
  )
}


export default AddTask