import {connect} from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest , NextResponse } from "next/server";
import brcypt from "bcryptjs";

 connect() ;

 export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {usrename , email,password} = reqBody ;
        if(!usrename || !email || !password){
            return NextResponse.json({error : "Please fill all the fields"},{status : 400})
        }   
        console.log(reqBody) ;
        
    } catch (error : any) {
        return NextResponse.json({error :error.message},{status : 500})
    }
 }