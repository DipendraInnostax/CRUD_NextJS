import DBConnect from "@/lib/db";
import Task from "@/models/task";
import { NextResponse } from "next/server";


export async function DELETE(req,{params}){ 
    try {
         // console.log("+++++ dinkar", context);
        // // console.log("+++++ dinkar", req);
        await  DBConnect();
       // const  {params}  = context;
        const { id } = await params;
         console.log("id",id);
         
       const idd= await Task.findById(id);
       if(!idd){ 
         return NextResponse.json({error:"ID not found in Database"},{status:500});
        }
        else{ 
            await Task.findByIdAndDelete(id);
            // Task.Save();
            console.log("deleted");
            return NextResponse.json({message:"deleted " },{status:201});
        }
    } 
    catch (error) {
        console.log("errorFound",error);
        return NextResponse.json({error:"error found "},{status:500});
    }
}


export async function PUT(req,{params}){
    try {
        await DBConnect();
        const {id}= await params;
           console.log("id:",id);
        const body = await req.json();
        const data=await Task.findByIdAndUpdate(id,body,{
            new:true,
            runValidators:true,
        });

        if(!data) return NextResponse.json({error:"data not found"},{status:500});

        return NextResponse.json(data,{status:201});

        
    } catch (error) {
        console.log("error found",error);
        return NextResponse.json({error:"Error Found"},{status:500});
    }
}