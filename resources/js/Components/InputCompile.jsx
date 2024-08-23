import React from 'react'
import Input from './Input';

export default function InputCompile({ children, filteredItems, onItemSelect, ...input }) {
    return (
        <div className="mb-4 relative">
            <Input
                {...input}
                autoComplete="off"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300"
            >
                {children}
            </Input>

            {input.value.length > 0 && filteredItems.length > 0 && (
                <ul className="absolute bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md mt-1 max-h-60 overflow-auto z-10 w-full">
                    {filteredItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => onItemSelect(item)}
                            className="px-3 py-2 hover:bg-blue-100 dark:hover:bg-blue-600 dark:text-white cursor-pointer"
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
