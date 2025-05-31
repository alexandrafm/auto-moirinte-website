import React from "react";
import MapSection from "./MapSection";

function ContactInfo() {
    return (
        <>
            <section id="contact" className="bg-[#1C1C1C] text-white max-w-4xl mx-auto text-center mt-10 ">
                <h2 className="text-3xl font-semibold mb-6">Contactos</h2>

                <div className="flex flex-col items-center gap-6">
                    {/* Telefone */}
                    <div>
                        <i className="fas fa-phone-alt mb-2 block mx-auto text-2xl"></i>
                        <p className="font-medium">+351 967 890 886</p>
                        <p className="text-sm mt-1 text-gray-400 max-w-xs mx-auto">
                            Número nacional de telemóvel. O custo da chamada depende do tarifário do seu operador.
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <i className="fas fa-envelope mb-2 block mx-auto text-2xl"></i>
                        <p className="font-medium">automoirinte@gmail.com</p>
                    </div>

                    {/* Morada */}
                    <div>
                        <i className="fas fa-map-marker-alt mb-2 block mx-auto text-2xl"></i>
                    </div>
                </div>
            </section>

            <MapSection
                type={"Oficina:"}
                address={"R. Zona Industrial do Moirinte Nº 571, 4575-447 Várzea do Douro, Portugal"}
                title="Oficina Localização"
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.2882468959174!2d-8.276397423272268!3d41.08454827133982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd249b0d2f70cacd%3A0xaaedfdd7f4f1b687!2sAuto%20Moirinte%20-%20Repara%C3%A7%C3%A3o%20e%20Com%C3%A9rcio%20de%20Autom%C3%B3veis%2C%20Pe%C3%A7as%20e%20Acess%C3%B3rios%2C%20Unipessoal%20Lda!5e0!3m2!1sen!2sch!4v1748694196115!5m2!1sen!2sch"}
            />
            <MapSection
                type={"Stand de Vendas:"}
                address={"Av. Central de Guilhufe, 4560-144 Guilhufe, Portugal"}
                title="Stand Localização"
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.243803923112!2d-8.308066223267895!3d41.19465797132504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2491fddb21c075%3A0x6075e29d2f273b6d!2sStand%20Auto%20Moirinte!5e0!3m2!1sen!2sch!4v1748694130583!5m2!1sen!2sch"}
            />
        </>);
}

export default ContactInfo;
