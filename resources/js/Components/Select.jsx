import React from 'react'

export default function ({ children, id, options, ...select }) {
    return (
        <div>
            <label htmlFor={id} className="block text-gray-700 dark:text-gray-300 font-medium mb-1 sm:mb-2">{children}</label>
            <select
                {...select}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
