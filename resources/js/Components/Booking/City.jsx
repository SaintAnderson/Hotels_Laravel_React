import InputCompile from "@/Components/InputCompile.jsx";
import axios from "axios";
import { useState } from "react";

export default function () {
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    const handleCityChange = async (event) => {
        const value = event.target.value;
        setSelectedCity(value);

        if (value) {
            try {
                const response = await axios.get(route('api.get.cities'), {
                    params: {
                        q: value,
                    }
                });
                setFilteredCities(() => response.data.map(data => (
                    {
                        name: data.city,
                    }
                )));
            } catch (error) {
                setFilteredCities([]);
                console.error(error);
            }
        }
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city.name);
        setFilteredCities([]);
    };

    return (
        <InputCompile
        placeholder="Введите город"
        name="city"
        value={selectedCity}
        filteredItems={filteredCities}
        onItemSelect={handleCitySelect}
        onChange={handleCityChange}
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
        Город
    </InputCompile>
    )
}
