import React from 'react'

export default function Input({ children, ...input }) {
    
    return (
        <div>
            <label htmlFor={input.id} className="block text-gray-700 font-medium mb-1">{children}</label>
            <input
                {...input}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
        </div>
    )
}
