import InputCompile from "@/Components/InputCompile.jsx";
import axios from "axios";
import { useState } from "react";

export default function ({ setPeoples }) {
    const [selectedHotels, setSelectedHotels] = useState('');
    const [filteredHotels, setFilteredHotels] = useState([]);

    const handleChange = async (event) => {
        const value = event.target.value;
        setSelectedHotels(value);

        if (value) {
            try {
                const form = new FormData(document.getElementById('booking'));

                const response = await axios.get(route('api.get.hotels.search'), {
                    params: Object.fromEntries(form.entries()),
                });
                setFilteredHotels(() => response.data.map(data => (
                    {
                        name: data.city + ', ' + data.address,
                    }
                )));
                setPeoples(10);
            } catch (error) {
                setFilteredHotels([]);
                console.error(error);
            }
        }
    };

    const handleSelect = (data) => {
        setSelectedHotels(data.name);
        setFilteredHotels([]);
    };

    return (
        <InputCompile
            placeholder="Введите Город, Адрес"
            name="address"
            value={selectedHotels}
            filteredItems={filteredHotels}
            onItemSelect={handleSelect}
            onChange={handleChange}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
            Город
        </InputCompile>
    )
}
