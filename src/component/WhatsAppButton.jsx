import { FaWhatsapp } from "react-icons/fa";
import "../css/WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "9804044190"; // 🔁 replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}