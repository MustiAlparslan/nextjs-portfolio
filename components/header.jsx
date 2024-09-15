import React from 'react'
export default function Header() {
    return (
        <div className="flex flex-col items-center mb-8">
            <img
                src="/images/profilephoto.jpg" 
                alt="Mustafa Batuhan Alparslan"
                className="w-40 h-42 rounded-full mb-4 "
            />
            <h1 className="text-4xl font-bold">Mustafa Batuhan Alparslan</h1>
            <p className="text-xl mt-2">Frontend Developer</p>
        </div>
    )
}
