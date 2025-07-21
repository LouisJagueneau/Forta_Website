import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <footer className="bg-[#0e171e] border-t border-[#ffffff27] font-poppins">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-white">
        {/* LOGO */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2 items-start">
          <h1 className="text-lg font-bold font-Stock_No_Bills tracking-wide text-white">Forta ltd.</h1>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="font-semibold mb-3 ">{t('footer_company_title')}</h2>
          <ul className="space-y-1">
            <li><Link to='/about' className="hover:underline cursor-pointer">{t('footer_about_us_link')}</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="font-semibold mb-3">{t('footer_services_title')}</h2>
          <ul className="space-y-1">
            <li><Link to='/plasticEngineering' className="hover:underline cursor-pointer">{t('footer_engineering_plastic_link')}</Link></li>
            <li><Link to='/cncParts' className="hover:underline cursor-pointer">{t('footer_cnc_parts_link')}</Link></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h2 className="font-semibold mb-3">{t('footer_legal_title')}</h2>
          <ul className="space-y-1">
            <li><Link to='/confidentialityPolicy' className="hover:underline cursor-pointer">{t('footer_confidentiality_policy_link')}</Link></li>
            <li><Link to='/legalNotice' className="hover:underline cursor-pointer">{t('footer_legal_notice_link')}</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-3">{t('footer_contact_title')}</h2>
          <p className="mb-1">{t('footer_phone_number')}</p>
          <p className="mb-3">{t('footer_email')}</p>
        </div>
      </div>

      {/* Red line */}
      <div className="border-t border-[#ffffff27] mx-6" />

      {/* BOTTOM : Copyright + icons */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 px-6 py-4">
        <p>
          {t('footer_copyright_text').split(' ')[0]} © <span className="font-semibold text-gray-300">{t('footer_copyright_text').split(' ')[2]}</span> {t('footer_copyright_text').split(' ').slice(3).join(' ')}
        </p>
      </div>
    </footer >
  );
};

export default Footer;