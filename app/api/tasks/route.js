import DBConnect from "@/lib/db";
import Task from "@/models/task";
import { NextResponse } from "next/server";


export async function GET(){
  try {
    await DBConnect();
    const tasks=await Task.find({});
    console.log("\nPresenting ALL TASKS :\n",tasks);
    return NextResponse.json(tasks,{status:201});
    
  } catch (error) {
     return NextResponse.json({error:"Failed to fetch tasks"},{status:501});
  }
}



export async function POST (req){
  try {
    await DBConnect();
    const body=await req.json()

    if(!body.task){
      console.warn("Task field is missing");
      return NextResponse.json({error:"task empty"},{status:400});
   }
   
    console.log("Creating new task",body);

    const newTask=new Task(body);
    await newTask.save();

    console.log("Task created:", newTask);
    return NextResponse.json(newTask,{status:201});
  } 
  catch (error) {
    console.log("error",error);
    return NextResponse.json({error:"Error Occured"},{status:501});
    
  }
}