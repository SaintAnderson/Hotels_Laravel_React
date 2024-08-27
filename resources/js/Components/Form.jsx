import React from 'react'

export default function ({ children, title, ...form }) {
    return (
        <form {...form}>
            <div className="bg-white dark:bg-gray-900 p-6 p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
                {children}
            </div>
        </form>
    )
}
