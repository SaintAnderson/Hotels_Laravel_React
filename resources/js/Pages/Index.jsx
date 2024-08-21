import Form from "@/Components/Form";
import Input from "@/Components/Input";
import InputCompile from "@/Components/InputCompile";
import Select from "@/Components/Select";
import App from "@/Layouts/App";
import { useState } from "react";
import Menu from "@/Components/Menu.jsx"
export default function Index() {
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
                console.log('Ошибка при получении городов: ' + error);
            }
        }
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city.name);
        setFilteredCities([]);
    };

    const [adults, setAdults] = useState([
        {
            id: 1,
            name: 'Test',
        }
    ]);

    const [childrens, setChildrens] = useState([
        {
            id: 1,
            name: 'Test2',
        },
        {
            id: 2,
            name: 'Test3',
        },
    ]);

    return (
        <App>
            <Menu/>
            <div>
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
                        <Select id="adults" name='adults' options={adults}>Взрослых</Select>
                        <Select id="childrens" name='childrens' options={childrens}>Детей</Select>
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
