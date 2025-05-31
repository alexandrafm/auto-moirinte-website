import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="bg-[#1C1C1C] p-4 flex justify-between items-center">
      <span className="text-sm text-white">© 2025 Auto Moirinte</span>
      <div className="flex gap-6 text-white text-2xl">
        <a href="https://www.facebook.com/standautomoirinte/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/standautomoirinte?igsh=aWZ5bmhhZ214MnF5" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}


export default Footer;
