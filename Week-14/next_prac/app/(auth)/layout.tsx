import React from "react";

export default function banner({ children } : { children: React.ReactNode}) {
    return <div>
        <div className="text-center border-b-2 border-black p-1" >
            <a className="hover:text-blue-400 underline" href="https://www.amazon.in/">20% off on all Premiums for this week.</a>
        </div>
        { children }
    </div>
}