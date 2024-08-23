import App from "@/Layouts/App";
import Navbar from "@/Layouts/Navbar";
import Slider from "@/Layouts/Slider.jsx";
import BookingForm from "@/Layouts/BookingForm.jsx";
import Module_Description_Image from "@/Layouts/Module_Description_Image.jsx";

export default function Index({ adults, childrens }) {
    return (
        <App>
            <Navbar />
            <div className="relative">
                <Slider />
                <div className="absolute inset-0 max-w-screen-xl mx-auto h-full overflow-hidden">
                    <div className="flex justify-end items-center h-full w-full">
                        <div className="max-w-screen-xl mx-auto xl:mr-0">
                            <BookingForm adults={adults} childrens={childrens}/>
                        </div>
                    </div>
                </div>
            </div>

            <Module_Description_Image />
        </App>
    );
}
