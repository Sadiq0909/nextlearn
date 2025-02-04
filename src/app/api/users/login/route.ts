import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { error } from "console";
import jwt from "jsonwebtoken"

connect() ; 

export async function POST(request : NextRequest){
    try {

        const reqBody = await request.json() ;
        const {email ,password} = reqBody ; 
        console.log(reqBody) ; 

        // Check if user exist or not
        const user = await User.findOne({email}) ;
        if(!user){
            return NextResponse.json({error : "User does not exist"},{status:400})
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password ,user.password) ;
        if(!validPassword){
            return NextResponse.json({error : "Password is incorrect"} , {status : 400})
        }

        // Create Token Data (JWT)
        const tokenData = {
            id : user._id,
            username : user.username ,
            email : user.emai
        }
        // Create Token 
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET! , {expiresIn :"2d"});
        const response = NextResponse.json({
            message :"Login Sucessfully",
            success : true ,
        })
        response.cookies.set("token" , token , {
            httpOnly : true , 
        })

        return response ; 
        
    } catch (error : any) {
        return NextResponse.json({
            error : error.message} ,{
            status : 500
        })
    }
}