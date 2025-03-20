import { NextResponse } from "next/server";
import { db  } from "../../../db";
import { usersTable } from "@/db/schema";
import bcrypt from "bcryptjs";
import { error } from "console";

export async function POST(req:Request){
    try{
        const { name, email,password,confirmPassword} = await req.json();

        if(password!==confirmPassword){
            return NextResponse.json({error:"Password do not match"}
                ,{status:400}
            );
        }

        const hashedPassword = await bcrypt.hash(password,10);
  
        await db.insert(usersTable).values({
            name,
            email,
            password:hashedPassword,
        });

        return NextResponse.json({message:"User Created Successfully"},
            {status:201}
        );
    }catch(error){
        console.log(error);
        return NextResponse.json({error:"Internal Server Error Can not push the data"},
            {status:500}
        )
    }
}