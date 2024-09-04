import App from "@/Layouts/App";
import Slider from "@/Layouts/Slider.jsx";
import ModuleDescriptionImage from "@/Layouts/ModuleDescriptionImage.jsx";
import BookingForm from "@/Components/Booking/BookingForm";

export default function () {
    return (
        <App>
            <div className="relative">
                <Slider />
                <div className="absolute inset-0 max-w-screen-xl mx-auto h-full overflow-hidden">
                    <div className="flex justify-end items-center h-full w-full">
                        <div className="max-w-screen-xl mx-auto xl:mr-0 md:mr-4">
                            <BookingForm/>
                        </div>
                    </div>
                </div>
            </div>

            <ModuleDescriptionImage />
        </App>
    );
}
