import {Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
function Footer() {
  const location = useLocation();
  const hideAppointment = 
  location.pathname === "/jinan" || 
  location.pathname.startsWith("/jinan/") ||
  location.pathname === "/eidPret" || 
  location.pathname.startsWith("/eidPret/") ||
  location.pathname === "/Zan" ||
  location.pathname.startsWith("/Zan/");
  
  const [email, setEmail] = useState("");
  const handleAppointmnetClick = () => {
    const phoneNumber = "923490614538";
    const message = encodeURIComponent(
      "Hello, I would like to book an appointment for bridal studio.",
    );
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribe with: ${email}`);
    setEmail("");
  };
  return (
    <div className="w-full font-sans text-gray-800 bg-white  flex flex-col">
      {!hideAppointment && (
        <section className="py-12 px-6 text-center max-w-2xl mx-auto flex flex-col items-center justify-center justify-content">
          <p
            className="text-base md:text-lg text-gray-700 leading-relaxed font-light mb-8 max-w-2xl "
            data-aos="fade-up"
          >
            We invite you to discover the epitome of bridal elegance and
            tailored style by booking an appointment at our exclusive bridal
            studio.
          </p>
          <button
            onClick={handleAppointmnetClick}
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-[#755554] hover:bg-[#5f4443] text-white text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm transition-all duration-300 shadow-sm cursor-pointer"
          >
            Book Your Appointment
          </button>
        </section>
      )}
      <footer className="bg-[#F1E9E2] py-10 px-6 md:px-16 text-xs tracking-wider">
        <div className="flex justify-center items-center gap-6 mb-8 text-gray-800">
          <a href="#" className="hover:opacity-60 transition-opacity">
            <FaFacebookF size={15} />
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            <FaInstagram size={17} />
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            <FaYoutube size={17} />
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            <FaTiktok size={15} />
          </a>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          <div className="flex flex-col space-y-2.5 uppercase text-gray-800">
            <Link to="/Bridal" className="hover-underline">
              Bridals
            </Link>
            <Link to="/NargisFormal" className="hover-underline">
              Formals
            </Link>
            <Link to="/PretSS26" className="hover-underline">
              Pret
            </Link>
            <Link to="/BasicNotBasic" className="hover-underline">
              Luxury Pret
            </Link>
            <Link to="/Lawn" className="hover-underline">
              Unstitched
            </Link>
            <Link to="/NargisMenswear" className="hover-underline">
              Menswear
            </Link>
            <Link to="/PayDol" className="hover-underline">
              Best Sellers
            </Link>
          </div>
          <div className="flex flex-col space-y-2.5 uppercase text-gray-800">
            <Link to="/About" className="hover-underline">
              About Us
            </Link>
            <Link to="/FAQ" className="hove-underline">
              FAQS
            </Link>
            <Link to="/BrandPolicy" className="hove-underline">
              Brand Policy
            </Link>
            <Link to="/Returnpolicy" className="hove-underline">
              Return & Exchange Policy
            </Link>
            <Link to="/Privacypolicy" className="hove-underline">
              Privacy Policy
            </Link>
            <Link to="/Shipping" className="hove-underline">
              Shipping Policy
            </Link>
            <Link to="Contact" className="hove-underline">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              Connect
            </h3>
            <p className="text-gray-600 mb-4 normal-case text-xs">
              Join our mailing list for updates
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 max-w-sm"
            >
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-gray-200 px-4 py-3 text-xs focus:outline-none focus:border-gray-500 text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#4d5156] hover:bg-[#383b3e] text-white py-3 px-6 text-xs uppercase self-start transition-colors duration-200 cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-300/40 text-gray-500 text-[11px]">
          <p>© 2026 SAJIYA</p>
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send/?phone=%2B923490614538&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-medium hover:bg-[#20ba5a] transition-all z-50"
      >
        <FaWhatsapp size={20} />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}
export default Footer;
