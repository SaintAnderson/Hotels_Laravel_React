import { useState } from "react";
import Range from "../Range";

export default function () {
    const [value, setValue] = useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Range id="peopleCount" name="peopleCount" min={1} max={5} value={value} onChange={handleChange}>Людей</Range>
    )
}
