import CheckIn from '@/Components/Booking/CheckIn'
import CheckOut from '@/Components/Booking/CheckOut'
import City from '@/Components/Booking/City'
import PeopleCount from '@/Components/Booking/PeopleCount'
import HotelCard from '@/Components/HotelCard'
import App from '@/Layouts/App'
import React from 'react'

export default function () {
    return (
        <App>
            <div className='md:mx-0 mx-4'>
                <div className='max-w-screen-xl mx-auto mt-4 flex flex-wrap justify-center'>
                    <form className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full'>
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
                <div className='max-w-screen-xl mx-auto mt-4 flex flex-wrap justify-between gap-2'>
                    <HotelCard
                        name="Hotel California"
                        city="Los Angeles, CA"
                        pricePerNight={7500}
                        maxGuests={10}
                        imageUrl="https://media.istockphoto.com/id/1452529483/fr/photo/rendu-3d-de-chambre-dh%C3%B4tel-de-luxe.jpg?s=1024x1024&w=is&k=20&c=O5p5Fhrpvjd9ZU1hZ9dYGy_c7fll8nLSNAhEab1X3XU="
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                    <HotelCard
                        name="The Grand Budapest Hotel"
                        city="Zubrowka"
                        pricePerNight={12000}
                        maxGuests={4}
                        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    />
                </div>
            </div>
        </App>
    )
}
