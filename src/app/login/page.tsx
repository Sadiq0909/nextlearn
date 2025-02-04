"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";


export default function LoginPage () {

    const [user , setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async()=>{

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <label htmlFor="email">email</label>
            <input 
            className="border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none text-black"
            type="email"
            id="email"
            value={user.email}
            onChange={(e)=> setUser({...user, email: e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
            className="border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none text-black"
            type="password"
            id="password"
            value={user.password}
            onChange={(e)=> setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button className="bg-black hover:bg-blue-700 text-white border border-white font-normal py-2 px-4 rounded my-4" onClick={onLogin}>Login</button>
            <Link href="/signup">Visit Signup Page</Link>
        </div>
    )
}