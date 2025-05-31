import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-[#1C1C1C] text-white text-sm py-1 px-4 flex justify-end items-center gap-4 z-50">
      <span className="text-[#A77224] font-semibold">+351 255 614 953</span>
        <div className="flex gap-4">
        <a href="https://www.facebook.com/standautomoirinte/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/standautomoirinte?igsh=aWZ5bmhhZ214MnF5" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <header className="bg-[#1C1C1C] w-full shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Auto Moirinte" className="h-48 w-auto" />
          </div>

          {/* MENU */}
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
            <a href="#home" className="hover:text-gray-300 transition-colors">Início</a>
            <a href="#services" className="hover:text-gray-300 transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contactos</a>
          </nav>

          {/* Mobile nav */}
          {menuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm text-white z-40 flex flex-col items-center justify-center space-y-6"
              onClick={() => setMenuOpen(false)}
            >
              <a href="#home" className="text-lg hover:text-gray-300" onClick={() => setMenuOpen(false)}>Início</a>
              <a href="#services" className="text-lg hover:text-gray-300" onClick={() => setMenuOpen(false)}>Serviços</a>
              <a href="#contact" className="text-lg hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contactos</a>
            </div>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white z-50 relative"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
