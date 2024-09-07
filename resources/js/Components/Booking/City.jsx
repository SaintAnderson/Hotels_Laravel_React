import InputCompile from "@/Components/InputCompile.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function () {
    const [selectedHotels, setSelectedHotels] = useState('');
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        getData();
    }, [isActive]);

    const getData = async () => {
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
        } catch (error) {
            console.error(error);
        }
    }

    const handleSelect = (data) => {
        setSelectedHotels(data.name);
        setFilteredHotels([]);
        setIsActive(false);
    };

    const handleChange = (event) => {
        setSelectedHotels(event.target.value);
    };

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        // setIsActive(false);
    }

    return (
        <InputCompile
            placeholder="Введите Город, Адрес"
            name="address"
            value={selectedHotels}
            filteredItems={filteredHotels}
            onItemSelect={handleSelect}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isActive={isActive}
        >
            Город
        </InputCompile>
    )
}
