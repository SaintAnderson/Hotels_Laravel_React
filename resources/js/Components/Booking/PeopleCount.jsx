import { useState } from "react";
import Range from "../Range";

export default function ({ max, disabled=false }) {
    const [value, setValue] = useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Range id="peopleCount" name="peopleCount" min={1} max={max} value={value} disabled={disabled} onChange={handleChange}>Людей</Range>
    )
}
