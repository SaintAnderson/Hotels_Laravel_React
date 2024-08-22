import App from "@/Layouts/App";
import Navbar from "@/Layouts/Navbar";

import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "@/Layouts/Slider.jsx";
import BookingForm from "@/Layouts/BookingForm.jsx";
import Module_Description_Image from "@/Layouts/Module_Description_Image.jsx";

export default function Index({ adults, childrens }) {
    return (
        <App>
            <Navbar />
            <div className="relative">
                <Slider/>
                <Module_Description_Image/>
                <div className="absolute right-40 top-[25%]">
                    <BookingForm adults={adults} childrens={childrens}/>
                </div>
            </div>
        </App>
    );
}
