import React from "react";
import ServicesSlider from "./ServicesSlider";

function ServicesSection() {
    return (
        <section id="services" className="max-w-5xl mx-auto px-6 py-16 bg-[#1C1C1C]">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Os Nossos Serviços</h2>

            <div className="flex flex-col gap-20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/src/assets/car1.jpg"
                            alt="Oficina de Chaparia e Pintura"
                            className="max-h-80 w-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 text-white text-center md:text-left">
                        <h3 className="text-3xl font-semibold mb-4">Oficina - Chaparia e Pintura</h3>
                        <p className="leading-relaxed">
                            Na nossa oficina especializada, oferecemos serviços de chaparia e pintura com alta qualidade para deixar o seu carro como novo. Equipa experiente e materiais de ponta garantem resultados duradouros e satisfatórios.
                        </p>
                    </div>
                </div>

                <ServicesSlider />

                <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/src/assets/publicity.jpg"
                            alt="Stand de Carros Usados"
                            className="max-h-80 w-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 text-white text-center md:text-left">
                        <h3 className="text-3xl font-semibold mb-4">Stand de Carros Usados</h3>
                        <p className="leading-relaxed">
                            Usados certificados com garantia. Encontre aqui o carro ideal para si!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
