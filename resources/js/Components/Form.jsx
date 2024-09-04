export default function ({ title, children, ...form }) {
    return (
        <form className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full' {...form}>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>

            {children}
        </form>
    )
}
