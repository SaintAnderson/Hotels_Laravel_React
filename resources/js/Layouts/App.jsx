import React from 'react'

export default function App({ children }) {
    return (
        <div className='min-h-screen w-full bg-slate-100 dark:bg-gray-900'>
            {children}
        </div>
    )
}
