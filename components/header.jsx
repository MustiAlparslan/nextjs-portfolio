import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-col items-center mb-8">
            <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" // Kendi fotoğraf linkini buraya ekle
                alt="Mustafa Batuhan Alparslan"
                className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-4xl font-bold">Mustafa Batuhan Alparslan</h1>
            <p className="text-xl mt-2">Frontend Developer</p>
        </div>
    )
}
