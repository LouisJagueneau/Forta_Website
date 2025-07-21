import { useTranslation } from 'react-i18next';

function ConfidentialityPolicy() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50">
                <div className="flex flex-col">
                    {/* Data */}
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">{t('conf_policy_data_title')} <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p className="mb-4">{t('conf_policy_data_intro')}</p>
                            <p className="mb-4">{t('conf_policy_data_collection')}</p>
                            <p className="mb-4">{t('conf_policy_data_use')}</p>
                            <p>{t('conf_policy_data_security')}</p>
                        </div>
                    </div>
                    {/* Cookies */}
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">{t('conf_policy_cookies_title')} <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p className="mb-4">{t('conf_policy_cookies_intro')}</p>
                            <p>{t('conf_policy_cookies_types')}</p>
                        </div>
                    </div>
                    {/* HyperText Link */}
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">{t('conf_policy_hypertext_link_title')} <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p>{t('conf_policy_hypertext_link_text')}</p>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">{t('conf_policy_contact_title')} <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p className="mb-4">{t('conf_policy_contact_text')}</p>
                            <p><span className="font-semibold">{t('conf_policy_contact_email_label')}{' '}</span>{t('conf_policy_contact_email_value')}</p>
                            <p><span className="font-semibold">{t('conf_policy_contact_phone_label')}{' '}</span>{t('conf_policy_contact_phone_value')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfidentialityPolicy;