"use client"
import { useRouter } from "next/navigation"

export const SignInButtonComponent = () => {
    const router = useRouter();

    return <button onClick={() => router.push("/signin")} className="border-solid border-2 border-black rounded-full p-2"> 
        Sign In
    </button>
}