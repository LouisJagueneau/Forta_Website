import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0e171e] border-t border-[#ffffff27] font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-neutral-900 text-white">
        {/* LOGO */}
        
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2 items-start">
          <h1 className="text-lg font-bold font-Stock_No_Bills tracking-wide text-white">Forta ltd.</h1>
        </div>

        {/* ENTREPRISE */}
        <div>
          <h2 className="font-semibold mb-3 ">COMPANY</h2>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">About us</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="font-semibold mb-3">SERVICES</h2>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Engineering Plastic</li>
            <li className="hover:underline cursor-pointer">CNC Parts</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h2 className="font-semibold mb-3">LEGAL</h2>
          <ul className="space-y-1">
            <li className="hover:underline cursor-pointer">Confidentiality Policy</li>
            <li className="hover:underline cursor-pointer">Legal Notice</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-3">CONTACT</h2>
          <p className="mb-1">+33 06 01 01 01 01</p>
          <p className="mb-3">support@forta.com</p>
        </div>
      </div>

      {/* Ligne rouge */}
      <div className="border-t border-[#ffffff27] mx-6" />

      {/* BOTTOM : Copyright + icônes */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-6 py-4">
        <p>
          Copyright © <span className="font-semibold text-gray-300">Forta ltd</span> all
          rights reserved
        </p>
        <div className="flex space-x-3 mt-2 md:mt-0">
          <div className="p-2 bg-[#f4f4f4] rounded-full hover:bg-gray-200 cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="p-2 bg-[#f4f4f4] rounded-full hover:bg-gray-200 cursor-pointer">
            <FaTwitter />
          </div>
          <div className="p-2 bg-[#f4f4f4] rounded-full hover:bg-gray-200 cursor-pointer">
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;