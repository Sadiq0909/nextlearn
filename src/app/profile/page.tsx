"use client";
import axios from "axios";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast"
;import {useRouter} from "next/navigation";

export default function ProfilePage() {

    const router = useRouter()
    const [data ,setData] = React.useState("Nothing")

    const logout=async()=>{
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout Successful")
            router.push("/login")
        } catch (error :any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    const getUserDetails = async()=>{
        const res = await axios.get("/api/users/me") ;
        console.log(res.data);
        setData(res.data.data._id) ; 
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>profile page</p>
            <hr />
            <h2 className="bg-orange-400 p-3 m-3">{data === "Nothing" ? "Nothing to show" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button
            onClick = {logout} 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-lime-400 hover:text-black">
                Logout
            </button>
            <button
            onClick = {getUserDetails} 
            className="p-2 border bg-neutral-600 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-lime-400 hover:text-black">
                Get User Details
            </button>
            
        </div>
    )
}