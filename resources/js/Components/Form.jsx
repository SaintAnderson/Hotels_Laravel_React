import React from 'react'

export default function Form({ children, title, ...form }) {
    return (
        <form {...form}>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-lg md:max-w-2xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">{title}</h2>
                {children}
            </div>
        </form>
    )
}
