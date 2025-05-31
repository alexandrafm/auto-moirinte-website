import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

const oficinaServices = [
    {
        img: "/src/assets/services/spray-gun.png",
        title: "Pintura Automóvel",
    },
    {
        img: "/src/assets/services/automotive.png",
        title: "Chaparia Automóvel",
    },
    {
        img: "/src/assets/services/air-conditioner.png",
        title: "Climatização",
    },
    {
        img: "/src/assets/services/car-oil.png",
        title: "Mudança de Óleo",
    },
    {
        img: "/src/assets/services/license-plate.png",
        title: "Placas de Matrícula",
    },
    {
        img: "/src/assets/services/cleaning-spray.png",
        title: "Higienização Automóvel"
    },
    {
        img: "/src/assets/services//maintenance.png",
        title: "Revisão Oficial"
    },
    {
        img: "/src/assets/services/disc-brake.png",
        title: "Travões"
    },
    {
        img: "/src/assets/services/wiper.png",
        title: "Escovas Limpa Vidros"
    },
    {
        img: "/src/assets/services/car-battery.png",
        title: "Baterias Auto"
    }
];

export default function ServicesSlider() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };
    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         scrollRight();
    //     }, 3000);
    
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="lower py-8">
            <div className="container mx-auto px-4 relative">
                <div
                    ref={sliderRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
                    role="listbox"
                    aria-label="Serviços de Oficina"
                >
                    {oficinaServices.map(({ img, title }, i) => (
                        <div
                            key={i}
                            className="flex-none w-48 text-center"
                            role="option"
                            tabIndex={-1}
                        >
                            <img
                                loading="lazy"
                                src={img}
                                alt={title}
                                title={title}
                                className="mx-auto mb-2 icon-white"
                            />
                            <p className="text-white font-medium">{title}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={scrollLeft}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollRight}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
                    aria-label="Next Slide"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}
