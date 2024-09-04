import { useState } from "react";
import Form from "../Form";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import City from "./City";
import PeopleCount from "./PeopleCount";

export default function () {
    const [peoples, setPeoples] = useState(0);

    return (
        <Form id="booking" title="Бронирование" action={route('rooms')}>
            <div className="grid grid-cols-2 gap-4 mb-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <CheckIn />
                <CheckOut />
            </div>

            <City setPeoples={setPeoples}/>

            <div className="mb-4">
                <PeopleCount max={peoples} disabled={peoples == 0 ? true : false}/>
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
