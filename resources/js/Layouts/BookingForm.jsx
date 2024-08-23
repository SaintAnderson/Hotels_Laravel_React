import Input from "@/Components/Input.jsx";
import InputCompile from "@/Components/InputCompile.jsx";
import Select from "@/Components/Select.jsx";
import Form from "@/Components/Form.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ({ adults, childrens }) {
    const [adultsData, setAdultsData] = useState([]);
    const [childrensData, setChildrensData] = useState([]);

    useEffect(() => {
        setAdultsData(() => adults.map(data => ({
            id: data.id,
            name: data.adult,
        })));
        setChildrensData(() => childrens.map(data => ({
            id: data.id,
            name: data.children,
        })));
    }, []);

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
        <Form title='Бронирование'>
            <div className="grid grid-cols-2 gap-4 mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <Input id="arrival-date" type="date" name="CheckIn">Дата приезда</Input>
                <Input id="departure-date" type="date" name="CheckOut">Дата ухода</Input>
            </div>

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

            <div className="grid grid-cols-2 gap-4 mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <Select id="adults" name='adults' options={adultsData}>Взрослых</Select>
                <Select id="childrens" name='childrens' options={childrensData}>Детей</Select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-700"
            >
                Поиск
            </button>
        </Form>

    )
}
