import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [burger, setBurger] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                        Fuck you
                    </span>
                </a>
                <button
                    onClick={() => setBurger(e => !e)}
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`${burger ? 'block' : 'hidden'} w-full md:flex md:w-auto items-center md:space-x-4`} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded relative group"
                            >
                                Главная
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-700 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded relative group"
                            >
                                Новости
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-700 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded relative group"
                            >
                                Номера
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-700 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded relative group"
                            >
                                Цены
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-700 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white rounded relative group"
                            >
                                Отзывы
                                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-700 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        {isDarkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25M6.364 6.364l1.591 1.591M3 12h2.25M6.364 17.636l1.591-1.591M12 18.75V21M17.636 17.636l-1.591-1.591M21 12h-2.25M17.636 6.364l-1.591 1.591M12 9.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0112.003 21C6.485 21 2 16.515 2 11S6.485 1 12.003 1a9.718 9.718 0 019.749 5.998A9.74 9.74 0 0112 7.751c0 .517.035 1.025.1 1.524A9.713 9.713 0 0121.752 15z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
