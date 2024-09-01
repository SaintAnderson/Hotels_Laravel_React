export default function ({ name, city, pricePerNight, imageUrl, maxGuests }) {
    return (
        <div className="flex-grow w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)] max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-900">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{name}</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">{city}</p>
                <p className="text-gray-900 dark:text-gray-200 text-lg font-semibold mt-2">
                    {pricePerNight} ₽/сутки
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Вмещает: {maxGuests} {maxGuests === 1 ? 'человек' : 'человека'}
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Забронировать
                </button>
            </div>
        </div>
    );
}