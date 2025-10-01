import { useTranslation } from 'react-i18next';

function LegalNotice() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="container mx-auto lg:mx-0 px-10 md:px-14 lg:px-22 xl:px-30 2xl:px-50">
                <div className="flex flex-col">
                    {/* Company information */}
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">{t('legal_notice_company_info_title')} <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p><span className="font-semibold">{t('legal_notice_company_name_label')}{' '}</span>{t('legal_notice_company_name_value')}</p>
                            <p><span className="font-semibold">{t('legal_notice_registered_office_label')}{' '}</span>{t('legal_notice_registered_office_value')}</p>
                            <p><span className="font-semibold">{t('legal_notice_vat_number_label')}{' '}</span>{t('legal_notice_vat_number_value')}</p>
                        </div>
                    </div>
                    <div className="mb-20">
                        <h2 className="font-Stock_No_Bills text-[2.6rem] font-semibold relative inline-block mb-8">{t('legal_notice_hosting_provider_title')} <span className="absolute h-[2px] left-0 bottom-[-8px] bg-[#ec1c24] w-full rounded-full"></span></h2>
                        <div className="font-poppins text-[1.0rem] flex flex-col gap-2">
                            <p className="mb-6"><span className="font-semibold">{t('legal_notice_website_creator_label')}{' '}</span>{t('legal_notice_website_creator_name')}{' '} <a href='https://www.louisjagueneau.com/' className="italic text-blue-500 hover:text-blue-600">(louisjagueneau.com)</a></p>
                            <p className="text-justify leading-7 mb-6"><span className="font-semibold">{t('legal_notice_intellectual_property_label')}<br/></span>{t('legal_notice_intellectual_property_text')}</p>
                            <p className="mb-6"><span className="font-semibold">{t('legal_notice_limitation_of_liability_label')} <br/></span>{t('legal_notice_limitation_of_liability_text')}</p>
                            <p>{t('legal_notice_contact_inquiry_text')}</p>
                            <p><span className="font-semibold">{t('legal_notice_email_label')}{' '}</span>{t('legal_notice_email_value')}</p>
                            <p><span className="font-semibold">{t('legal_notice_phone_label')}{' '}</span>{t('legal_notice_phone_value')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegalNotice;