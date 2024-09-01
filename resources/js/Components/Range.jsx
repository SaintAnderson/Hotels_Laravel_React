export default function ({ id, children, ...input }) {
    return (
        <>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {children}
            </label>
            <div className="flex items-center">
                <input
                    id={id}
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    {...input}
                />
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">{input.value}</span>
            </div>
        </>
    )
}
