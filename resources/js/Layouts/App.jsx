import React from 'react'
import Navbar from './Navbar'

export default function ({ children }) {
    return (
        <div className='min-h-screen w-full bg-slate-100 dark:bg-gray-900'>
            <Navbar />
            {children}
        </div>
    )
}
