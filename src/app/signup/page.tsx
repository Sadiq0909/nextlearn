"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";


export default function SignupPage() {

    const [user , setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const onSignup = async()=>{

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <label htmlFor="username">username</label>
            <input 
            className="border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none text-black"
            type="text"
            id="username"
            value={user.username}
            onChange={(e)=> setUser({...user, username: e.target.value})}
            placeholder="username"
            />
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
            <button className="bg-black hover:bg-blue-700 text-white border border-white font-normal py-2 px-4 rounded my-4" onClick={onSignup}>Signup</button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}