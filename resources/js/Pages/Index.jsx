import Form from "@/Components/Form";
import Input from "@/Components/Input";
import InputCompile from "@/Components/InputCompile";
import Select from "@/Components/Select";
import App from "@/Layouts/App";
import Navbar from "@/Layouts/Navbar";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Index({ adults, childrens }) {    
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
        <App>
            <Navbar />
            <div className="max-w-screen-xl mx-auto my-3">
                <Form title='Бронирование'>
                    <div className="grid md:grid-cols-2 md:gap-4 mb-4">
                        <Input id="arrival-date" type="date" name="CheckIn">Дата приезда</Input>
                        <Input id="departure-date" type="date" name="CheckOut">Дата ухода</Input>
                    </div>

                    <InputCompile
                        placeholder="Введите город"
                        name="city"
                        value={selectedCity}
                        filteredItems={filteredCities}
                        onItemSelect={handleCitySelect}
                        onChange={handleCityChange}>Город</InputCompile>

                    <div className="grid md:grid-cols-2 md:gap-4 mb-4">
                        <Select id="adults" name='adults' options={adultsData}>Взрослых</Select>
                        <Select id="childrens" name='childrens' options={childrensData}>Детей</Select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Забронировать
                    </button>
                </Form>
            </div>
        </App>
    );
}
