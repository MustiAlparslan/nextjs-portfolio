import React from 'react'

export default function Social() {
    return (
        <div className="flex mt-4 space-x-6">
            <a className='hover:opacity-50 rounded-md  p-2 bg-slate-200' href="https://medium.com/@mustialparslan" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111505.png" alt="Medium" className="w-8" />
            </a>
            <a className='hover:opacity-50 rounded-md p-2 bg-slate-200' href="https://www.linkedin.com/in/mustafa-alparslan-40b783233/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8" />
            </a>
            <a className='hover:opacity-50 rounded-md p-2 bg-slate-200' href="https://github.com/MustiAlparslan" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8" />
            </a>

        </div>
    )
}
