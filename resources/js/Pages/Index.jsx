import App from "@/Layouts/App";
import Slider from "@/Layouts/Slider.jsx";
import ModuleDescriptionImage from "@/Layouts/ModuleDescriptionImage.jsx";
import CheckIn from "@/Components/Booking/CheckIn";
import CheckOut from "@/Components/Booking/CheckOut";
import City from "@/Components/Booking/City";
import PeopleCount from "@/Components/Booking/PeopleCount";

export default function ({ peoples }) {
    return (
        <App>
            <div className="relative">
                <Slider />
                <div className="absolute inset-0 max-w-screen-xl mx-auto h-full overflow-hidden">
                    <div className="flex justify-end items-center h-full w-full">
                        <div className="max-w-screen-xl mx-auto xl:mr-0 md:mr-4">
                            <form className="bg-white dark:bg-gray-900 p-6 p-8 rounded-lg shadow-md w-full max-w-lg" action={route('data')}>
                                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Бронирование</h2>

                                <div className="grid grid-cols-2 gap-4 mb-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                                    <CheckIn />
                                    <CheckOut />
                                </div>

                                <City />

                                <div className="mb-4">
                                    <PeopleCount />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-700"
                                >
                                    Поиск
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ModuleDescriptionImage />
        </App>
    );
}
