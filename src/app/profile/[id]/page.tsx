export default function UserProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">profile page 
                <span className="p-2 bg-lime-400 text-black rounded-md ml-2">{params.id}</span>
            </p>
        </div>
    )
}