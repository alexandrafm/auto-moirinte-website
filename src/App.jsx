import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";
import CarCarousel from "./components/CarCarousel";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1C1C1C]">
      <Header />
      <CarCarousel />
      <main className="flex-grow bg-[#1C1C1C]">
        <ServicesSection />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;