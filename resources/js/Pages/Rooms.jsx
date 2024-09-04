import BookingForm from '@/Components/Booking/BookingForm'
import HotelCard from '@/Components/HotelCard'
import App from '@/Layouts/App'
import React from 'react'

export default function () {
    return (
        <App>
            <div className='md:mx-0 mx-4'>
                <div className='max-w-screen-xl mx-auto mt-4 flex flex-wrap justify-center'>
                    <BookingForm/>
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
