import React from 'react'

export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="mt-12 text-center">
            <p className="text-gray-600">© {year.toString()} Mustafa Batuhan Alparslan - All Rights Reserved</p>
        </footer>

    )
}
